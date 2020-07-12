import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, DatePicker } from "@components";
import RangeSlider from "rn-range-slider";
import Modal from "react-native-modal";
import * as Utils from "@utils";
import styles from "./styles";

export default class BusFilter extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            priceBegin: 0,
            priceEnd: 1000,
            people: 2,
            scrollEnabled: true,
            modalVisible: false
        };
    }

    renderModal() {
        const { people, modalVisible } = this.state;
        return (
            <Modal
                isVisible={modalVisible}
                onSwipeComplete={() => this.setState({ modalVisible: false })}
                swipeDirection={["down"]}
                style={styles.bottomModal}
            >
                <View style={styles.contentFilterBottom}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown} />
                    </View>
                    <View style={styles.contentActionModalBottom}>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ modalVisible: false })
                            }
                        >
                            <Text body1>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ modalVisible: false })
                            }
                        >
                            <Text body1 primaryColor>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.lineRow, { marginBottom: 40 }]}>
                        <View>
                            <Text body1>Passenger</Text>
                            <Text caption1 grayColor>
                                People
                            </Text>
                        </View>
                        <View style={styles.iconRight}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        people: people - 1 > 0 ? people : 0
                                    })
                                }
                            >
                                <Icon
                                    name="minus-circle"
                                    size={24}
                                    color={BaseColor.grayColor}
                                />
                            </TouchableOpacity>
                            <Text title1>{people}</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({ people: people + 1 })
                                }
                            >
                                <Icon
                                    name="plus-circle"
                                    size={24}
                                    color={BaseColor.primaryColor}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        const { navigation } = this.props;
        const { priceBegin, priceEnd, people, scrollEnabled } = this.state;
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
                {this.renderModal()}
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
                    <View style={{ padding: 20 }}>
                        <View style={styles.contentPickDate}>
                            <TouchableOpacity
                                style={styles.itemPick}
                                onPress={() => navigation.navigate("SelectBus")}
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    From
                                </Text>
                                <Text headline semibold>
                                    Smart Market
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.linePick} />
                            <TouchableOpacity
                                style={styles.itemPick}
                                onPress={() => navigation.navigate("SelectBus")}
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    To
                                </Text>
                                <Text headline semibold>
                                    Harvard University
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentQuest}>
                            <DatePicker
                                label="Date"
                                time="01 Aug 2019"
                                style={{ flex: 6, marginRight: 15 }}
                            />
                            <TouchableOpacity
                                style={styles.duration}
                                onPress={() =>
                                    this.setState({ modalVisible: true })
                                }
                            >
                                <Text
                                    caption1
                                    grayColor
                                    style={{ marginBottom: 5 }}
                                >
                                    Passenger
                                </Text>
                                <Text body1 semibold>
                                    {people} People
                                </Text>
                            </TouchableOpacity>
                        </View>
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
                </ScrollView>
            </SafeAreaView>
        );
    }
}
