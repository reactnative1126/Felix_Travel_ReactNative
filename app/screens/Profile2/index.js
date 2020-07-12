import React, { Component } from "react";
import {
    View,
    ScrollView,
    FlatList,
    Switch,
    TouchableOpacity
} from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    Text,
    HotelItem,
    Button,
    ProfilePerformance
} from "@components";
import styles from "./styles";
import { TabView, TabBar } from "react-native-tab-view";

// Load sample data
import { UserData, HotelData } from "@data";

export default class Profile2 extends Component {
    constructor(props) {
        super();
        this.state = {
            index: 0,
            routes: [
                { key: "booking", title: "Booking" },
                { key: "profile", title: "Profile" },
                { key: "setting", title: "Setting" },
                { key: "activity", title: "Activity" }
            ],
            userData: UserData[0]
        };
    }

    // When tab is activated, set what's index value
    _handleIndexChange = index =>
        this.setState({
            index
        });

    // Customize UI tab bar
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
                <View style={{ flex: 1, width: 100, alignItems: "center" }}>
                    <Text headline semibold={focused} style={{ color }}>
                        {route.title}
                    </Text>
                </View>
            )}
        />
    );

    // Render correct screen container when tab is activated
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
            case "setting":
                return (
                    <SettingTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "activity":
                return (
                    <ActivityTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
        }
    };

    render() {
        const { navigation } = this.props;
        const { userData } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Profile2"
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
                    <View style={{ padding: 20 }}>
                        <Text title1 semibold>
                            {userData.name}
                        </Text>
                        <Text subhead grayColor>
                            {userData.major}
                        </Text>
                        <View style={styles.location}>
                            <Icon
                                name="map-marker-alt"
                                size={10}
                                color={BaseColor.primaryColor}
                            />
                            <Text
                                caption1
                                primaryColor
                                style={{
                                    marginLeft: 3
                                }}
                            >
                                {userData.address}
                            </Text>
                        </View>
                        <View style={styles.contentInfor}>
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={Images.profile2}
                            />
                            <View style={styles.contentInforLeft}>
                                <ProfilePerformance
                                    data={userData.performance}
                                    flexDirection="column"
                                />
                            </View>
                        </View>
                        <Button
                            full
                            style={{ marginTop: 28, marginBottom: 28 }}
                        >
                            Following
                        </Button>
                        <Text headline semibold style={{ marginBottom: 10 }}>
                            About Me
                        </Text>
                        <Text body2 numberOfLines={5}>
                            {userData.about}
                        </Text>
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

/**
 * @description Show when tab Booking activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
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

/**
 * @description Show when tab Profile activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
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

/**
 * @description Show when tab Setting activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class SettingTab extends Component {
    render() {
        return <View style={{ padding: 20 }} />;
    }
}

/**
 * @description Show when tab Activity activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class ActivityTab extends Component {
    render() {
        return <View style={{ padding: 20 }} />;
    }
}
