import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contain: {
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 10,
        width: "100%"
    },
    flightType: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentRow: { flexDirection: "row", marginTop: 20 },
    centerView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    colCenter: { flex: 1, alignItems: "center" }
});
