import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Button } from "@components";
import * as Utils from "@utils";
import styles from "./styles";

export default class PreviewBusBooking extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Preview Booking"
                    subTitle="Booking Number GAX02"
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
                <ScrollView>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={styles.blockView}>
                            <Text body2 style={{ marginBottom: 10 }}>
                                Bus Name
                            </Text>
                            <Text body1 semibold>
                                Felix Travel
                            </Text>
                        </View>
                        <View style={{ paddingVertical: 10 }}>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text body2>Depart Time</Text>
                                </View>
                                <View
                                    style={{ flex: 1, alignItems: "flex-end" }}
                                >
                                    <Text body2 semibold>
                                        02-Dec 2018
                                    </Text>
                                    <Text caption1 grayColor>
                                        14:00 PM
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text body2>Arrive Time</Text>
                                </View>
                                <View
                                    style={{ flex: 1, alignItems: "flex-end" }}
                                >
                                    <Text body2 semibold>
                                        02-Dec 2018
                                    </Text>
                                    <Text caption1 grayColor>
                                        16:00 PM
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text body2>Duration</Text>
                                </View>
                                <View
                                    style={{ flex: 1, alignItems: "flex-end" }}
                                >
                                    <Text body2 semibold>
                                        2 Hours
                                    </Text>
                                    <Text caption1 grayColor></Text>
                                </View>
                            </View>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text body2>Total Ticket</Text>
                                </View>
                                <View
                                    style={{ flex: 1, alignItems: "flex-end" }}
                                >
                                    <Text body2 semibold>
                                        4 Tickets
                                    </Text>
                                    <Text caption1 grayColor></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.contentButtonBottom}>
                    <View>
                        <Text caption1 semibold>
                            5 Tickets
                        </Text>
                        <Text title3 primaryColor semibold>
                            $399.99
                        </Text>
                        <Text caption1 semibold style={{ marginTop: 5 }}>
                            Total Price
                        </Text>
                    </View>
                    <Button
                        style={{ height: 46 }}
                        onPress={() =>
                            navigation.navigate("CheckOut", {
                                bookingType: "Bus"
                            })
                        }
                    >
                        Continue
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
