import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "@components";
import styles from "./styles";
import PropTypes from "prop-types";

export default class ProfilePerformance extends Component {
    renderValue(type, value) {
        switch (type) {
            case "primary":
                return (
                    <Text title3 semibold primaryColor>
                        {value}
                    </Text>
                );
            case "small":
                return (
                    <Text body1 semibold>
                        {value}
                    </Text>
                );
            default:
                return (
                    <Text headline semibold>
                        {value}
                    </Text>
                );
        }
    }

    renderTitle(type, value) {
        switch (type) {
            case "primary":
                return (
                    <Text body2 grayColor>
                        {value}
                    </Text>
                );
            case "small":
                return (
                    <Text caption1 grayColor>
                        {value}
                    </Text>
                );
            default:
                return (
                    <Text body2 grayColor>
                        {value}
                    </Text>
                );
        }
    }

    render() {
        const {
            style,
            contentLeft,
            contentCenter,
            contentRight,
            data,
            type,
            flexDirection
        } = this.props;

        switch (flexDirection) {
            case "row":
                return (
                    <View style={[styles.contain, style]}>
                        {data.map((item, index) => {
                            if (index == 0) {
                                return (
                                    <View
                                        style={[
                                            styles.contentLeft,
                                            contentLeft
                                        ]}
                                        key={index}
                                    >
                                        {this.renderValue(type, item.value)}
                                        {this.renderTitle(type, item.title)}
                                    </View>
                                );
                            } else if (index == data.length - 1) {
                                return (
                                    <View
                                        style={[
                                            styles.contentRight,
                                            contentRight
                                        ]}
                                        key={index}
                                    >
                                        {this.renderValue(type, item.value)}
                                        {this.renderTitle(type, item.title)}
                                    </View>
                                );
                            } else {
                                return (
                                    <View
                                        style={[
                                            styles.contentCenter,
                                            contentCenter
                                        ]}
                                        key={index}
                                    >
                                        {this.renderValue(type, item.value)}
                                        {this.renderTitle(type, item.title)}
                                    </View>
                                );
                            }
                        })}
                    </View>
                );
            case "column":
                return (
                    <View
                        style={[
                            { justifyContent: "space-between", flex: 1 },
                            style
                        ]}
                    >
                        {data.map((item, index) => (
                            <View style={styles.itemInfor} key={index}>
                                {this.renderTitle(type, item.title)}
                                {this.renderValue(type, item.value)}
                            </View>
                        ))}
                    </View>
                );
        }
    }
}

ProfilePerformance.propTypes = {
    flexDirection: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    data: PropTypes.array,
    contentLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    contentCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    contentRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

ProfilePerformance.defaultProps = {
    flexDirection: "row",
    type: "medium",
    style: {},
    data: [],
    contentLeft: {},
    contentCenter: {},
    contentRight: {}
};
