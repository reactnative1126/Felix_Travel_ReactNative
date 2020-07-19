import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor, Typography, FontWeight } from "@config";

export default StyleSheet.create({
    default: {
        height: 56,
        borderRadius: 8,
        backgroundColor: BaseColor.primaryColor,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    textDefault: {
        ...Typography.headline,
        color: BaseColor.whiteColor,
        fontWeight: FontWeight.semibold
    },
    outline: {
        backgroundColor: BaseColor.whiteColor,
        borderWidth: 1,
        borderColor: BaseColor.primaryColor
    },
    textOuline: {
        color: BaseColor.primaryColor
    },
    full: {
        width: "100%",
        alignSelf: "auto"
    },
    round: {
        borderRadius: 28
    }
});
