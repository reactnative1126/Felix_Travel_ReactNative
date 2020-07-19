import React, { Component } from "react";
import { FlatList, RefreshControl, View, TouchableOpacity } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text } from "@components";
import styles from "./styles";

export default class More extends Component {
    constructor(props) {
        super(props);

        // Define list more screens
        this.state = {
            refreshing: false,
            screen: [
                {
                    id: "1",
                    screen: "FlightSearch",
                    icon: "plane",
                    title: "Flight Booking"
                },
                {
                    id: "2",
                    screen: "CruiseSearch",
                    icon: "ship",
                    title: "Cruise Booking"
                },
                {
                    id: "3",
                    screen: "BusSearch",
                    icon: "bus",
                    title: "Shutle Bus"
                },
                {
                    id: "4",
                    screen: "Profile",
                    icon: "cog",
                    title: "Profile Settings"
                },
                {
                    id: "5",
                    screen: "ProfileExample",
                    icon: "users",
                    title: "8 User Profiles"
                },
                {
                    id: "6",
                    screen: "Post",
                    icon: "copy",
                    title: "Simple Blog"
                },
                {
                    id: "7",
                    screen: "AboutUs",
                    icon: "home",
                    title: "About Us"
                },
                {
                    id: "8",
                    screen: "ContactUs",
                    icon: "phone-square",
                    title: "ContactUs"
                },
                {
                    id: "9",
                    screen: "OurService",
                    icon: "cubes",
                    title: "Our Service"
                },
                {
                    id: "10",
                    screen: "PricingTable",
                    icon: "dollar-sign",
                    title: "Pricing Table"
                },
                {
                    id: "11",
                    screen: "Review",
                    icon: "comments",
                    title: "User Reviews"
                },
                {
                    id: "12",
                    screen: "Notification",
                    icon: "paper-plane",
                    title: "Notification List"
                },
                {
                    id: "13",
                    screen: "Messenger",
                    icon: "envelope",
                    title: "Message List"
                },
                {
                    id: "14",
                    screen: "Messages",
                    icon: "comment",
                    title: "Messenger"
                },
                {
                    id: "15",
                    screen: "BookingHistory",
                    icon: "bookmark",
                    title: "Booking History"
                },
                {
                    id: "16",
                    screen: "Coupons",
                    icon: "barcode",
                    title: "Coupons"
                }
            ]
        };
    }

    render() {
        const { navigation } = this.props;
        let { screen } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header title="More" subTitle="Profile 8 Screens and More" />
                <FlatList
                    contentContainerStyle={{
                        marginHorizontal: 20
                    }}
                    refreshControl={
                        <RefreshControl
                            colors={[BaseColor.primaryColor]}
                            tintColor={BaseColor.primaryColor}
                            refreshing={this.state.refreshing}
                            onRefresh={() => { }}
                        />
                    }
                    data={screen}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate(item.screen)}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Icon
                                    name={item.icon}
                                    color={BaseColor.primaryColor}
                                    size={18}
                                    solid
                                    style={{ marginRight: 10 }}
                                />
                                <Text body1>{item.title}</Text>
                            </View>
                            <Icon
                                name="angle-right"
                                size={18}
                                color={BaseColor.primaryColor}
                            />
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        );
    }
}
