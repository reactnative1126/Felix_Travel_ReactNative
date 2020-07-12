import React, { Component } from "react";
import { View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    Text,
    StarRating,
    ProfileDetail,
    ProfilePerformance,
    Tag,
    PostListItem,
    Button
} from "@components";
import styles from "./styles";

// Load sample data
import { UserData } from "@data";

export default class HotelInformation extends Component {
    constructor(props) {
        super();

        // Temp data define
        this.state = {
            userData: UserData[0],
            service: [
                { id: "1", name: "wifi" },
                { id: "2", name: "coffee" },
                { id: "3", name: "bath" },
                { id: "4", name: "car" },
                { id: "5", name: "paw" },
                { id: "6", name: "futbol" },
                { id: "7", name: "user-secret" },
                { id: "8", name: "clock" },
                { id: "9", name: "tv" },
                { id: "10", name: "futbol" }
            ]
        };
    }
    render() {
        const { navigation } = this.props;
        const { userData, service } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Hotel Information"
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
                    {/* Image Gallery */}
                    <TouchableOpacity
                        style={styles.contentGallery}
                        onPress={() => {
                            navigation.navigate("PreviewImage");
                        }}
                        activeOpacity={0.9}
                    >
                        <View style={styles.galleryLineTop}>
                            <View style={{ flex: 1, paddingRight: 5 }}>
                                <Image
                                    source={Images.room1}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={Images.room2}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                        </View>
                        <View style={styles.galleryLineBottom}>
                            <View style={{ flex: 1, paddingRight: 5 }}>
                                <Image
                                    source={Images.room3}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={{ flex: 1, paddingRight: 5 }}>
                                <Image
                                    source={Images.room4}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={Images.room5}
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <Text
                                    headline
                                    whiteColor
                                    style={{
                                        position: "absolute",
                                        right: 10,
                                        bottom: 10
                                    }}
                                >
                                    5+
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Information */}
                    <View style={BaseStyle.bodyPaddingDefault}>
                        <Text title2 semibold style={{ marginTop: 10 }}>
                            Standard Twin Room
                        </Text>
                        <View
                            style={{
                                width: 66,
                                marginTop: 10,
                                marginBottom: 20
                            }}
                        >
                            <StarRating
                                disabled={true}
                                starSize={14}
                                maxStars={5}
                                rating={4.7}
                                selectedStar={rating => {}}
                                fullStarColor={BaseColor.yellowColor}
                            />
                        </View>
                        {/* Facilities & Icon */}
                        <Text headline style={{ marginBottom: 10 }} semibold>
                            Facilities of Hotel
                        </Text>
                        <FlatList
                            numColumns={5}
                            data={service}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        padding: 10,
                                        alignItems: "center"
                                    }}
                                >
                                    <Icon
                                        name={item.name}
                                        size={24}
                                        color={BaseColor.accentColor}
                                    />
                                    <Text overline grayColor>
                                        Free Wifi
                                    </Text>
                                </View>
                            )}
                        />
                        {/* Information */}
                        <Text headline semibold style={{ marginTop: 10 }}>
                            Hotel Description
                        </Text>
                        <Text
                            footnote
                            grayColor
                            style={{ marginBottom: 8, marginTop: 3 }}
                        >
                            218 Austen Mountain, consectetur adipiscing, do
                            eiusmod tempor incididunt ut labore et dolore
                        </Text>
                        <TouchableOpacity style={{ alignItems: "center" }}>
                            <Text caption1 accentColor>
                                See Details
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    {/* Hosting Profile */}
                    <ProfileDetail
                        image={userData.image}
                        textFirst={userData.name}
                        textSecond={userData.address}
                        textThird={userData.id}
                        point={userData.point}
                        style={BaseStyle.bodyPaddingDefault}
                        onPress={() => navigation.navigate("Profile1")}
                    />
                    <ProfilePerformance
                        type="medium"
                        style={{ backgroundColor: "white" }}
                        data={userData.performance}
                    />
                    <View
                        style={[
                            BaseStyle.bodyPaddingDefault,
                            {
                                flexDirection: "row"
                            }
                        ]}
                    >
                        <Tag
                            outline
                            style={{ marginRight: 15 }}
                            onPress={() => navigation.navigate("Messages")}
                        >
                            Contact Host
                        </Tag>
                        <Tag onPress={() => navigation.navigate("Profile3")}>
                            View Profile
                        </Tag>
                    </View>
                    {/* Todo Things */}
                    <View
                        style={[
                            BaseStyle.bodyPaddingDefault,
                            {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 10,
                                marginTop: 20
                            }
                        ]}
                    >
                        <Text headline semibold>
                            Todo Things
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Post")}
                        >
                            <Text caption1 grayColor>
                                Show More
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={[
                            { id: "1", image: Images.trip1 },
                            { id: "2", image: Images.trip2 },
                            { id: "3", image: Images.trip3 },
                            { id: "4", image: Images.trip4 },
                            { id: "5", image: Images.trip5 }
                        ]}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <PostListItem
                                image={item.image}
                                style={{ marginLeft: 20 }}
                                title="South Travon"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                date="6 Deals Left"
                                onPress={() =>
                                    navigation.navigate("PostDetail")
                                }
                            />
                        )}
                    />
                </ScrollView>
                {/* Pricing & Booking Process */}
                <View style={styles.contentButtonBottom}>
                    <View>
                        <Text caption1 semibold>
                            Price/Room/Night
                        </Text>
                        <Text title3 primaryColor semibold>
                            $399.99
                        </Text>
                        <Text caption1 semibold style={{ marginTop: 5 }}>
                            AVG/Night
                        </Text>
                    </View>
                    <Button
                        style={{ height: 46 }}
                        onPress={() => navigation.navigate("PreviewBooking")}
                    >
                        Book Now
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
