import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Button } from "@components";
import styles from "./styles";

export default class BusSelectSeat extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            bus: [
                { id: "1", number: "1", status: "booked" },
                { id: "2", number: "2", status: "empty" },
                { id: "3", number: "3", status: "empty" },
                { id: "4", number: "4", status: "empty" },
                { id: "5", number: "5", status: "empty" },
                { id: "6", number: "6", status: "empty" },
                { id: "7", number: "7", status: "empty" },
                { id: "8", number: "8", status: "booked" },
                { id: "9", number: "9", status: "empty" },
                { id: "10", number: "10", status: "empty" },
                { id: "11", number: "11", status: "empty" },
                { id: "12", number: "12", status: "empty" },
                { id: "13", number: "13", status: "empty" },
                { id: "14", number: "14", status: "empty" },
                { id: "15", number: "15", status: "empty" },
                { id: "16", number: "16", status: "empty" },
                { id: "17", number: "17", status: "booked" },
                { id: "18", number: "18", status: "empty" },
                { id: "19", number: "19", status: "empty" },
                { id: "20", number: "20", status: "empty" },
                { id: "21", number: "21", status: "booked" },
                { id: "22", number: "22", status: "empty" },
                { id: "23", number: "23", status: "empty" },
                { id: "24", number: "24", status: "empty" },
                { id: "25", number: "25", status: "empty" },
                { id: "26", number: "26", status: "empty" },
                { id: "27", number: "27", status: "empty" },
                { id: "28", number: "28", status: "empty" },
                { id: "29", number: "29", status: "empty" },
                { id: "30", number: "30", status: "empty" }
            ]
        };
    }

    selectSeat(selected) {
        switch (selected.status) {
            case "selected":
                this.setState({
                    bus: this.state.bus.map(item => {
                        return {
                            ...item,
                            status:
                                item.number == selected.number
                                    ? "empty"
                                    : item.status
                        };
                    })
                });
                break;
            case "booked":
                break;
            default:
                this.setState({
                    bus: this.state.bus.map(item => {
                        return {
                            ...item,
                            status:
                                item.number == selected.number
                                    ? "selected"
                                    : item.status
                        };
                    })
                });
                break;
        }
    }

    renderItem(item, index) {
        let styleSeat = styles.booked;
        switch (item.status) {
            case "selected":
                styleSeat = styles.selected;
                break;
            case "booked":
                styleSeat = styles.booked;
                break;
            default:
                styleSeat = styles.empty;
                break;
        }
        return (
            <View style={styles.itemSeat}>
                <TouchableOpacity
                    style={styleSeat}
                    onPress={() => this.selectSeat(item)}
                >
                    <Text title3 whiteColor semibold>
                        {item.number}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        const { bus } = this.state;
        const ticket = bus.filter(item => item.status == "selected").length;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Select Seats"
                    subTitle="01 Aug 2019, Felix Travel"
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
                <View style={{ paddingHorizontal: 20, flex: 1 }}>
                    {/* Status */}
                    <View style={styles.lineSeatType}>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.booked} />
                            <Text footnote semibold>
                                Booked
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.selected} />
                            <Text footnote semibold>
                                Selected
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.empty} />
                            <Text footnote semibold>
                                Empty
                            </Text>
                        </View>
                    </View>
                    {/* Icons */}
                    <View style={styles.lineDirection}>
                        <Icon
                            name="tachometer-alt"
                            color={BaseColor.grayColor}
                            size={32}
                            solid
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Text footnote light style={{ marginRight: 5 }}>
                                Exit
                            </Text>
                            <Icon
                                name="sign-out-alt"
                                color={BaseColor.grayColor}
                                size={32}
                                solid
                            />
                        </View>
                    </View>
                    {/* Seat render for select */}
                    <FlatList
                        numColumns={5}
                        data={bus}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) =>
                            this.renderItem(item, index)
                        }
                    />
                </View>
                {/* Total Price */}
                <View style={styles.contentButtonBottom}>
                    <View>
                        <Text caption1 semibold>
                            {ticket} Tickets
                        </Text>
                        <Text title3 primaryColor semibold>
                            $250
                        </Text>
                        <Text caption1 semibold style={{ marginTop: 5 }}>
                            Total Price
                        </Text>
                    </View>
                    <Button
                        style={{ height: 56 }}
                        onPress={() => navigation.navigate("PreviewBusBooking")}
                    >
                        Book Now
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
