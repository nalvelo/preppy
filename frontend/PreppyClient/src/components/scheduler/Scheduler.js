import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    Slider,
    TouchableWithoutFeedback,
    TouchableOpacity,
    SegmentedControlIOS,
    DatePickerIOS,
    DatePickerAndroid,
} from 'react-native';
import UserData from '../../UserData';
import {schedulerStyles} from './SchedulerStyles';
import {buttonStyles} from '../common/CommonStyles';
import ScheduleItem, {MEAL_TYPE, ITEM_TYPE} from '../../models/ScheduleItem';
import Schedule from '../../models/Schedule';

export default class Scheduler extends Component {

    static navigationOptions = {
        title: "Schedule Recipe",
    };

    constructor(props) {
        super(props);
        this.state = {
            cookDate: new Date(),
            selectedDate: new Date(),
            remainingServings: 1,
            selectedServings: 0,
            selectedType: 0,
            numServings: 1,
            mealDates: [],
            mealServings: [],
            mealTypes: [],
            phase: 0,
            recipe: null
        };
    }

    componentWillMount() {
        const recipe = this.props.navigation.getParam("recipe", null);
        this.setState({recipe: recipe});
    }

    progressPhase = () => {
        let currentPhase = this.state.phase;
        if (currentPhase > 0) {
            let datesArray = this.state.mealDates;
            let servingsArray = this.state.mealServings;
            let typesArray = this.state.mealTypes;
            datesArray[currentPhase - 1] = this.state.selectedDate;
            servingsArray[currentPhase - 1] = this.state.selectedServings;
            typesArray[currentPhase - 1] = this.state.selectedType;
            this.setState({
                mealServings: servingsArray,
                mealDates: datesArray,
                mealTypes: typesArray,
                selectedServings: 0,
            });
        }
        let remaining = this.state.numServings;
        for (servings of this.state.mealServings) {
            remaining -= servings;
        }
        this.setState({phase: currentPhase + 1, remainingServings: remaining});
    }

    finishScheduling = () => {
        if (this.state.selectedServings > 0) {
            this.progressPhase();
        }
        let user = UserData.getUser();
        const meals = [
            MEAL_TYPE.BREAKFAST,
            MEAL_TYPE.LUNCH,
            MEAL_TYPE.DINNER,
            MEAL_TYPE.DESSERT,
            MEAL_TYPE.SNACK,
            MEAL_TYPE.OTHER
        ];
        for (let i = 0; i < this.state.mealServings.length; i++) {
            let mealDate = this.state.mealDates[i];
            let item = new ScheduleItem(
                ITEM_TYPE.MEAL,
                meals[this.state.mealTypes[i]],
                mealDate,
                this.state.recipe
            );
            Schedule.scheduleMeal(user.schedule, item);
        }

        Schedule.scheduleMeal(user.schedule, new ScheduleItem(
            ITEM_TYPE.COOK,
            MEAL_TYPE.NA,
            this.state.cookDate,
            this.state.recipe
        ));

        this.props.navigation.goBack();
        alert("Successfully Scheduled");
    }

    render() {
        const isIos = Platform.OS === 'ios';
        let datePickerCook = isIos ?
            <DatePickerIOS
                date={this.state.cookDate}
                onDateChange={(newDate) => {this.setState({cookDate: newDate})}}
                minimumDate={new Date()}
                minuteInterval={15}
            /> : []

        let datePickerMeal = isIos ?
            <DatePickerIOS
                date={this.state.selectedDate}
                onDateChange={(newDate) => {this.setState({selectedDate: newDate})}}
                minimumDate={this.state.cookDate}
                minuteInterval={15}
            /> : []
            
        let scheduleCook = 
            <View>
                <Text style={buttonStyles.buttonTextNormal}>Scheduling {this.state.recipe.name}</Text>
                <Text>
                    When will you cook?
                </Text>
                {datePickerCook}
                <Text>Number of Servings: {this.state.numServings}</Text>
                <Slider
                    minimumValue={1}
                    maximumValue={9}
                    step={1}
                    onValueChange={(value) => {this.setState({numServings: value})}}
                />
                <TouchableOpacity onPress={this.progressPhase}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>

        let scheduleMeal = 
            <View style={schedulerStyles.mealScheduler}>
                <Text>When will you eat?</Text>
                {datePickerMeal}
                <Text>Remaining Servings: {this.state.remainingServings}</Text>
                <Text>Selected Servings: {this.state.selectedServings}</Text>
                <Slider
                    minimumValue={0}
                    maximumValue={this.state.remainingServings}
                    step={1}
                    onValueChange={(value) => {this.setState({selectedServings: value})}}
                />
                <Text>Select Meal Type</Text>
                <SegmentedControlIOS
                    values={['Breakfast', 'Lunch', "Dinner", "Dessert", "Snack", "Other"]}
                    selectedIndex={this.state.selectedType}
                    onChange={(event) => {
                        this.setState({selectedType: event.nativeEvent.selectedSegmentIndex});
                    }}
                />
                <TouchableOpacity disabled={this.state.remainingServings === 0} onPress={this.progressPhase}>
                    <Text>Schedule More Meals</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.finishScheduling}>
                    <Text>Finish</Text>
                </TouchableOpacity>
            </View>

        let display = this.state.phase === 0 ? scheduleCook : scheduleMeal;

        return(
            <View style={schedulerStyles.schedulerMain}>
                {display}
            </View>
        );
    }
}