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
        marginBottom: 30,
        flexDirection: "row"
    },
    imgBanner: {
        height: 335,
        width: "100%",
        position: "absolute"
    },
    imgUser: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: BaseColor.whiteColor
    },
    contentLeftUser: {
        flex: 1,
        justifyContent: "flex-end"
    }
});
