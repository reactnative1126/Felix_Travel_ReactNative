import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    FlightPlan,
    Text,
    FlightItem,
    Button
} from "@components";
import styles from "./styles";

export default class FlightSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Booking Summary"
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
                        <FlightPlan
                            round={true}
                            fromCode="SIN"
                            toCode="SYD"
                            from="Singapore"
                            to="Sydney"
                        />
                        <View style={styles.line} />
                        <Text title3 style={{ paddingVertical: 10 }}>
                            Thu, 15 Aug 2019
                        </Text>
                        <FlightItem
                            from={{
                                name: "United State",
                                value: "USA",
                                image: Images.airline1,
                                hour: "05:00"
                            }}
                            to={{
                                name: "Singapore",
                                value: "SIN",
                                image: Images.airline2,
                                hour: "18:00"
                            }}
                            totalHour={13.5}
                            brand="Singapore Air"
                            image={Images.airline2}
                            type="Economy"
                            price="$499.99"
                            route="Non Stop"
                            onPress={() => navigation.navigate("FlightTicket")}
                        />
                        <View style={styles.line} />
                        <Text title3 style={{ paddingVertical: 10 }}>
                            Thu, 20 Aug 2019
                        </Text>
                        <FlightItem
                            from={{
                                name: "United State",
                                value: "USA",
                                image: Images.airline1,
                                hour: "05:00"
                            }}
                            to={{
                                name: "Singapore",
                                value: "SIN",
                                image: Images.airline3,
                                hour: "18:00"
                            }}
                            totalHour={13.5}
                            brand="Emirates Air"
                            image={Images.airline3}
                            type="Economy"
                            price="$499.99"
                            route="Non Stop"
                            onPress={() => navigation.navigate("FlightTicket")}
                        />
                    </View>
                </ScrollView>
                <View style={styles.contentButtonBottom}>
                    <View>
                        <Text caption1 semibold>
                            Total Price for 5 Person(s)
                        </Text>
                        <Text title3 primaryColor semibold>
                            $399.99
                        </Text>
                        <Text caption1 semibold style={{ marginTop: 5 }}>
                            All Charged Included
                        </Text>
                    </View>
                    <Button
                        style={{ height: 46 }}
                        onPress={() => navigation.navigate("PreviewBooking")}
                    >
                        Book Now
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
