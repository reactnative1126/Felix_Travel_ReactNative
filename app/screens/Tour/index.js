import React, { Component } from "react";
import {
    FlatList,
    RefreshControl,
    View,
    Animated,
    Platform
} from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, TourItem, FilterSort } from "@components";
import styles from "./styles";
import * as Utils from "@utils";
import internationalization from "../../config/internationalization";

// Load sample data
import { TourData } from "@data";

export default class Tour extends Component {
    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.state = {
            refreshing: false,
            modeView: "block",
            tours: TourData,
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
        navigation.navigate("Filter");
    }

    /**
     * @description Open modal when view mode is pressed
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     */
    onChangeView() {
        let { modeView } = this.state;
        Utils.enableExperimental();
        switch (modeView) {
            case "block":
                this.setState({
                    modeView: "grid"
                });
                break;
            case "grid":
                this.setState({
                    modeView: "list"
                });
                break;
            case "list":
                this.setState({
                    modeView: "block"
                });
                break;
            default:
                this.setState({
                    modeView: "block"
                });
                break;
        }
    }

    /**
     * @description Render container view
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @returns
     */
    renderContent() {
        const isRTL = internationalization.isRTL();
        const {
            modeView,
            tours,
            refreshing,
            filterSort,
            clampedScroll
        } = this.state;
        const { navigation } = this.props;
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, 40],
            outputRange: [0, -40],
            extrapolate: "clamp"
        });
        switch (modeView) {
            case "block":
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
                            data={tours}
                            key={"block"}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <TourItem
                                    isRTL={isRTL}
                                    block
                                    style={{
                                        marginBottom: 10
                                    }}
                                    onPress={() => {
                                        navigation.navigate("TourDetail");
                                    }}
                                    onPressBookNow={() => {
                                        navigation.navigate("PreviewBooking");
                                    }}
                                    image={item.image}
                                    name={item.name}
                                    location={item.location}
                                    travelTime={item.location}
                                    startTime={item.startTime}
                                    price={item.price}
                                    rate={item.rate}
                                    rateCount={item.rateCount}
                                    numReviews={item.numReviews}
                                    author={item.author}
                                    services={item.services}
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
                                isRTL={isRTL}
                                modeView={modeView}
                                onChangeSort={this.onChangeSort}
                                onChangeView={this.onChangeView}
                                onFilter={this.onFilter}
                            />
                        </Animated.View>
                    </View>
                );
            case "grid":
                return (
                    <View style={{ flex: 1 }}>
                        <Animated.FlatList
                            contentInset={{ top: 50 }}
                            columnWrapperStyle={{
                                marginHorizontal: 20
                            }}
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
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={tours}
                            key={"gird"}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <TourItem
                                    isRTL={isRTL}
                                    grid
                                    style={{
                                        marginBottom: 10,
                                        marginLeft: index % 2 ? 15 : 0
                                    }}
                                    onPress={() => {
                                        navigation.navigate("TourDetail");
                                    }}
                                    onPressBookNow={() => {
                                        navigation.navigate("PreviewBooking");
                                    }}
                                    image={item.image}
                                    name={item.name}
                                    location={item.location}
                                    travelTime={item.travelTime}
                                    startTime={item.startTime}
                                    price={item.price}
                                    rate={item.rate}
                                    rateCount={item.rateCount}
                                    numReviews={item.numReviews}
                                    author={item.author}
                                    services={item.services}
                                />
                            )}
                        />
                        <Animated.View
                            style={[
                                styles.navbar,
                                {
                                    transform: [{ translateY: navbarTranslate }]
                                }
                            ]}
                        >
                            <FilterSort
                                isRTL={isRTL}
                                modeView={modeView}
                                onChangeSort={this.onChangeSort}
                                onChangeView={this.onChangeView}
                                onFilter={this.onFilter}
                            />
                        </Animated.View>
                    </View>
                );

            case "list":
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
                            data={tours}
                            key={"list"}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <TourItem
                                    isRTL={isRTL}
                                    list
                                    style={{
                                        marginBottom: 10
                                    }}
                                    onPress={() => {
                                        navigation.navigate("TourDetail");
                                    }}
                                    onPressBookNow={() => {
                                        navigation.navigate("PreviewBooking");
                                    }}
                                    image={item.image}
                                    name={item.name}
                                    location={item.location}
                                    travelTime={item.travelTime}
                                    startTime={item.startTime}
                                    price={item.price}
                                    rate={item.rate}
                                    rateCount={item.rateCount}
                                    numReviews={item.numReviews}
                                    author={item.author}
                                    services={item.services}
                                />
                            )}
                        />
                        <Animated.View
                            style={[
                                styles.navbar,
                                {
                                    transform: [{ translateY: navbarTranslate }]
                                }
                            ]}
                        >
                            <FilterSort
                                isRTL={isRTL}
                                modeView={modeView}
                                onChangeSort={this.onChangeSort}
                                onChangeView={this.onChangeView}
                                onFilter={this.onFilter}
                            />
                        </Animated.View>
                    </View>
                );
            default:
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
                            data={tours}
                            key={"block"}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <TourItem
                                    isRTL={isRTL}
                                    block
                                    style={{
                                        marginBottom: 10
                                    }}
                                    onPress={() => {
                                        navigation.navigate("TourDetail");
                                    }}
                                    onPressBookNow={() => {
                                        navigation.navigate("PreviewBooking");
                                    }}
                                    image={item.image}
                                    name={item.name}
                                    location={item.location}
                                    travelTime={item.travelTime}
                                    startTime={item.startTime}
                                    price={item.price}
                                    rate={item.rate}
                                    rateCount={item.rateCount}
                                    numReviews={item.numReviews}
                                    author={item.author}
                                    services={item.services}
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
                                isRTL={isRTL}
                                modeView={modeView}
                                onChangeSort={this.onChangeSort}
                                onChangeView={this.onChangeView}
                                onFilter={this.onFilter}
                            />
                        </Animated.View>
                    </View>
                );
                break;
        }
    }

    render() {
        const isRTL = internationalization.isRTL();
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    isRTL={isRTL}
                    title="Tours"
                    subTitle="24 Dec 2018, 2 Nights, 1 Room"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={BaseColor.primaryColor}
                                style={!isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}
                            />
                        );
                    }}
                    renderRight={() => {
                        return (
                            <Icon
                                name="search"
                                size={20}
                                color={BaseColor.primaryColor}
                                style={!isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}
                            />
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {
                        navigation.navigate("SearchHistory");
                    }}
                />
                {this.renderContent()}
            </SafeAreaView>
        );
    }
}
