import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Icon, Text } from "@components";
import styles from "./styles";
import { BaseColor } from "@config";

export default class BusPlan extends Component {
    render() {
        const {
            style,
            from,
            fromCode,
            to,
            toCode,
            onPressFrom,
            onPressTo
        } = this.props;
        return (
            <View style={[styles.contentRow, style]}>
                <TouchableOpacity
                    style={styles.colCenter}
                    onPress={onPressFrom}
                    activeOpacity={0.9}
                >
                    <Text body1 light>
                        From
                    </Text>
                    <Text header semibold>
                        {fromCode}
                    </Text>
                    <Text body1>{from}</Text>
                </TouchableOpacity>
                <View style={styles.centerView}>
                    <Icon
                        name="bus"
                        color={BaseColor.primaryColor}
                        size={24}
                        solid
                    />
                </View>
                <TouchableOpacity
                    style={styles.colCenter}
                    onPress={onPressTo}
                    activeOpacity={0.9}
                >
                    <Text body1 light>
                        To
                    </Text>
                    <Text header semibold>
                        {toCode}
                    </Text>
                    <Text body1>{to}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

BusPlan.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    fromCode: PropTypes.string,
    toCode: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    onPressFrom: PropTypes.func,
    onPressTo: PropTypes.func
};

BusPlan.defaultProps = {
    style: {},
    fromCode: "SIN",
    toCode: "SYD",
    from: "Singapore",
    to: "Sydney",
    onPressFrom: () => {},
    onPressTo: () => {}
};
