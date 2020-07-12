import { StyleSheet } from "react-native";
import { BaseColor, BaseStyle } from "@config";

export default StyleSheet.create({
    contain: {
        paddingVertical: 10,
        width: "100%"
    },
    roundLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 20
    },
    contentRange: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    },
    contentResultRange: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center"
    }
});
