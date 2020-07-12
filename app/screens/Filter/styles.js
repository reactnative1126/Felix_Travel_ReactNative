import { StyleSheet } from "react-native";
import { BaseColor, BaseStyle } from "@config";

export default StyleSheet.create({
    contentRange: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        marginTop: 10
    },
    contentResultRange: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    contentList: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10
    },
    contentQuest: {
        height: 85,
        justifyContent: "space-between",
        marginTop: 10
    },
    lineRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconRight: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    interioItem: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center"
    }
});
