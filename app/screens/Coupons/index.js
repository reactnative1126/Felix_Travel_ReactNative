import React, { Component } from "react";
import { FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Coupon } from "@components";
import styles from "./styles";

// Load sample data
import { CouponsData } from "@data";

export default class Coupons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            refreshing: false,
            coupons: CouponsData
        };
    }

    /**
     * @description Loading booking item history one by one
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @returns
     */
    renderItem(item) {
        return (
            <Coupon
                style={{
                    marginVertical: 10,
                    marginHorizontal: 20
                }}
                name={item.name}
                code={item.code}
                description={item.description}
                valid={item.valid}
                remain={item.remain}
                onPress={() => {
                    this.props.navigation.navigate("HotelDetail");
                }}
            />
        );
    }

    render() {
        const { navigation } = this.props;
        const { refreshing, coupons } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Coupons"
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
                        if (this.state.loading) {
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
                <FlatList
                    refreshControl={
                        <RefreshControl
                            colors={[BaseColor.primaryColor]}
                            tintColor={BaseColor.primaryColor}
                            refreshing={refreshing}
                            onRefresh={() => { }}
                        />
                    }
                    data={coupons}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </SafeAreaView>
        );
    }
}
