import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const PreppyOrange = "#FDB52B";
const PreppyGreen =  "#33CF23";
const PreppyPurple = "#7625A9";
const PreppyRed =    "#F92A34";
const PreppyLight =  "#FFEED1";
const PreppyGray =   "#8D8D8D";

export const mainStyle = StyleSheet.create({
    main: {
        backgroundColor: "#000000",
    }
})

export const headerStyles = StyleSheet.create({
    headerMain: {
        backgroundColor: PreppyOrange,
        height: 60,
        borderBottomWidth: 3,
        borderBottomColor: "#000000",
    },
    headerButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    headerTitle: {
        fontWeight: "bold",
        fontFamily: "Raleway",
        fontSize: 24
    },
});

export const itemStyle = StyleSheet.create({
    sidebarItem: {
        paddingHorizontal: 10,
        paddingVertical: 25,
    },
});

export const sidebarStyles = StyleSheet.create({
    sidebarMain: {
        position: "absolute",
        width: 150,
        paddingTop: 80,
        backgroundColor: "#FFFFFF",
        borderLeftWidth: 4,
        borderBottomWidth: 4,
        borderColor: PreppyOrange,
        borderBottomLeftRadius: 4,
        flex: -1,
        flexDirection: "column",
    },
    sidebarItemEven: {
        ...itemStyle.sidebarItem,
        backgroundColor: "#FFF3DD"
    },
    sidebarItemOdd: {
        ...itemStyle.sidebarItem,
        backgroundColor: "#FFFFFF"
    },
    sidebarText: {
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: 20,
        color: PreppyOrange,
        textAlign: "center",
    }
});

export const recipeButtonStyles = StyleSheet.create({
    recipeButtonItem: {
        backgroundColor: PreppyOrange,
        marginHorizontal: 10,
        marginTop: 10,
        minHeight: 60,
        padding: 10,
        borderRadius: 3,
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderColor: '#DDA51B',
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    recipeButtonTitle: {
        fontFamily: 'Raleway',
        color: "#FFFFFF",
        fontSize: 24,
    },
    recipeButtonItemAlt: {
        backgroundColor: PreppyOrange,
        marginHorizontal: 10,
        marginTop: 10,
        minHeight: 20,
        padding: 5,
        borderRadius: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    recipeButtonTitleAlt: {
        fontFamily: 'Raleway',
        color: "#FFFFFF",
        fontSize: 18,
    }
})

export const buttonStyles = StyleSheet.create({
    buttonGreen: {
        backgroundColor: PreppyGreen,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
    },
    buttonTextNormal: {
        fontFamily: 'Raleway',
        color: "#FFFFFF",
        fontSize: 24,
    },
    buttonTextBold: {
        fontFamily: 'Raleway',
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: 24,
    }
})