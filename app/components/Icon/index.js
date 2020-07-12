import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class index extends Component {
    render() {
        const { style, ...rest } = this.props;
        return <Icon style={StyleSheet.flatten([style && style])} {...rest} />;
    }
}

index.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

index.defaultProps = {
    style: {}
};
