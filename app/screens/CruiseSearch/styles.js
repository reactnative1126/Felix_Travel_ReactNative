import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contain: {
        padding: 20,
        width: "100%"
    },
    contentQuest: {
        marginTop: 15,
        flexDirection: "row",
        marginBottom: 15
    },
    total: {
        flex: 4,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor,
        padding: 10,
        marginRight: 15
    },
    duration: {
        flex: 6,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor,
        padding: 10
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
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
    lineRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    iconRight: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
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
    }
});
