import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor, Typography, FontWeight } from "@config";

export default StyleSheet.create({
    default: {
        height: 28,
        backgroundColor: BaseColor.primaryColor,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 19,
        paddingHorizontal: 10
    },
    textDefault: {
        ...Typography.caption1,
        color: "white",
        fontWeight: FontWeight.regular
    },
    outline: {
        borderWidth: 1,
        backgroundColor: "transparent",
        borderColor: BaseColor.primaryColor
    },
    textOuline: {
        color: BaseColor.primaryColor
    },
    small: {
        height: 20,
        borderRadius: 0,
        paddingHorizontal: 5
    },
    textSmall: {
        ...Typography.caption2,
        color: "white",
        fontWeight: FontWeight.regular
    },
    light: {
        height: 20,
        borderRadius: 0,
        paddingHorizontal: 5,
        backgroundColor: BaseColor.lightPrimaryColor
    },
    textLight: {
        ...Typography.caption2,
        color: BaseColor.primaryColor,
        fontWeight: FontWeight.regular
    },
    gray: {
        height: 20,
        borderRadius: 0,
        paddingHorizontal: 5,
        backgroundColor: BaseColor.dividerColor
    },
    textGray: {
        ...Typography.caption2,
        color: BaseColor.grayColor,
        fontWeight: FontWeight.regular
    },
    rate: {
        height: 30,
        width: 40,
        borderRadius: 5,
        borderTopRightRadius: 2,
        paddingHorizontal: 5,
        backgroundColor: BaseColor.lightPrimaryColor
    },
    textRate: {
        ...Typography.headline,
        color: "white",
        fontWeight: FontWeight.semibold
    },
    sale: {
        height: 50,
        width: 50,
        borderRadius: 25,
        paddingHorizontal: 5,
        backgroundColor: BaseColor.lightPrimaryColor
    },
    textSale: {
        ...Typography.headline,
        color: "white",
        fontWeight: FontWeight.semibold
    }
});
