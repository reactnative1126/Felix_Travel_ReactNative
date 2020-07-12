import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    text: { fontFamily: "Raleway" },
    header: {
        fontSize: 34,
        fontWeight: "400"
    },
    title1: {
        fontSize: 28,
        fontWeight: "400"
    },
    title2: {
        fontSize: 22,
        fontWeight: "300"
    },
    title3: {
        fontSize: 20,
        fontWeight: "300"
    },
    headline: {
        fontSize: 17,
        fontWeight: "200"
    },
    body1: {
        fontSize: 17,
        fontWeight: "200"
    },
    body2: {
        fontSize: 14,
        fontWeight: "200"
    },
    callout: {
        fontSize: 17,
        fontWeight: "200"
    },
    subhead: {
        fontSize: 15,
        fontWeight: "200"
    },
    footnote: {
        fontSize: 13,
        fontWeight: "100"
    },
    caption1: {
        fontSize: 12,
        fontWeight: "100"
    },
    caption2: {
        fontSize: 11,
        fontWeight: "100"
    },
    overline: {
        fontSize: 10,
        fontWeight: "100"
    },
    darkBlue: {
        color: BaseColor.darkBlueColor
    },
    gray: {
        color: BaseColor.grayColor
    },
    primary: {
        color: BaseColor.primaryColor
    },
    accent: {
        color: BaseColor.accentColor
    }
});
