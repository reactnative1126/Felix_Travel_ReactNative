import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, BookingHistory } from "@components";
import { BookingHistoryData } from "@data";
import styles from "./styles";

export default class Booking extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            loading: false,
            refreshing: false,
            bookingHistory: BookingHistoryData
        };
    }

    renderItem(item) {
        return (
            <BookingHistory
                name={item.name}
                checkIn={item.checkIn}
                checkOut={item.checkOut}
                total={item.total}
                price={item.price}
                style={{ paddingVertical: 10, marginHorizontal: 20 }}
                onPress={() => {
                    this.props.navigation.navigate("BookingDetail");
                }}
            />
        );
    }


    /**
     * @description Loading booking item history one by one
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @returns
     */
    render() {
        const { navigation } = this.props;
        let { refreshing, bookingHistory } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Booking History"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
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
                    data={bookingHistory}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </SafeAreaView>
        );
    }
}
