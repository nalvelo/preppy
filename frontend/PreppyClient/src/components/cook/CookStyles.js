import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const PreppyOrange = "#FDB52B";
const PreppyGreen =  "#33CF23";
const PreppyPurple = "#7625A9";
const PreppyRed =    "#F92A34";
const PreppyLight =  "#FFEED1";
const PreppyGray =   "#8D8D8D";

export const cookStyles = StyleSheet.create({

    /* ---------------------------------- *
     *  Cook Common
     * ---------------------------------- */
    cookMain: {
        backgroundColor: PreppyLight,
        minHeight: Dimensions.get('window').height,
        alignItems: "center",
        padding: 10,
    },
    cookTitle: {
        fontFamily: "Raleway",
        fontSize: 26,
        fontWeight: "bold",
        color: "#000000",
        marginTop: 10,
    },
    cookSubtitle: {
        fontFamily: "Raleway",
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
        marginTop: 5,
        paddingHorizontal: 25,
        textAlign: "center",
    },
    cookButtonActive: {
        backgroundColor: PreppyGreen,
        padding: 20,
        borderRadius: 10,
    },
    cookButtonDeactive: {
        backgroundColor: PreppyGray,
        padding: 20,
        borderRadius: 10,
    },
    cookButtonText: {
        fontFamily: "Raleway",
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    /* ---------------------------------- *
     *  Recipe Selection
     * ---------------------------------- */

    recipeSelectButton: {
        backgroundColor: PreppyOrange,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    recipeSelectButtonText: {
        fontFamily: "Raleway",
        fontSize: 20,
        color: "#FFFFFF"
    },

    /* ---------------------------------- *
     *  Ingredient Check
     * ---------------------------------- */

    requiredIngredient: {
        width: "90%",
        padding: 6,
        borderRadius: 5,
        backgroundColor: PreppyOrange,
        marginVertical: 5,
    },
    requiredIngredientText: {
        fontFamily: "Raleway",
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF"
    },

    /* ---------------------------------- *
     *  Recipe Text
     * ---------------------------------- */

    recipeStepText: {
        fontFamily: "Raleway",
        fontSize: 20,
        lineHeight: 40,
        color: "#000000",
        padding: 10,
        backgroundColor: "#FFFFFF",
        marginVertical: 10,
    },

    /* ---------------------------------- *
     *  Cook Timer
     * ---------------------------------- */

    cookTimer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
        maxHeight: 112,
        borderWidth: 5,
        borderColor: "#000000"
    },
    cookTimerClock: {
        padding: 10,
        flex: 1,
        maxHeight: 62,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#000000"
    },
    cookTimerText: {
        fontFamily: "Courier",
        fontSize: 44,
        fontWeight: "bold",
        color: "#000000"
    },
    cookTimerTextTiny: {
        fontFamily: "Courier",
        fontSize: 30,
        fontWeight: "bold",
        color: "#000000"
    },
    cookTimerButtons: {
        flex: 1,
        flexDirection: "row",
    },
    cookTimerStartButton: {
        width: "50%",
        maxHeight: 50,
        backgroundColor: PreppyGreen,
        padding: 7,
    },
    cookTimerStopButton: {
        width: "50%",
        maxHeight: 50,
        backgroundColor: PreppyRed,
        padding: 7,
    },
    cookTimerResetButton: {
        width: "50%",
        maxHeight: 50,
        backgroundColor: PreppyPurple,
        padding: 7,
    },
    cookTimerButtonText: {
        fontFamily: "Raleway",
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
        width: "100%",
        textAlign: "center",
    }
});