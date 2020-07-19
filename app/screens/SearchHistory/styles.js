import { StyleSheet } from "react-native";
import { BaseColor, BaseStyle } from "@config";

export default StyleSheet.create({
    btnClearSearch: {
        position: "absolute",
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: "100%"
    },
    rowTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemHistory: {
        marginTop: 5,
        padding: 5,
        backgroundColor: BaseColor.fieldColor,
        marginRight: 10
    }
});
