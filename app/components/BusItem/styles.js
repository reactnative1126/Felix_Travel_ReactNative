import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    content: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: BaseColor.fieldColor
    },
    contentTop: {
        flexDirection: "row",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: BaseColor.textSecondaryColor
    },

    contentBottom: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between"
    },
    bottomLeft: { flexDirection: "row", alignItems: "center" },
    image: { width: 32, height: 32, marginRight: 10, borderRadius: 16 }
});
