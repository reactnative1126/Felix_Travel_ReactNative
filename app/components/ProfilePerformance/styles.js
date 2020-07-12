import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contain: {
        height: 60,
        flexDirection: "row",
        backgroundColor: BaseColor.fieldColor,
        paddingLeft: 20,
        paddingRight: 20
    },
    contentLeft: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    contentCenter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    contentRight: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
    itemInfor: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    }
});
