import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text } from "@components";
import styles from "./styles";
import PropTypes from "prop-types";

export default class ProfileAuthor extends Component {
    render() {
        const {
            style,
            image,
            styleLeft,
            styleThumb,
            styleRight,
            onPress,
            name,
            description,
            textRight
        } = this.props;
        return (
            <TouchableOpacity
                style={[styles.contain, style]}
                onPress={onPress}
                activeOpacity={0.9}
            >
                <View style={[styles.contentLeft, styleLeft]}>
                    <Image source={image} style={[styles.thumb, styleThumb]} />
                    <View>
                        <Text headline semibold numberOfLines={1}>
                            {name}
                        </Text>
                        <Text footnote grayColor numberOfLines={1}>
                            {description}
                        </Text>
                    </View>
                </View>
                <View style={[styles.contentRight, styleRight]}>
                    <Text caption2 grayColor numberOfLines={1}>
                        {textRight}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

ProfileAuthor.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    textRight: PropTypes.string,
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleThumb: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func
};

ProfileAuthor.defaultProps = {
    image: "",
    name: "",
    description: "",
    textRight: "",
    styleLeft: {},
    styleThumb: {},
    styleRight: {},
    style: {},
    onPress: () => {}
};
