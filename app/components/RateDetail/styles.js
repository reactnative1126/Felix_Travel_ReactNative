import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contain: {
        flexDirection: "row",
        width: "100%",
        height: 85
    },
    contentLeft: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "center"
    },
    containRight: {
        flex: 6.5,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    starLeft: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    lineStar: {
        height: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    containStatus: { flex: 6.5, justifyContent: "center" },
    contentLineStatus: {
        height: 10,
        justifyContent: "center",
        marginLeft: 10
    },
    lineStatusGray: {
        height: 3,
        width: "100%",
        borderRadius: 1.5,
        backgroundColor: BaseColor.fieldColor
    },
    lineStatusPrimary: {
        height: 3,
        width: "10%",
        borderTopLeftRadius: 1.5,
        borderBottomLeftRadius: 1.5,
        backgroundColor: BaseColor.primaryColor,
        position: "absolute"
    }
});
