import React, { Component } from "react";
import {
    FlatList,
    RefreshControl,
    View,
    Animated,
    Platform
} from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, BusItem, FilterSort } from "@components";
import styles from "./styles";
import { BusData } from "@data";

export default class BusList extends Component {
    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        // Temp data define
        this.state = {
            refreshing: false,
            bus: BusData,
            scrollAnim,
            offsetAnim,
            clampedScroll: Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: "clamp"
                    }),
                    offsetAnim
                ),
                0,
                40
            )
        };
        this.onChangeView = this.onChangeView.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onChangeSort = this.onChangeSort.bind(this);
    }

    onChangeSort() {}

    /**
     * @description Open modal when filterring mode is applied
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     */
    onFilter() {
        const { navigation } = this.props;
        navigation.navigate("BusFilter");
    }

    /**
     * @description Open modal when view mode is pressed
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     */
    onChangeView() {}

    /**
     * @description Render container view
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @returns
     */
    renderContent() {
        const { bus, refreshing, clampedScroll } = this.state;
        const { navigation } = this.props;
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, 40],
            outputRange: [0, -40],
            extrapolate: "clamp"
        });
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: BaseColor.fieldColor
                }}
            >
                <Animated.FlatList
                    contentInset={{ top: 50 }}
                    refreshControl={
                        <RefreshControl
                            colors={[BaseColor.primaryColor]}
                            tintColor={BaseColor.primaryColor}
                            refreshing={refreshing}
                            onRefresh={() => {}}
                        />
                    }
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        y: this.state.scrollAnim
                                    }
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )}
                    data={bus}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <BusItem
                            style={{
                                marginBottom: 10,
                                marginHorizontal: 20,
                                backgroundColor: BaseColor.whiteColor
                            }}
                            from={item.from}
                            to={item.to}
                            totalHour={item.totalHour}
                            brand={item.brand}
                            type={item.type}
                            price={item.price}
                            route={item.route}
                            onPress={() => navigation.navigate("BusSelectSeat")}
                        />
                    )}
                />
                <Animated.View
                    style={[
                        styles.navbar,
                        { transform: [{ translateY: navbarTranslate }] }
                    ]}
                >
                    <FilterSort
                        labelCustom="204 results"
                        onChangeSort={this.onChangeSort}
                        onFilter={this.onFilter}
                    />
                </Animated.View>
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Shutle Bus"
                    subTitle="01 Aug 2019, Harvard University"
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
                {this.renderContent()}
            </SafeAreaView>
        );
    }
}
