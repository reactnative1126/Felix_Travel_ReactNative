import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    Text,
    Card,
    ProfileDescription
} from "@components";
import * as Utils from "@utils";
import styles from "./styles";

export default class AboutUs extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            ourTeam: [
                {
                    id: "1",
                    screen: "Profile1",
                    image: Images.profile2,
                    subName: "CEO Founder",
                    name: "Kondo Ieyasu",
                    description:
                        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    id: "2",
                    screen: "Profile2",
                    image: Images.profile3,
                    subName: "Sale Manager",
                    name: "Yeray Rosales",
                    description:
                        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    id: "3",
                    screen: "Profile3",
                    image: Images.profile5,
                    subName: "Product Manager",
                    name: "Alf Huncoot",
                    description:
                        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
                },
                {
                    id: "4",
                    screen: "Profile4",
                    image: Images.profile4,
                    subName: "Designer UI/UX",
                    name: "Chioke Okonkwo",
                    description:
                        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore"
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
                    title="About Us"
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
                                About Us
                            </Text>
                            <Text subhead whiteColor>
                                a journey into the past
                            </Text>
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text headline semibold>
                            WHO WE ARE?
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat
                        </Text>
                        <Text headline semibold style={{ marginTop: 20 }}>
                            What We Do?
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - First Class Flights
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - 5 Star Accommodations
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - Inclusive Packages
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            - Latest Model Vehicles
                        </Text>
                        <Text
                            headline
                            semibold
                            style={{ marginTop: 20, marginBottom: 15 }}
                        >
                            MEET OUR TEAM
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between"
                            }}
                        >
                            {this.state.ourTeam.map((item, index) => {
                                return (
                                    <View
                                        style={{
                                            height: 200,
                                            width:
                                                Utils.getWidthDevice() / 2 - 30,
                                            marginBottom: 20
                                        }}
                                        key={"ourTeam" + index}
                                    >
                                        <Card
                                            image={item.image}
                                            onPress={() =>
                                                navigation.navigate(item.screen)
                                            }
                                        >
                                            <Text footnote whiteColor>
                                                {item.subName}
                                            </Text>
                                            <Text headline whiteColor semibold>
                                                {item.name}
                                            </Text>
                                        </Card>
                                    </View>
                                );
                            })}
                        </View>
                        <Text headline semibold>
                            OUR SERVICE
                        </Text>
                        {this.state.ourTeam.map((item, index) => {
                            return (
                                <ProfileDescription
                                    key={"service" + index}
                                    image={item.image}
                                    name={item.name}
                                    subName={item.subName}
                                    description={item.description}
                                    style={{ marginTop: 10 }}
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
