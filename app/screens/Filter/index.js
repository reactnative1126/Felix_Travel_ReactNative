import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Tag } from "@components";
import RangeSlider from "rn-range-slider";
import * as Utils from "@utils";
import styles from "./styles";

export default class Filter extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            priceBegin: 0,
            priceEnd: 1000,
            facilities: [
                { id: "1", name: "Wifi", checked: true },
                { id: "2", name: "Parking" },
                { id: "3", name: "Premier" },
                { id: "4", name: "Shower" }
            ],
            roomType: [
                { id: "1", name: "Standart", checked: true },
                { id: "2", name: "Delux" },
                { id: "3", name: "Premier" },
                { id: "4", name: "Other" }
            ],
            interio: [
                { id: "1", name: "1", color: "#FD5739", checked: true },
                { id: "2", name: "2", color: "#C31C0D" },
                { id: "3", name: "3", color: "#FF8A65" },
                { id: "4", name: "4", color: "#4A90A4" }
            ],
            adults: 2,
            childrens: 1,
            scrollEnabled: true
        };
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

    /**
     * @description Called when filtering option > Room Types
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {*} select
     */
    onSelectRoomType(select) {
        this.setState({
            roomType: this.state.roomType.map(item => {
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
     * @description Called when filtering option > Interio
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {*} select
     */
    onSelectInterio(select) {
        this.setState({
            interio: this.state.interio.map(item => {
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
            facilities,
            roomType,
            interio,
            priceBegin,
            priceEnd,
            adults,
            childrens,
            scrollEnabled
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
                    <View style={{ padding: 20 }}>
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
                        style={{ marginLeft: 20, marginTop: 15 }}
                    >
                        FACILITIES
                    </Text>
                    <View style={styles.contentList}>
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
                    <View style={{ padding: 20 }}>
                        <Text headline semibold>
                            QUESS
                        </Text>
                        <View style={styles.contentQuest}>
                            <View style={styles.lineRow}>
                                <View>
                                    <Text body1>Adults</Text>
                                    <Text caption1 grayColor>
                                        16+ years
                                    </Text>
                                </View>
                                <View style={styles.iconRight}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                adults:
                                                    adults - 1 > 0
                                                        ? adults - 1
                                                        : 0
                                            });
                                        }}
                                    >
                                        <Icon
                                            name="minus-circle"
                                            size={24}
                                            color={BaseColor.grayColor}
                                        />
                                    </TouchableOpacity>
                                    <Text title1>{adults}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                adults: adults + 1
                                            });
                                        }}
                                    >
                                        <Icon
                                            name="plus-circle"
                                            size={24}
                                            color={BaseColor.primaryColor}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.lineRow}>
                                <View>
                                    <Text body1>Childrens</Text>
                                    <Text caption1 grayColor>
                                        2 - 11 years
                                    </Text>
                                </View>
                                <View style={styles.iconRight}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                childrens:
                                                    childrens - 1 > 0
                                                        ? childrens - 1
                                                        : 0
                                            });
                                        }}
                                    >
                                        <Icon
                                            name="minus-circle"
                                            size={24}
                                            color={BaseColor.grayColor}
                                        />
                                    </TouchableOpacity>
                                    <Text title1>{childrens}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                childrens: childrens + 1
                                            });
                                        }}
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
                    </View>
                    <Text
                        headline
                        semibold
                        style={{ marginLeft: 20, marginTop: 15 }}
                    >
                        ROOM TYPES
                    </Text>
                    <View style={styles.contentList}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={roomType}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <Tag
                                    style={{ marginLeft: 20, width: 80 }}
                                    outline={!item.checked}
                                    onPress={() => this.onSelectRoomType(item)}
                                >
                                    {item.name}
                                </Tag>
                            )}
                        />
                    </View>
                    <Text
                        headline
                        semibold
                        style={{ marginLeft: 20, marginTop: 15 }}
                    >
                        INTERIO
                    </Text>
                    <View style={styles.contentList}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={interio}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.interioItem,
                                        { backgroundColor: item.color }
                                    ]}
                                    onPress={() => this.onSelectInterio(item)}
                                >
                                    {item.checked && (
                                        <Icon
                                            name="check"
                                            size={16}
                                            color={BaseColor.whiteColor}
                                        />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
