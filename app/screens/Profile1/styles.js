import { StyleSheet } from "react-native";
import { BaseColor } from "@config";
import * as Utils from "@utils";

export default StyleSheet.create({
    contain: { alignItems: "center" },
    tourItem: {
        width: Utils.scaleWithPixel(135),
        height: Utils.scaleWithPixel(160)
    },
    hotelItem: { width: Utils.scaleWithPixel(160) },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    location: {
        flexDirection: "row",
        marginTop: 17
    },
    tagFollow: { width: 100, marginTop: 15 },
    description: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30,
        textAlign: "center"
    },
    contentField: {
        backgroundColor: BaseColor.fieldColor,
        paddingTop: 10,
        paddingBottom: 10
    },
    fieldItem: {
        alignItems: "center",
        flex: 1
    },
    imageBanner: {
        width: 135,
        height: 160,
        borderRadius: 10
    },
    txtBanner: {
        position: "absolute",
        left: 10,
        top: 130
    }
});
