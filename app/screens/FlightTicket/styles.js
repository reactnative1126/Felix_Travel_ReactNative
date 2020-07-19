import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contain: {
        padding: 20,
        width: "100%"
    },
    classContent: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 15
    },
    line: {
        width: "100%",
        height: 1,
        borderWidth: 0.5,
        borderColor: BaseColor.dividerColor,
        borderStyle: "dashed",
        marginVertical: 20
    },
    code: {
        width: "100%",
        backgroundColor: "black",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    }
});
