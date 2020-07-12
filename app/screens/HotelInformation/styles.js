import { StyleSheet } from "react-native";
import { BaseColor } from "@config";
import * as Utils from "@utils";

export default StyleSheet.create({
    contentGallery: { width: "100%", height: Utils.scaleWithPixel(205) },
    galleryLineTop: {
        flexDirection: "row",
        flex: 1,
        paddingBottom: 5
    },
    galleryLineBottom: {
        flexDirection: "row",
        flex: 1
    },
    line: {
        height: 1,
        backgroundColor: BaseColor.textSecondaryColor,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    contentButtonBottom: {
        borderTopColor: BaseColor.textSecondaryColor,
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});
