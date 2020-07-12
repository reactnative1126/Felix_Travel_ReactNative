import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contentPickDate: {
        flexDirection: "row",
        justifyContent: "space-between",
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
    contentActionCalendarRTL: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        padding: 15
    }
});
