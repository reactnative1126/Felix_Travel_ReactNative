import React from "react";
import { StyleSheet, Platform } from "react-native";
import { BaseColor } from "@config";
import * as Utils from "@utils";

export default StyleSheet.create({
    imgBanner: {
        width: "100%",
        height: 250,
        position: "absolute"
    },
    blockView: {
        paddingVertical: 10,
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1
    },
    contentService: {
        paddingVertical: 10,
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    contentBoxTop: {
        padding: 10,
        height: 120,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: BaseColor.whiteColor,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: BaseColor.grayColor,
        shadowOpacity: 1.0,
        elevation: 5
    },
    circlePoint: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 5,
        backgroundColor: BaseColor.primaryColor,
        alignItems: "center",
        justifyContent: "center"
    },
    contentRateDetail: {
        flexDirection: "row",
        paddingTop: 20
    },
    lineBaseRate: {
        width: "100%",
        height: 12,
        borderRadius: 8,
        backgroundColor: BaseColor.textSecondaryColor
    },
    linePercent: {
        width: "80%",
        height: 12,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: BaseColor.accentColor,
        position: "absolute",
        bottom: 0
    },
    contentLineRate: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    listContentIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        width: "100%"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    itemReason: {
        paddingLeft: 10,
        marginTop: 10,
        flexDirection: "row"
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
