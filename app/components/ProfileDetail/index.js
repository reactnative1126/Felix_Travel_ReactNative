import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Icon, Text } from "@components";
import styles from "./styles";
import PropTypes from "prop-types";
import { BaseColor } from "@config";

export default class ProfileDetail extends Component {
    render() {
        const {
            isRTL,
            style,
            image,
            styleLeft,
            styleThumb,
            styleRight,
            onPress,
            textFirst,
            point,
            textSecond,
            textThird,
            icon
        } = this.props;
        return (
            <TouchableOpacity
                style={[styles.contain, style]}
                onPress={onPress}
                activeOpacity={0.9}
            >
                <View style={[styles.contentLeft, styleLeft]}>
                    <View style={ !isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}>
                        <Image
                            source={image}
                            style={[styles.thumb, styleThumb]}
                        />
                        <View style={styles.point}>
                            <Text overline whiteColor semibold>
                                {point}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text headline semibold numberOfLines={1}
                            style={ !isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}
                        >
                            {textFirst}
                        </Text>
                        <Text
                            body2
                            style={[!isRTL ? {transform: [{scaleX: 1}], paddingRight: 10} : {transform: [{scaleX: -1}], paddingLeft: 10}, { marginTop: 3 }]}
                            numberOfLines={1}
                        >
                            {textSecond}
                        </Text>
                        <Text footnote grayColor numberOfLines={1}
                            style={ !isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}>
                            {textThird}
                        </Text>
                    </View>
                </View>
                {icon && (
                    <View style={[styles.contentRight, styleRight]}>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={BaseColor.grayColor}
                        />
                    </View>
                )}
            </TouchableOpacity>
        );
    }
}

ProfileDetail.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    textFirst: PropTypes.string,
    point: PropTypes.string,
    textSecond: PropTypes.string,
    textThird: PropTypes.string,
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleThumb: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.bool,
    onPress: PropTypes.func
};

ProfileDetail.defaultProps = {
    image: "",
    textFirst: "",
    textSecond: "",
    icon: true,
    point: "",
    style: {},
    styleLeft: {},
    styleThumb: {},
    styleRight: {},
    onPress: () => {}
};
