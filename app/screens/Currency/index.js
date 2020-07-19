import React, { Component } from "react";
import {
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text } from "@components";
import styles from "./styles";

// Load sample data
import { CurrencyData } from "@data";

export default class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            currency: CurrencyData
        };
    }

    /**
     * @description Called when setting currency is selected
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {object} select
     */
    onSelect(select) {
        this.setState({
            currency: this.state.currency.map(item => {
                if (item.currency == select.currency) {
                    return {
                        ...item,
                        checked: true
                    };
                } else {
                    return {
                        ...item,
                        checked: false
                    };
                }
            })
        });
    }

    /**
     * @description Load item one by one
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {*} item
     * @param {*} index
     * @returns
     */
    renderItem(item, index) {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => this.onSelect(item)}
            >
                <Text
                    body1
                    style={
                        item.checked
                            ? {
                                color: BaseColor.primaryColor
                            }
                            : {}
                    }
                >
                    {item.currency}
                </Text>
                {item.checked ? (
                    <Icon
                        name="check"
                        size={14}
                        color={BaseColor.primaryColor}
                    />
                ) : null}
            </TouchableOpacity>
        );
    }

    render() {
        const { navigation } = this.props;
        const { loading, currency } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Currency"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    renderRight={() => {
                        if (loading) {
                            return (
                                <ActivityIndicator
                                    size="small"
                                    color={BaseColor.primaryColor}
                                />
                            );
                        } else {
                            return (
                                <Text headline primaryColor>
                                    Save
                                </Text>
                            );
                        }
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {
                        this.setState(
                            {
                                loading: true
                            },
                            () => {
                                setTimeout(() => {
                                    navigation.goBack();
                                }, 500);
                            }
                        );
                    }}
                />
                <View style={styles.contain}>
                    <View style={{ width: "100%", height: "100%" }}>
                        <FlatList
                            data={currency}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) =>
                                this.renderItem(item, index)
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
