import React, { Component } from "react";
import { View } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text } from "@components";
import { TabView, TabBar } from "react-native-tab-view";
import styles from "./styles";

export default class BookingDetail extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            index: 0,
            routes: [
                { key: "preview", title: "Preview" },
                { key: "confirm", title: "Confirm" },
                { key: "complete", title: "Complete" },
                { key: "detail", title: "Detail" }
            ]
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
            case "preview":
                return (
                    <PreviewTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "confirm":
                return (
                    <ConfirmTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "complete":
                return (
                    <CompleteTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "detail":
                return (
                    <DetailTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
        }
    };

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Booking Detail"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    renderRight={() => {
                        return (
                            <Text headline primaryColor>
                                Save
                            </Text>
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {}}
                />
                <TabView
                    lazy
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={this._handleIndexChange}
                />
            </SafeAreaView>
        );
    }
}

/**
 * @description Show when tab Preview activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class PreviewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookID: "Booking ID 01233",
            bookDetail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        };
    }

    render() {
        const { bookID, bookDetail } = this.state;
        return (
            <View style={{ padding: 20, alignItems: "center" }}>
                <Icon
                    name="copy"
                    size={72}
                    color={BaseColor.lightPrimaryColor}
                    style={{ marginTop: 50 }}
                />
                <Text title3 style={{ marginVertical: 25 }} semibold>
                    {bookID}
                </Text>
                <Text body1 grayColor style={{ textAlign: "center" }}>
                    {bookDetail}
                </Text>
            </View>
        );
    }
}

/**
 * @description Show when tab Confirm activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class ConfirmTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookID: "Booking ID 01233",
            bookDetail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        };
    }

    render() {
        const { bookID, bookDetail } = this.state;
        return (
            <View style={{ padding: 20, alignItems: "center" }}>
                <Icon
                    name="copy"
                    size={72}
                    color={BaseColor.lightPrimaryColor}
                    style={{ marginTop: 50 }}
                />
                <Text title3 style={{ marginVertical: 25 }} semibold>
                    {bookID}
                </Text>
                <Text body1 grayColor style={{ textAlign: "center" }}>
                    {bookDetail}
                </Text>
            </View>
        );
    }
}

/**
 * @description Show when tab Detail activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class DetailTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookID: "Booking ID 01233",
            bookDetail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        };
    }

    render() {
        const { bookID, bookDetail } = this.state;
        return (
            <View style={{ padding: 20, alignItems: "center" }}>
                <Icon
                    name="copy"
                    size={72}
                    color={BaseColor.lightPrimaryColor}
                    style={{ marginTop: 50 }}
                />
                <Text title3 style={{ marginVertical: 25 }} semibold>
                    {bookID}
                </Text>
                <Text body1 grayColor style={{ textAlign: "center" }}>
                    {bookDetail}
                </Text>
            </View>
        );
    }
}

/**
 * @description Show when tab Complete activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class CompleteTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookID: "Booking ID 01233",
            bookDetail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        };
    }

    render() {
        const { bookID, bookDetail } = this.state;
        return (
            <View style={{ padding: 20, alignItems: "center" }}>
                <Icon
                    name="copy"
                    size={72}
                    color={BaseColor.lightPrimaryColor}
                    style={{ marginTop: 50 }}
                />
                <Text title3 style={{ marginVertical: 25 }} semibold>
                    {bookID}
                </Text>
                <Text body1 grayColor style={{ textAlign: "center" }}>
                    {bookDetail}
                </Text>
            </View>
        );
    }
}
