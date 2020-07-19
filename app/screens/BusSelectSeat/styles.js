import { StyleSheet } from "react-native";
import { BaseColor, BaseStyle } from "@config";

export default StyleSheet.create({
    contentButtonBottom: {
        borderTopColor: BaseColor.textSecondaryColor,
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    lineSeatType: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1
    },
    booked: {
        width: 30,
        height: 30,
        borderRadius: 8,
        marginBottom: 5,
        backgroundColor: BaseColor.darkPrimaryColor,
        alignItems: "center",
        justifyContent: "center"
    },
    selected: {
        width: 30,
        height: 30,
        borderRadius: 8,
        marginBottom: 5,
        backgroundColor: BaseColor.accentColor,
        alignItems: "center",
        justifyContent: "center"
    },
    empty: {
        width: 30,
        height: 30,
        borderRadius: 8,
        marginBottom: 5,
        backgroundColor: BaseColor.grayColor,
        alignItems: "center",
        justifyContent: "center"
    },
    lineDirection: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    itemSeat: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
    }
});
