import React, { Component } from "react";
import { View, FlatList, Switch, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    BookingTime,
    Tag
} from "@components";
import RangeSlider from "rn-range-slider";
import * as Utils from "@utils";
import styles from "./styles";

export default class FlightFilter extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            round: true,
            scrollEnabled: true,
            priceBegin: 0,
            priceEnd: 1000,
            durationBegin: 0,
            durationEnd: 18,
            facilities: [
                { id: "1", name: "Economy", checked: true },
                { id: "2", name: "Business" },
                { id: "3", name: "First" },
                { id: "4", name: "Normal" }
            ],
            transit: [
                { id: "1", name: "Direct", checked: true },
                { id: "2", name: "1 Transit" },
                { id: "3", name: "2 Transits" },
                { id: "4", name: "+2 Transits" }
            ]
        };
        this.onChangeRound = this.onChangeRound.bind(this);
    }

    onChangeRound(status) {
        this.setState({ round: status });
    }

    /**
     * @description Called when filtering option > Facilities
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {*} select
     */
    onSelectTransit(select) {
        this.setState({
            transit: this.state.transit.map(item => {
                if (item.name == select.name) {
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
     * @description Called when filtering option > Facilities
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {*} select
     */
    onSelectFacilities(select) {
        this.setState({
            facilities: this.state.facilities.map(item => {
                if (item.name == select.name) {
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

    render() {
        const { navigation } = this.props;
        const {
            round,
            scrollEnabled,
            priceBegin,
            priceEnd,
            durationBegin,
            durationEnd,
            facilities,
            transit
        } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Filtering"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="times"
                                size={20}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    renderRight={() => {
                        return (
                            <Text headline primaryColor numberOfLines={1}>
                                Apply
                            </Text>
                        );
                    }}
                    onPressLeft={() => navigation.goBack()}
                    onPressRight={() => navigation.goBack()}
                />
                <ScrollView
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={(contentWidth, contentHeight) =>
                        this.setState({
                            scrollEnabled: Utils.scrollEnabled(
                                contentWidth,
                                contentHeight
                            )
                        })
                    }
                >
                    <View style={styles.contain}>
                        <BookingTime
                            style={{ marginTop: 20, marginHorizontal: 20 }}
                        />
                        <View style={styles.roundLine}>
                            <Text headline semibold>
                                ROUND TRIP
                            </Text>
                            <Switch
                                size={18}
                                onValueChange={this.onChangeRound}
                                value={round}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text headline semibold>
                                PRICE
                            </Text>
                            <View style={styles.contentRange}>
                                <Text caption1 grayColor>
                                    $100
                                </Text>
                                <Text caption1 grayColor>
                                    $1000
                                </Text>
                            </View>
                            <RangeSlider
                                style={{
                                    width: "100%",
                                    height: 40
                                }}
                                thumbRadius={12}
                                lineWidth={5}
                                gravity={"center"}
                                labelStyle="none"
                                min={100}
                                max={1000}
                                step={1}
                                selectionColor={BaseColor.primaryColor}
                                blankColor={BaseColor.textSecondaryColor}
                                onValueChanged={(low, high, fromUser) => {
                                    this.setState({
                                        priceBegin: low,
                                        priceEnd: high
                                    });
                                }}
                                onTouchStart={() => {
                                    this.setState({
                                        scrollEnabled: false
                                    });
                                }}
                                onTouchEnd={() => {
                                    this.setState({
                                        scrollEnabled: true
                                    });
                                }}
                            />
                            <View style={styles.contentResultRange}>
                                <Text caption1>AVG Price</Text>
                                <Text caption1>
                                    ${priceBegin} - ${priceEnd}
                                </Text>
                            </View>
                        </View>
                        <Text
                            headline
                            semibold
                            style={{ marginLeft: 20, marginTop: 20 }}
                        >
                            FACILITIES
                        </Text>
                        <View style={{ marginTop: 5 }}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={facilities}
                                keyExtractor={(item, index) => item.id}
                                renderItem={({ item, index }) => (
                                    <Tag
                                        style={{ marginLeft: 20, width: 80 }}
                                        outline={!item.checked}
                                        onPress={() =>
                                            this.onSelectFacilities(item)
                                        }
                                    >
                                        {item.name}
                                    </Tag>
                                )}
                            />
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text headline semibold>
                                DURATION
                            </Text>
                            <View style={styles.contentRange}>
                                <Text caption1 grayColor>
                                    0h
                                </Text>
                                <Text caption1 grayColor>
                                    18h
                                </Text>
                            </View>
                            <RangeSlider
                                style={{
                                    width: "100%",
                                    height: 40
                                }}
                                thumbRadius={12}
                                lineWidth={5}
                                gravity={"center"}
                                labelStyle="none"
                                min={0}
                                max={18}
                                step={1}
                                selectionColor={BaseColor.primaryColor}
                                blankColor={BaseColor.textSecondaryColor}
                                onValueChanged={(low, high, fromUser) => {
                                    this.setState({
                                        durationBegin: low,
                                        durationEnd: high
                                    });
                                }}
                                onTouchStart={() => {
                                    this.setState({
                                        scrollEnabled: false
                                    });
                                }}
                                onTouchEnd={() => {
                                    this.setState({
                                        scrollEnabled: true
                                    });
                                }}
                            />
                            <View style={styles.contentResultRange}>
                                <Text caption1>AVG Time</Text>
                                <Text caption1>
                                    {durationBegin}h - {durationEnd}h
                                </Text>
                            </View>
                        </View>
                        <View style={styles.roundLine}>
                            <Text headline semibold>
                                AIR PLANE
                            </Text>
                            <View style={styles.rowCenter}>
                                <Text body1 light style={{ marginRight: 3 }}>
                                    +2
                                </Text>
                                <Icon
                                    name="angle-right"
                                    size={12}
                                    color={BaseColor.primaryColor}
                                />
                            </View>
                        </View>
                        <Text
                            headline
                            semibold
                            style={{ marginLeft: 20, marginTop: 20 }}
                        >
                            TRANSIT
                        </Text>
                        <View style={{ marginTop: 5 }}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={transit}
                                keyExtractor={(item, index) => item.id}
                                renderItem={({ item, index }) => (
                                    <Tag
                                        style={{ marginLeft: 20, width: 80 }}
                                        outline={!item.checked}
                                        onPress={() =>
                                            this.onSelectTransit(item)
                                        }
                                    >
                                        {item.name}
                                    </Tag>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
