import React, { Component } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import { Text } from "@components";
import styles from "./styles";
import PropTypes from "prop-types";

export default class Header extends Component {
    componentDidMount() {
        StatusBar.setBarStyle(this.props.barStyle, true);
    }

    componentWillUnmount() {
        StatusBar.setBarStyle("default", true);
    }

    render() {
        const {
            isRTL,
            style,
            styleLeft,
            styleCenter,
            styleRight,
            styleRightSecond,
            title,
            subTitle,
            onPressLeft,
            onPressRight,
            onPressRightSecond
        } = this.props;

        return (
            <View style={[styles.contain, style, !isRTL ? {flexDirection: "row" } : {flexDirection: "row-reverse" }]}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={[!isRTL ? styles.contentLeft : styles.contentRight, styleLeft]}
                        onPress={onPressLeft}
                    >
                        {this.props.renderLeft()}
                    </TouchableOpacity>
                </View>
                <View style={[styles.contentCenter, styleCenter]}>
                    <Text headline style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>{title}</Text>
                    {subTitle != "" && (
                        <Text caption2 light style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>
                            {subTitle}
                        </Text>
                    )}
                </View>
                <View 
                    style={!isRTL ? [{transform: [{scaleX: 1}]}, styles.right] : [{transform: [{scaleX: -1}]}, styles.left]}>
                    <TouchableOpacity
                        style={[styles.contentRightSecond, styleRightSecond]}
                        onPress={onPressRightSecond}
                    >
                        {this.props.renderRightSecond()}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[!isRTL ? styles.contentLeft : styles.contentRight, styleLeft]}
                        onPress={onPressRight}
                    >
                        {this.props.renderRight()}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Header.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRightSecond: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func,
    renderRightSecond: PropTypes.func,
    onPressRightSecond: PropTypes.func,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    barStyle: PropTypes.string
};

Header.defaultProps = {
    style: {},
    styleLeft: {},
    styleCenter: {},
    styleRight: {},
    styleRightSecond: {},
    renderLeft: () => {},
    renderRight: () => {},
    renderRightSecond: () => {},
    onPressLeft: () => {},
    onPressRight: () => {},
    onPressRightSecond: () => {},
    title: "Title",
    subTitle: "",
    barStyle: "default"
};
