import React, { Component } from "react";
import { View, ScrollView } from "react-native";
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

export default class Profile6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: UserData[0]
        };
    }

    render() {
        const { navigation } = this.props;
        const { userData } = this.state;
        const heightBanner = Utils.scaleWithPixel(178);
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={Images.room6}
                    style={[styles.imgBanner, { height: heightBanner }]}
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

                    <Image
                        source={Images.profile2}
                        style={[styles.imgimage, { top: heightBanner - 50 }]}
                    />
                    <ScrollView style={{ marginTop: heightBanner }}>
                        <View
                            style={{
                                paddingHorizontal: 20,
                                alignItems: "center"
                            }}
                        >
                            <Text title1 semibold>
                                {userData.name}
                            </Text>
                            <Text subhead grayColor style={{ marginBottom: 9 }}>
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
                                    style={{ marginLeft: 3 }}
                                >
                                    {userData.address}
                                </Text>
                            </View>
                            <Text
                                body2
                                numberOfLines={5}
                                style={{ marginVertical: 10 }}
                            >
                                {userData.about}
                            </Text>
                        </View>
                        <ProfilePerformance
                            type="small"
                            style={{ backgroundColor: "white" }}
                            data={userData.performance}
                        />
                        <View style={{ padding: 20 }}>
                            <Button full>Following</Button>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}
