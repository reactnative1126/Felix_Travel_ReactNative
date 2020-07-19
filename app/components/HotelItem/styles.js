import { StyleSheet } from "react-native";
import * as Utils from "@utils";
import { BaseColor } from "@config";

export default StyleSheet.create({
    //block css
    blockImage: {
        height: Utils.scaleWithPixel(200),
        width: "100%"
    },
    blockContentAddress: {
        flexDirection: "row",
        marginTop: 3,
        alignItems: "center"
    },
    blockContentDetail: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 10
    },
    blockListContentIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        width: "100%",
        marginTop: 4
    },
    contentService: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 10,
        borderColor: BaseColor.fieldColor,
        borderBottomWidth: 1
    },
    serviceItemBlock: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        width: 60
    },
    //list css
    listImage: {
        height: Utils.scaleWithPixel(140),
        width: Utils.scaleWithPixel(120)
    },
    listContent: {
        flexDirection: "row",
        backgroundColor: BaseColor.fieldColor
    },
    listContentRight: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        flex: 1
    },
    listContentRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    //gird css
    girdImage: {
        borderRadius: 8,
        height: Utils.scaleWithPixel(120),
        width: "100%"
    },
    girdContent: {
        flex: 1
    },
    girdContentLocation: {
        // flexDirection: "row",
        // justifyContent: "flex-start",
        marginTop: 5
    },
    girdContentRate: {
        // flexDirection: "row",
        // justifyContent: "space-between",
        marginTop: 10
    }
});
