import React, { Component } from "react";
import { View, Image, ScrollView, Animated } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    Button,
    ProfilePerformance,
    StarRating
} from "@components";
import * as Utils from "@utils";
import styles from "./styles";

// Load sample data
import { UserData } from "@data";

export default class Profile7 extends Component {
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
        const heightImageBanner = Utils.scaleWithPixel(240, 1);
        const marginTopBanner = heightImageBanner - heightHeader + 10;

        return (
            <View style={{ flex: 1 }}>
                <Animated.Image
                    source={Images.profile2}
                    style={[
                        styles.imgBanner,
                        {
                            height: this._deltaY.interpolate({
                                inputRange: [
                                    0,
                                    Utils.scaleWithPixel(180),
                                    Utils.scaleWithPixel(180)
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
                                    marginTop: marginTopBanner
                                }}
                            >
                                <Text title1 semibold>
                                    {userData.name}
                                </Text>
                                <Text
                                    subhead
                                    grayColor
                                    style={{ marginBottom: 9 }}
                                >
                                    {userData.address}
                                </Text>
                                <View style={{ flexDirection: "row" }}>
                                    <StarRating
                                        disabled={true}
                                        starSize={10}
                                        maxStars={5}
                                        rating={4}
                                        selectedStar={rating => { }}
                                        fullStarColor={BaseColor.accentColor}
                                    />
                                </View>
                                <Text
                                    headline
                                    semibold
                                    style={{ marginTop: 10 }}
                                >
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
                            <ProfilePerformance
                                type="small"
                                style={{
                                    backgroundColor: "white",
                                    marginVertical: 20
                                }}
                                data={userData.performance}
                            />
                            <View style={{ paddingHorizontal: 20 }}>
                                <Button full>Following</Button>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
