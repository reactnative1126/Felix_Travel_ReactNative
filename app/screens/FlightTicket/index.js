import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, FlightPlan, Tag } from "@components";
import styles from "./styles";

export default class FlightTicket extends Component {
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
                        <View style={styles.classContent}>
                            <Tag outline={true} round>
                                Economic Class
                            </Tag>
                        </View>
                        <FlightPlan
                            round={false}
                            fromCode="SIN"
                            toCode="SYD"
                            from="Singapore"
                            to="Sydney"
                        />
                        <View style={styles.line} />
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Passenger
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    Steve Garrett
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Date
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    Thu, 15 Aug 09
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 25 }}>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Flight
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    SIN1009
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Gate
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    22A
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 25 }}>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Class
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    Economic Class
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text caption1 light>
                                    Seat
                                </Text>
                                <Text headline style={{ marginTop: 5 }}>
                                    21D
                                </Text>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.code}>
                            <Text header whiteColor>
                                CLMVBG
                            </Text>
                        </View>
                        <Text
                            caption1
                            light
                            style={{ textAlign: "center", marginTop: 15 }}
                        >
                            0944 0923 1238 9801
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
