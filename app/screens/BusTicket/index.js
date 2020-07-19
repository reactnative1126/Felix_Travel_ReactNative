import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, BusPlan, Button } from "@components";
import styles from "./styles";

export default class BusTicket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Ticket"
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
                    <View style={styles.contain}>
                        <BusPlan
                            fromCode="SSM"
                            toCode="SHU"
                            from="Smart Market"
                            to="Harvard University"
                        />
                        <View style={styles.line} />
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Felix Travel
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    Felix Travel
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Time
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    05:45 PM
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 25 }}>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Passenger
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    5 Persons
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Seat Number
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    1, 2, 3, 7, 10
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 25 }}>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Ticket No
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    CLMVBG
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Confirm Date
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    10 Oct 2019
                                </Text>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View style={{ alignItems: "flex-end" }}>
                            <Text caption1 light>
                                Total Fare
                            </Text>
                            <Text title3 semibold>
                                $200
                            </Text>
                        </View>
                        <View style={styles.code}>
                            <Icon name="qrcode" size={150} color="black" />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ margin: 20 }}>
                    <Button full>Download</Button>
                </View>
            </SafeAreaView>
        );
    }
}
