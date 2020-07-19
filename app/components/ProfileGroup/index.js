import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Icon } from "@components";
import styles from "./styles";
import PropTypes from "prop-types";

export default class ProfileGroup extends Component {
    render() {
        const {
            style,
            users,
            styleLeft,
            styleThumb,
            styleRight,
            onPress,
            onPressLove,
            name,
            detail
        } = this.props;
        return (
            <View style={[styles.contain, style]}>
                <TouchableOpacity
                    style={[styles.contentLeft, styleLeft]}
                    onPress={onPress}
                    activeOpacity={0.9}
                >
                    <View style={{ flexDirection: "row", marginRight: 7 }}>
                        {users.map((item, index) => {
                            return (
                                <Image
                                    key={index}
                                    source={item.image}
                                    style={[
                                        styles.thumb,
                                        index != 0 ? { marginLeft: -15 } : {},
                                        styleThumb
                                    ]}
                                />
                            );
                        })}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text headline semibold numberOfLines={1}>
                            {name}
                        </Text>
                        <Text footnote grayColor numberOfLines={1}>
                            {detail}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.contentRight, styleRight]}
                    onPress={onPressLove}
                    activeOpacity={0.9}
                >
                    <Icon name="heart" grayColor size={18} />
                </TouchableOpacity>
            </View>
        );
    }
}

ProfileGroup.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    users: PropTypes.array,
    name: PropTypes.string,
    detail: PropTypes.string,
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleThumb: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func,
    onPressLove: PropTypes.func
};

ProfileGroup.defaultProps = {
    style: {},
    users: [],
    name: "",
    detail: "",
    styleLeft: {},
    styleThumb: {},
    styleRight: {},
    onPress: () => {},
    onPressLove: () => {}
};
