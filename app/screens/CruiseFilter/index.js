import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, DatePicker } from "@components";
import RangeSlider from "rn-range-slider";
import Modal from "react-native-modal";
import * as Utils from "@utils";
import styles from "./styles";

export default class CruiseFilter extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            priceBegin: 0,
            priceEnd: 1000,
            day: 2,
            scrollEnabled: true,
            modalVisible: false
        };
    }

    renderModal() {
        const { day, modalVisible } = this.state;
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
                            <Text body1>Durating</Text>
                            <Text caption1 grayColor>
                                Days
                            </Text>
                        </View>
                        <View style={styles.iconRight}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        day: day - 1 > 0 ? day : 0
                                    })
                                }
                            >
                                <Icon
                                    name="minus-circle"
                                    size={24}
                                    color={BaseColor.grayColor}
                                />
                            </TouchableOpacity>
                            <Text title1>{day}</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({ day: day + 1 })}
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
        const { priceBegin, priceEnd, day, scrollEnabled } = this.state;
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
                                onPress={() =>
                                    navigation.navigate("SelectCruise")
                                }
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    Cruising From
                                </Text>
                                <Text headline semibold>
                                    Caribbean
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.linePick} />
                            <TouchableOpacity
                                style={styles.itemPick}
                                onPress={() =>
                                    navigation.navigate("SelectCruise")
                                }
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    Leaving From
                                </Text>
                                <Text headline semibold>
                                    Bahamas
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentQuest}>
                            <DatePicker
                                label="Depart From"
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
                                    Durating
                                </Text>
                                <Text body1 semibold>
                                    {day} Days
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
