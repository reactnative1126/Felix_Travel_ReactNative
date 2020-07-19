import React, { Component } from "react";
import { View, Image, ScrollView, Animated } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    Tag,
    ProfilePerformance
} from "@components";
import * as Utils from "@utils";
import styles from "./styles";

// Load sample data
import { UserData } from "@data";

export default class Profile8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: UserData[0],
            heightHeader: Utils.heightHeader()
        };
        this._deltaY = new Animated.Value(0);
    }

    render() {
        const { navigation } = this.props;
        const { userData, heightHeader } = this.state;
        const heightImageBanner = Utils.scaleWithPixel(335, 1);
        const marginTopBanner = heightImageBanner - heightHeader - 70;

        return (
            <View style={{ flex: 1 }}>
                <Animated.Image
                    source={Images.room6}
                    style={[
                        styles.imgBanner,
                        {
                            height: this._deltaY.interpolate({
                                inputRange: [
                                    0,
                                    Utils.scaleWithPixel(250),
                                    Utils.scaleWithPixel(250)
                                ],
                                outputRange: [
                                    heightImageBanner,
                                    heightHeader,
                                    heightHeader
                                ]
                            })
                        }
                    ]}
                />
                <SafeAreaView
                    style={BaseStyle.safeAreaView}
                    forceInset={{ top: "always" }}
                >
                    <Header
                        title=""
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
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            onScroll={Animated.event([
                                {
                                    nativeEvent: {
                                        contentOffset: { y: this._deltaY }
                                    }
                                }
                            ])}
                            onContentSizeChange={() =>
                                this.setState({
                                    heightHeader: Utils.heightHeader()
                                })
                            }
                            scrollEventThrottle={8}
                        >
                            <View
                                style={{
                                    paddingHorizontal: 20,
                                    marginBottom: 20,
                                    marginTop: marginTopBanner
                                }}
                            >
                                <View style={styles.contentUser}>
                                    <View style={styles.contentLeftUser}>
                                        <Text title1 semibold whiteColor>
                                            {userData.name}
                                        </Text>
                                        <Text subhead whiteColor>
                                            {userData.major}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start"
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            height: "100%",
                                            flex: 1
                                        }}
                                    >
                                        <Icon
                                            name="map-marker-alt"
                                            size={10}
                                            color={BaseColor.primaryColor}
                                        />
                                        <Text
                                            footnote
                                            primaryColor
                                            style={{ marginLeft: 3 }}
                                            numberOfLines={1}
                                        >
                                            {userData.address}
                                        </Text>
                                    </View>
                                    <Tag
                                        style={{
                                            width: 100
                                        }}
                                    >
                                        + Follow
                                    </Tag>
                                </View>
                                <Text
                                    body2
                                    grayColor
                                    numberOfLines={5}
                                    style={{ marginTop: 10 }}
                                >
                                    {userData.about}
                                </Text>
                            </View>
                            <ProfilePerformance data={userData.performance} />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
