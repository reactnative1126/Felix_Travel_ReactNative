import { StyleSheet } from "react-native";
import { BaseColor } from "@config";
import * as Utils from "@utils";

export default StyleSheet.create({
    location: {
        flexDirection: "row",
        marginTop: 10
    },
    contentTag: {
        marginLeft: 20,
        marginTop: 10,
        width: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    contentUser: {
        padding: 20,
        flexDirection: "row"
    },
    imgBanner: {
        height: 240,
        width: "100%",
        position: "absolute"
    },
    imgUser: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: BaseColor.whiteColor
    }
});
