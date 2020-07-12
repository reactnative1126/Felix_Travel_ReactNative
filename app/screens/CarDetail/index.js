import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import Modal from "react-native-modal";
import Swiper from "react-native-swiper";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    Text,
    ProfileDetail,
    ProfilePerformance,
    Tag,
    HelpBlock,
    StarRating
} from "@components";
import styles from "./styles";
import { UserData, HelpBlockData } from "@data";

export default class CarDetail extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            refreshing: false,
            modalVisible: false,
            slide: [
                { image: Images.car1 },
                { image: Images.car2 },
                { image: Images.car3 },
                { image: Images.car4 }
            ],
            services: [
                { icon: "user", name: "5 seats" },
                { icon: "history", name: "Pay at Pick-Up  " },
                { icon: "snowflake", name: "AC" },
                { icon: "paw", name: "Pet Allowed" },
                { icon: "wifi", name: "Free Wifi" }
            ],
            userData: UserData[0],
            helpBlock: HelpBlockData
        };
    }

    // Show bottom modal when user press for booking
    openModalBottom() {
        this.setState({
            modalVisible: true
        });
    }

    // Render container bottom
    renderModalBottom() {
        const { navigation } = this.props;
        const { modalVisible } = this.state;
        return (
            <Modal
                isVisible={modalVisible}
                onSwipeComplete={() => this.setState({ modalVisible: false })}
                swipeDirection={["down"]}
                style={styles.bottomModal}
            >
                <View style={styles.contentFilterBottom}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown} />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 40
                        }}
                    >
                        <View>
                            <Text title3>Economy</Text>
                            <Text subhead grayColor>
                                Ford Mustang
                            </Text>
                            <Text
                                title3
                                primaryColor
                                semibold
                                style={{ marginTop: 5 }}
                            >
                                $399,99
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 5
                                }}
                            >
                                <StarRating
                                    disabled={true}
                                    starSize={10}
                                    maxStars={5}
                                    rating={4}
                                    selectedStar={rating => {}}
                                    fullStarColor={BaseColor.yellowColor}
                                />

                                <Text
                                    caption1
                                    grayColor
                                    semibold
                                    style={{
                                        marginLeft: 3
                                    }}
                                >
                                    100 Reviews
                                </Text>
                            </View>
                        </View>
                        <Tag
                            onPress={() =>
                                this.setState({ modalVisible: false }, () =>
                                    navigation.navigate("PreviewBooking")
                                )
                            }
                        >
                            Book Now
                        </Tag>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        const { navigation } = this.props;
        let { services, slide, userData, helpBlock } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Car Detail"
                    subTitle="24 Dec 2018"
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
                    renderRight={() => {
                        return (
                            <Text headline primaryColor numberOfLines={1}>
                                Book
                            </Text>
                        );
                    }}
                    onPressRight={() => {
                        this.openModalBottom();
                    }}
                />
                {this.renderModalBottom()}
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Swiper
                            dotStyle={{
                                backgroundColor: BaseColor.textSecondaryColor
                            }}
                            activeDotColor={BaseColor.primaryColor}
                            paginationStyle={styles.contentPage}
                            removeClippedSubviews={false}
                        >
                            {slide.map((item, index) => {
                                return (
                                    <Image
                                        source={item.image}
                                        style={styles.img}
                                        resizeMode="contain"
                                        key={index}
                                    />
                                );
                            })}
                        </Swiper>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <Text headline semibold>
                            Information
                        </Text>
                        <Text body2 style={{ marginTop: 5 }}>
                            218 Austen Mountain, consectetur adipiscing, sed do
                            eiusmod tempor incididunt ut labore et dolore
                        </Text>
                        <Text headline semibold style={{ marginTop: 20 }}>
                            Features
                        </Text>
                        <View
                            style={[
                                styles.listContentService,
                                { flexWrap: "wrap" }
                            ]}
                        >
                            {services.map((item, index) => {
                                return (
                                    <View
                                        style={{
                                            alignItems: "center"
                                        }}
                                        key={index}
                                    >
                                        <Icon
                                            name={item.icon}
                                            color={BaseColor.accentColor}
                                            size={16}
                                            solid
                                        />
                                        <Text
                                            overline
                                            grayColor
                                            style={{ marginTop: 5 }}
                                        >
                                            {item.name}
                                        </Text>
                                    </View>
                                );
                            })}
                            <View
                                style={{
                                    alignItems: "center"
                                }}
                            >
                                <Icon
                                    name={"angle-right"}
                                    color={BaseColor.grayColor}
                                    size={16}
                                    solid
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <ProfileDetail
                        image={userData.image}
                        textFirst={userData.name}
                        point={userData.point}
                        textSecond={userData.address}
                        textThird={userData.id}
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
                                flexDirection: "row",
                                marginBottom: 10
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
                        <Tag onPress={() => navigation.navigate("Profile")}>
                            View Profile
                        </Tag>
                    </View>
                    <View style={styles.line} />
                    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                        <HelpBlock
                            title={helpBlock.title}
                            description={helpBlock.description}
                            phone={helpBlock.phone}
                            email={helpBlock.email}
                            style={{ margin: 20 }}
                            onPress={() => {
                                navigation.navigate("ContactUs");
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
