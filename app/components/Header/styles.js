import React from "react";
import { StyleSheet } from "react-native";
import { BaseStyle } from "@config";

export default StyleSheet.create({
    contain: { height: 45, 
        // flexDirection: "row" 
    },
    contentLeft: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
        width: 60
    },
    contentCenter: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    contentRight: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 20,
        height: "100%"
    },
    contentRightSecond: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 10,
        height: "100%"
    },
    right: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});
