import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    Image,
    ProfileDescription
} from "@components";
import styles from "./styles";

export default class OurService extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            ourTeam: [
                {
                    image: Images.profile2,
                    subName: "CEO Founder",
                    name: "Kondo Ieyasu",
                    screen: "Profile1",
                    description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    image: Images.profile3,
                    subName: "Sale Manager",
                    name: "Yeray Rosales",
                    screen: "Profile2",
                    description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    image: Images.profile5,
                    subName: "Product Manager",
                    name: "Alf Huncoot",
                    screen: "Profile3",
                    description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    image: Images.profile4,
                    subName: "Designer UI/UX",
                    name: "Chioke Okonkwo",
                    screen: "Profile4",
                    description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                }
            ]
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Our Service"
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
                    <View>
                        <Image
                            source={Images.trip4}
                            style={{ width: "100%", height: 135 }}
                        />
                        <View style={styles.titleAbout}>
                            <Text title1 semibold whiteColor>
                                Our Service
                            </Text>
                            <Text subhead whiteColor>
                                a journey into the past
                            </Text>
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <ProfileDescription
                            image={require("@assets/images/profile-2.jpg")}
                            name="Steve Garrett"
                            subName="Travel Agency"
                            description="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                            onPress={() => navigation.navigate("Profile1")}
                        />
                        {/* Package */}
                        <View style={{ marginTop: 20 }}>
                            <Image
                                source={Images.trip1}
                                style={{ width: "100%", height: 100 }}
                            />
                            <View
                                style={[
                                    styles.titleAbout,
                                    {
                                        flexDirection: "row",
                                        paddingHorizontal: 20
                                    }
                                ]}
                            >
                                <Icon
                                    name="creative-commons"
                                    solid
                                    size={24}
                                    color={BaseColor.whiteColor}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text title3 semibold whiteColor>
                                        Basic Package{" "}
                                    </Text>
                                    <Text footnote whiteColor numberOfLines={2}>
                                        Lorem ipsum dolor sit amet, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Image
                                source={Images.trip2}
                                style={{ width: "100%", height: 100 }}
                            />
                            <View
                                style={[
                                    styles.titleAbout,
                                    {
                                        flexDirection: "row",
                                        paddingHorizontal: 20
                                    }
                                ]}
                            >
                                <Icon
                                    name="app-store-ios"
                                    solid
                                    size={24}
                                    color={BaseColor.whiteColor}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text title3 semibold whiteColor>
                                        Standard Package
                                    </Text>
                                    <Text footnote whiteColor numberOfLines={2}>
                                        Lorem ipsum dolor sit amet, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Image
                                source={Images.trip3}
                                style={{ width: "100%", height: 100 }}
                            />
                            <View
                                style={[
                                    styles.titleAbout,
                                    {
                                        flexDirection: "row",
                                        paddingHorizontal: 20
                                    }
                                ]}
                            >
                                <Icon
                                    name="algolia"
                                    solid
                                    size={24}
                                    color={BaseColor.whiteColor}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text title3 semibold whiteColor>
                                        Primium Package
                                    </Text>
                                    <Text footnote whiteColor numberOfLines={2}>
                                        Lorem ipsum dolor sit amet, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/* Service */}
                        <Text headline semibold style={{ marginTop: 20 }}>
                            OUR SERVICE
                        </Text>
                        {this.state.ourTeam.map((item, index) => {
                            return (
                                <ProfileDescription
                                    style={{ marginTop: 10 }}
                                    key={"service" + index}
                                    image={item.image}
                                    description={item.description}
                                    name={item.name}
                                    subName={item.subName}
                                    onPress={() =>
                                        navigation.navigate(item.screen)
                                    }
                                />
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
