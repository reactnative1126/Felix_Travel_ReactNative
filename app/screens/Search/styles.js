import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contentPickDate: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor,
        padding: 10
    },
    itemPick: {
        flex: 1,
        justifyContent: "center"
    },
    linePick: {
        width: 1,
        backgroundColor: BaseColor.dividerColor,
        marginRight: 10
    },
    total: {
        flex: 6,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor,
        padding: 10,
        marginRight: 15
    },
    totalRTL: {
        flex: 6,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor,
        padding: 10,
        marginLeft: 15
    },
    duration: {
        flex: 4,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor,
        padding: 10
    },
    contentQuest: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    contentQuestRTL: {
        marginTop: 15,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        marginBottom: 15
    },
    contentModal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    contentCalendar: {
        borderRadius: 8,
        width: "100%",
        backgroundColor: "white"
    },
    contentActionCalendar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    lineRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    lineRowRTL: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    iconRight: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contentFilterBottom: {
        width: "100%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingHorizontal: 20,
        backgroundColor: BaseColor.whiteColor
    },
    contentSwipeDown: {
        paddingTop: 10,
        alignItems: "center"
    },
    lineSwipeDown: {
        width: 30,
        height: 2.5,
        backgroundColor: BaseColor.dividerColor
    },
    contentActionModalBottom: {
        flexDirection: "row",
        paddingVertical: 10,
        marginBottom: 10,
        justifyContent: "space-between",
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1
    },
    contentActionModalBottomRTL: {
        flexDirection: "row-reverse",
        paddingVertical: 10,
        marginBottom: 10,
        justifyContent: "space-between",
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1
    }
});
