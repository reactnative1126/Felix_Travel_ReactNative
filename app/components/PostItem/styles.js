import { StyleSheet } from "react-native";
import { BaseColor } from "@config";
import * as Utils from "@utils";

export default StyleSheet.create({
    imagePost: { width: "100%", height: Utils.scaleWithPixel(220) },
    content: {
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1
    }
});
