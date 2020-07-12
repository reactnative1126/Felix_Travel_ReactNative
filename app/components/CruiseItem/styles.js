import { StyleSheet } from "react-native";
import * as Utils from "@utils";
import { BaseColor } from "@config";

export default StyleSheet.create({
    //block css
    blockImage: {
        height: Utils.scaleWithPixel(200),
        width: "100%"
    },
    blockContent: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    blockPrice: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: BaseColor.primaryColor,
        borderRadius: 8,
        position: "absolute",
        left: 20,
        top: 10
    },
    iconLine: {
        flexDirection: "row",
        alignItems: "center"
    },
    blockReview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5
    },
    blockStatusRate: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    blockBottom: {
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between"
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
    listPrice: {
        paddingVertical: 3,
        paddingHorizontal: 5,
        backgroundColor: BaseColor.primaryColor,
        borderRadius: 8,
        position: "absolute",
        left: 5,
        top: 5
    },
    listContentPrice: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flex: 1
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
    girdContentName: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5
    },
    girdSaleOff: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: BaseColor.primaryColor,
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    girdContentRate: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        alignItems: "center"
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    }
});
