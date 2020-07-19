import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    item: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    contain: {
        flexDirection: "row",
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    thumb: { width: 48, height: 48, marginRight: 10, borderRadius: 24 },
    content: {
        flex: 1,
        flexDirection: "row"
    },
    left: {
        flex: 7.5,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    right: {
        flex: 2.5,
        alignItems: "flex-end",
        justifyContent: "center"
    }
});
