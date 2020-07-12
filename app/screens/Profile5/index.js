import React, { Component } from "react";
import { View, ScrollView, Animated } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    Text,
    Button,
    ProfilePerformance
} from "@components";
import * as Utils from "@utils";
import styles from "./styles";

// Load sample data
import { UserData } from "@data";

export default class Profile5 extends Component {
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
        const marginTopBanner = heightImageBanner - heightHeader - 120;

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
                                    Utils.scaleWithPixel(280),
                                    Utils.scaleWithPixel(290)
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
                                style={[
                                    styles.contentUser,
                                    { marginTop: marginTopBanner }
                                ]}
                            >
                                <Image
                                    source={Images.profile2}
                                    style={styles.imgUser}
                                    resizeMode="cover"
                                />
                                <View style={styles.contentLeftUser}>
                                    <Text title1 semibold whiteColor>
                                        {userData.name}
                                    </Text>
                                    <Text
                                        subhead
                                        whiteColor
                                        style={{ marginBottom: 9 }}
                                    >
                                        {userData.major}
                                    </Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon
                                            name="map-marker-alt"
                                            size={10}
                                            color={BaseColor.primaryColor}
                                        />
                                        <Text
                                            footnote
                                            primaryColor
                                            numberOfLines={1}
                                            style={{ marginLeft: 3 }}
                                        >
                                            {userData.address}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    padding: 20
                                }}
                            >
                                <Text headline semibold>
                                    About Me
                                </Text>
                                <Text
                                    body2
                                    numberOfLines={5}
                                    style={{ marginTop: 10 }}
                                >
                                    {userData.about}
                                </Text>
                            </View>
                            <ProfilePerformance data={userData.performance} />
                            <View style={{ padding: 20 }}>
                                <Button full>Following</Button>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
