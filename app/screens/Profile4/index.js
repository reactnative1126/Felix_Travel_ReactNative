import React, { Component } from "react";
import {
    View,
    ScrollView,
    Animated,
    FlatList,
    Switch,
    TouchableOpacity
} from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import { Header, SafeAreaView, Icon, Text, Tag, HotelItem } from "@components";
import { TabView, TabBar } from "react-native-tab-view";
import { UserData, HotelData } from "@data";
import * as Utils from "@utils";
import styles from "./styles";

export default class Profile4 extends Component {
    constructor(props) {
        super();
        this.state = {
            scrollY: new Animated.Value(0),
            index: 0,
            routes: [
                { key: "profile", title: "Profile" },
                { key: "booking", title: "Booking" },
                { key: "payment", title: "Payment" }
            ],
            userData: UserData[0]
        };
    }

    _handleIndexChange = index =>
        this.setState({
            index
        });

    _renderTabBar = props => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            inactiveColor={BaseColor.grayColor}
            activeColor={BaseColor.textPrimaryColor}
            renderLabel={({ route, focused, color }) => (
                <View
                    style={{
                        flex: 1,
                        width: Utils.getWidthDevice() / 3,
                        alignItems: "center"
                    }}
                >
                    <Text headline semibold={focused} style={{ color }}>
                        {route.title}
                    </Text>
                </View>
            )}
        />
    );

    _renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case "booking":
                return (
                    <BookingTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "profile":
                return (
                    <ProfileTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "payment":
                return (
                    <PaymentTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
        }
    };

    render() {
        const { navigation } = this.props;
        const { userData } = this.state;
        const imageScale = this.state.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0.5],
            extrapolate: "clamp"
        });
        const imageTranslateY = this.state.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [-5, 50],
            extrapolate: "clamp"
        });
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Profile4"
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
                <ScrollView
                    scrollEventThrottle={8}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: { y: this.state.scrollY }
                            }
                        }
                    ])}
                >
                    <View style={styles.containField}>
                        <View style={styles.contentLeftItem}>
                            <Text title2 semibold>
                                {userData.performance[2].value}
                            </Text>
                            <Text caption1 grayColor>
                                {userData.performance[2].title}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "flex-end"
                            }}
                        >
                            <Animated.Image
                                source={Images.profile2}
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 60,
                                    position: "absolute",
                                    alignSelf: "center",
                                    bottom: 70,
                                    transform: [
                                        {
                                            scale: imageScale
                                        },
                                        {
                                            translateY: imageTranslateY
                                        }
                                    ]
                                }}
                            />
                            <Text headline semibold numberOfLines={1}>
                                {userData.name}
                            </Text>
                            <Tag style={styles.tagFollow}>+ Follow</Tag>
                        </View>
                        <View style={styles.contentLeftItem}>
                            <Text title2 semibold>
                                {userData.performance[1].value}
                            </Text>
                            <Text caption1 grayColor>
                                {userData.performance[1].title}
                            </Text>
                        </View>
                    </View>
                    <TabView
                        lazy
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={this._handleIndexChange}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

class BookingTab extends Component {
    constructor(props) {
        super();
        this.state = {
            hotels: HotelData
        };
    }

    render() {
        return (
            <View style={{ padding: 20 }}>
                <FlatList
                    numColumns={2}
                    data={this.state.hotels}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <HotelItem
                            grid
                            image={item.image}
                            name={item.name}
                            location={item.location}
                            price={item.price}
                            available={item.available}
                            rate={item.rate}
                            rateStatus={item.rateStatus}
                            numReviews={item.numReviews}
                            services={item.services}
                            style={
                                index % 2
                                    ? {
                                          marginLeft: 15,
                                          marginBottom: 20
                                      }
                                    : { marginBottom: 20 }
                            }
                            image={item.image}
                            onPress={() =>
                                this.props.navigation.navigate("HotelDetail")
                            }
                        />
                    )}
                />
            </View>
        );
    }
}

class ProfileTab extends Component {
    constructor(props) {
        super();
        this.state = {
            reminders: false
        };
    }

    toggleSwitch = value => {
        this.setState({ reminders: value });
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ padding: 20 }}>
                <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                        navigation.navigate("ProfileEdit");
                    }}
                >
                    <Text body1>Edit Profile</Text>
                    <Icon
                        name="angle-right"
                        size={18}
                        color={BaseColor.primaryColor}
                        style={{ marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                        navigation.navigate("ChangePassword");
                    }}
                >
                    <Text body1>Change Password</Text>
                    <Icon
                        name="angle-right"
                        size={18}
                        color={BaseColor.primaryColor}
                        style={{ marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                        navigation.navigate("ChangeLanguage");
                    }}
                >
                    <Text body1>Language</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Text body1 grayColor>
                            English
                        </Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={BaseColor.primaryColor}
                            style={{ marginLeft: 5 }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                        navigation.navigate("Currency");
                    }}
                >
                    <Text body1>Currency</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Text body1 grayColor>
                            USD
                        </Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={BaseColor.primaryColor}
                            style={{ marginLeft: 5 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.profileItem}>
                    <Text body1>Reminders</Text>
                    <Switch
                        name="angle-right"
                        size={18}
                        onValueChange={this.toggleSwitch}
                        value={this.state.reminders}
                    />
                </View>
                <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                        navigation.navigate("BookingHistory");
                    }}
                >
                    <Text body1>Booking History</Text>
                    <Icon
                        name="angle-right"
                        size={18}
                        color={BaseColor.primaryColor}
                        style={{ marginLeft: 5 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.profileItem}
                    onPress={() => {
                        navigation.navigate("Coupons");
                    }}
                >
                    <Text body1>Coupons</Text>
                    <Icon
                        name="angle-right"
                        size={18}
                        color={BaseColor.primaryColor}
                        style={{ marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
class PaymentTab extends Component {
    render() {
        return <View style={{ marginTop: 20 }} />;
    }
}
