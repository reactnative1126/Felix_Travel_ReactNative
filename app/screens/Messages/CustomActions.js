import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewPropTypes,
    Text
} from "react-native";

export default class CustomActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
        this.onActionsPress = this.onActionsPress.bind(this);
    }

    setModalVisible(visible = false) {
        this.setState({ modalVisible: visible });
    }

    onActionsPress() {
        const options = ["Choose From Library", "Send Location", "Cancel"];
        const cancelButtonIndex = options.length - 1;
        this.context.actionSheet().showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        this.setModalVisible(true);
                        break;
                    case 1:
                        navigator.geolocation.getCurrentPosition(
                            position => {
                                this.props.onSend({
                                    location: {
                                        latitude: position.coords.latitude,
                                        longitude: position.coords.longitude
                                    }
                                });
                            },
                            error => alert(error.message),
                            {
                                enableHighAccuracy: true,
                                timeout: 20000,
                                maximumAge: 1000
                            }
                        );
                        break;
                    default:
                }
            }
        );
    }

    renderIcon() {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (
            <View style={[styles.wrapper, this.props.wrapperStyle]}>
                <Text style={[styles.iconText, this.props.iconTextStyle]}>
                    +
                </Text>
            </View>
        );
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}
            >
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    <Text>in modal</Text>
                </Modal>
                {this.renderIcon()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10
    },
    wrapper: {
        borderRadius: 13,
        borderColor: "#b2b2b2",
        borderWidth: 2,
        flex: 1
    },
    iconText: {
        color: "#b2b2b2",
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: "transparent",
        textAlign: "center"
    }
});

CustomActions.contextTypes = {
    actionSheet: PropTypes.func
};

CustomActions.defaultProps = {
    onSend: () => {},
    options: {},
    icon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {}
};

CustomActions.propTypes = {
    onSend: PropTypes.func,
    options: PropTypes.object,
    icon: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    wrapperStyle: ViewPropTypes.style,
    iconTextStyle: Text.propTypes.style
};
