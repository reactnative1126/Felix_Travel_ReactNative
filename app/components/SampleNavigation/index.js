import React, { Component } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { BaseColor } from "@config";
import { Icon, Text } from "@components";
import PropTypes from "prop-types";

export default class SampleNavigation extends Component {
    render() {
        const {
            style,
            titleStyle,
            title,
            screen,
            itemStyle,
            navigation
        } = this.props;
        return (
            <View style={style}>
                <Text title3 semibold style={titleStyle} numberOfLines={1}>
                    {title}
                </Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={screen}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={itemStyle}
                            onPress={() => {
                                navigation && navigation.navigate(item.screen);
                            }}
                        >
                            <Text body2 whiteColor numberOfLines={1}>
                                {item.screen}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

SampleNavigation.propTypes = {
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    itemStyle: PropTypes.object,
    title: PropTypes.string,
    screen: PropTypes.array,
    navigation: PropTypes.object
};

SampleNavigation.defaultProps = {
    style: {},
    titleStyle: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10
    },
    itemStyle: {
        width: 70,
        height: 70,
        backgroundColor: BaseColor.primaryColor,
        borderRadius: 35,
        marginLeft: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    title: "Profiles Screen",
    screen: [
        { key: "1", screen: "Profile" },
        { key: "2", screen: "Profile1" },
        { key: "3", screen: "Profile2" },
        { key: "4", screen: "Profile3" },
        { key: "5", screen: "Profile4" },
        { key: "6", screen: "Profile5" },
        { key: "7", screen: "Profile6" },
        { key: "8", screen: "Profile7" },
        { key: "18", screen: "Profile8" },
        { key: "9", screen: "Review" },
        { key: "10", screen: "Feedback" },
        { key: "11", screen: "Messages" },
        { key: "12", screen: "Notification" },
        { key: "13", screen: "Walkthrough" },
        { key: "14", screen: "SignUp" },
        { key: "15", screen: "SignIn" },
        { key: "16", screen: "ResetPassword" },
        { key: "17", screen: "ChangePassword" },
        { key: "19", screen: "ProfileEdit" },
        { key: "20", screen: "ChangeLanguage" }
    ],
    navigation: {}
};
