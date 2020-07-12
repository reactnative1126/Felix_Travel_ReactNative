import React from "react";
import { StyleSheet } from "react-native";
import { BaseStyle } from "@config";

export default StyleSheet.create({
    contain: { height: 45, flexDirection: "row", justifyContent: "space-between" },
    containRTL: { height: 45, flexDirection: "row-reverse", justifyContent: "space-between" },
    contentLeft: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        width: 100
    },
    contentLeftRTL: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 20,
        width: 100
    },
    contentCenter: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    contentRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20,
        width: 100
    },
    contentRightRTL: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        width: 100
    },
    contentLeftPadding: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        height: "100%"
    },
    contentRightPadding: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 20,
        height: "100%"
    },

});
