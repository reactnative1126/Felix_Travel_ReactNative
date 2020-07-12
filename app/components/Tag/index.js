import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Text from "@components/Text";
import styles from "./styles";

export default class index extends Component {
    render() {
        const {
            style,
            styleText,
            icon,
            outline,
            small,
            tag,
            light,
            gray,
            rate,
            sale,
            ...rest
        } = this.props;

        return (
            <TouchableOpacity
                {...rest}
                style={StyleSheet.flatten([
                    styles.default,
                    outline && styles.outline,
                    small && styles.small,
                    light && styles.light,
                    gray && styles.gray,
                    rate && styles.rate,
                    sale && styles.sale,
                    style
                ])}
                activeOpacity={0.9}
            >
                {icon ? icon : null}
                <View style={styles.viewText}>
                    <Text
                        style={StyleSheet.flatten([
                            styles.textDefault,
                            outline && styles.textOuline,
                            small && styles.textSmall,
                            light && styles.textLight,
                            gray && styles.textGray,
                            rate && styles.textRate,
                            sale && styles.textSale,
                            styleText
                        ])}
                        numberOfLines={1}
                    >
                        {this.props.children || "Tag"}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

index.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.node,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    light: PropTypes.bool,
    gray: PropTypes.bool,
    rate: PropTypes.bool,
    sale: PropTypes.bool
};

index.defaultProps = {
    style: {},
    icon: null,
    outline: false,
    small: false,
    light: false,
    gray: false,
    rate: false,
    sale: false
};
