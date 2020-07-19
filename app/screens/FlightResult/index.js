import React, { Component } from "react";
import {
    FlatList,
    RefreshControl,
    View,
    Animated,
    Platform
} from "react-native";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    FlightItem,
    FilterSort
} from "@components";
import styles from "./styles";
import { FlightData } from "@data";

export default class FlightResult extends Component {
    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        // Temp data define
        this.state = {
            refreshing: false,
            flights: FlightData,
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
        navigation.navigate("FlightFilter");
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
        const { flights, refreshing, clampedScroll } = this.state;
        const { navigation } = this.props;
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, 40],
            outputRange: [0, -40],
            extrapolate: "clamp"
        });
        return (
            <View style={{ flex: 1 }}>
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
                    data={flights}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <FlightItem
                            style={{ marginBottom: 10, marginHorizontal: 20 }}
                            from={item.from}
                            to={item.to}
                            totalHour={item.totalHour}
                            brand={item.brand}
                            image={item.image}
                            type={item.type}
                            price={item.price}
                            route={item.route}
                            onPress={() => navigation.navigate("FlightSummary")}
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
                    title="SIN to SYN"
                    subTitle="24 Dec 2018, 5 pax, Economy"
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
