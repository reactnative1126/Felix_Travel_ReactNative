import React, { Component } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    ProfileDescription,
    ProfilePerformance,
    Tag,
    Text,
    Card,
    TourDay,
    TourItem,
    Button,
    PackageItem,
    RateDetail,
    CommentItem
} from "@components";
import { TabView, TabBar } from "react-native-tab-view";
import styles from "./styles";
// Load sample data
import { UserData, ReviewData, TourData, PackageData } from "@data";

export default class TourDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            index: 0,
            routes: [
                { key: "information", title: "Information" },
                { key: "tour", title: "Tours" },
                { key: "package", title: "Packages" },
                { key: "review", title: "Review" }
            ],
            userData: UserData[0],
            packageItem: PackageData[0],
            packageItem2: PackageData[2]
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
                <View style={{ flex: 1, width: 130, alignItems: "center" }}>
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
            case "information":
                return (
                    <InformationTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "tour":
                return (
                    <TourTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "package":
                return (
                    <PackageTab
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "review":
                return (
                    <ReviewTab
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
                    title="Travel Agency"
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
                <ProfileDescription
                    image={userData.image}
                    name={userData.name}
                    subName={userData.major}
                    description={userData.address}
                    style={{ marginTop: 25, paddingHorizontal: 20 }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 20
                    }}
                >
                    <View
                        style={{
                            width: 80,
                            justifyContent: "center"
                        }}
                    >
                        <Tag style={{ width: "100%" }}>+ Follow</Tag>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ProfilePerformance
                            data={userData.performance}
                            type="small"
                            style={{
                                backgroundColor: BaseColor.whiteColor
                            }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <TabView
                        lazy
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={this._handleIndexChange}
                    />
                    <View style={styles.contentButtonBottom}>
                        <View>
                            <Text caption1 semibold>
                                16 Days
                            </Text>
                            <Text title3 primaryColor semibold>
                                $2,199.00
                            </Text>
                            <Text caption1 semibold style={{ marginTop: 5 }}>
                                3 Participants
                            </Text>
                        </View>
                        <Button
                            style={{ height: 46 }}
                            onPress={() =>
                                navigation.navigate("PreviewBooking")
                            }
                        >
                            Book Now
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

/**
 * @description Show when tab Information activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class InformationTab extends Component {
    constructor(props) {
        super();
        this.state = {
            tours: TourData,
            dayTour: [
                {
                    id: "1",
                    image: Images.trip1,
                    day: "Day 1",
                    title: "London - Somme - Paris",
                    description:
                        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
                },
                {
                    id: "2",
                    image: Images.trip2,
                    day: "Day 2",
                    title: "Paris - Burgundy - Swiss Alps",
                    description:
                        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
                },
                {
                    id: "3",
                    image: Images.trip3,
                    day: "Day 3",
                    title: "Swiss Alps - Strasbourg",
                    description:
                        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
                },
                {
                    id: "4",
                    image: Images.trip4,
                    day: "Day 4",
                    title: "Grand Ducal Palace",
                    description:
                        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
                }
            ],
            information: [
                { title: "Location", detail: "Luxembourg" },
                { title: "Duration", detail: "16 Days" },
                { title: "Departure", detail: "08:00" },
                { title: "Price per Participant", detail: "2,199.00 USD" },
                { title: "Group size", detail: "3 - 20 people" },
                { title: "Transportation", detail: "Boat, Bicycle, Car" }
            ]
        };
    }

    render() {
        let { information, dayTour, tours } = this.state;
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    {information.map((item, index) => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingVertical: 10,
                                    borderBottomColor:
                                        BaseColor.textSecondaryColor,
                                    borderBottomWidth: 1
                                }}
                                key={"information" + index}
                            >
                                <Text body2 grayColor>
                                    {item.title}
                                </Text>
                                <Text body2 semibold accentColor>
                                    {item.detail}
                                </Text>
                            </View>
                        );
                    })}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 20
                        }}
                    >
                        <Text headline semibold>
                            Gallery
                        </Text>
                        <TouchableOpacity>
                            <Text footnote grayColor>
                                Show more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentImageGird}>
                        <View style={{ flex: 4, marginRight: 10 }}>
                            <Card
                                style={{ borderRadius: 8 }}
                                image={Images.trip7}
                            >
                                <Text headline semibold whiteColor>
                                    Dallas
                                </Text>
                            </Card>
                        </View>
                        <View style={{ flex: 6 }}>
                            <View style={{ flex: 1 }}>
                                <Card
                                    style={{ borderRadius: 8 }}
                                    image={Images.trip3}
                                >
                                    <Text headline semibold whiteColor>
                                        Warsaw
                                    </Text>
                                </Card>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 10
                                }}
                            >
                                <View style={{ flex: 6, marginRight: 10 }}>
                                    <Card
                                        style={{
                                            borderRadius: 8
                                        }}
                                        image={Images.trip4}
                                    >
                                        <Text headline semibold whiteColor>
                                            Yokohama
                                        </Text>
                                    </Card>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Card
                                        style={{ borderRadius: 8 }}
                                        image={Images.trip6}
                                    >
                                        <Text headline semibold whiteColor>
                                            10+
                                        </Text>
                                    </Card>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        headline
                        semibold
                        style={{
                            marginHorizontal: 20,
                            marginTop: 20,
                            marginBottom: 10
                        }}
                    >
                        Tour Information
                    </Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={dayTour}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <TourDay
                                image={item.image}
                                day={item.day}
                                title={item.title}
                                description={item.description}
                                style={{ marginLeft: 20 }}
                                onPress={() => {}}
                            />
                        )}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <Text headline semibold style={{ marginBottom: 10 }}>
                        Includes
                    </Text>
                    <Text body2>
                        - Donec sollicitudin molestie malesuada. Quisque velit
                        nisi, pretium ut lacinia in, elementum id enim.
                    </Text>
                    <Text body2 style={{ marginTop: 5 }}>
                        - Curabitur arcu erat, accumsan id imperdiet et,
                        porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 5 }}>
                        - Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Donec rutrum congue leo eget malesuada.
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <Text headline semibold style={{ marginBottom: 10 }}>
                        Excludes
                    </Text>
                    <Text body2>
                        - Donec sollicitudin molestie malesuada. Quisque velit
                        nisi, pretium ut lacinia in, elementum id enim.
                    </Text>
                    <Text body2 style={{ marginTop: 5 }}>
                        - Curabitur arcu erat, accumsan id imperdiet et,
                        porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 5 }}>
                        - Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Donec rutrum congue leo eget malesuada.
                    </Text>
                </View>
                <View>
                    <Text
                        headline
                        semibold
                        style={{
                            marginLeft: 20,
                            marginTop: 20
                        }}
                    >
                        Openning Tours
                    </Text>
                    <Text body2 style={{ marginBottom: 10, marginLeft: 20 }}>
                        Let find out what most interesting things
                    </Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={tours}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => (
                            <TourItem
                                grid
                                style={[
                                    styles.tourItem,
                                    index == 0
                                        ? {
                                              marginLeft: 20,
                                              marginRight: 15
                                          }
                                        : { marginRight: 15 }
                                ]}
                                onPress={() => {
                                    this.props.navigation.navigate(
                                        "TourDetail"
                                    );
                                }}
                                image={item.image}
                                name={item.name}
                                location={item.location}
                                travelTime={item.location}
                                startTime={item.startTime}
                                price={item.price}
                                rate={item.rate}
                                rateCount={item.rateCount}
                                numReviews={item.numReviews}
                                author={item.author}
                                services={item.services}
                            />
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}

/**
 * @description Show when tab Tour activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class TourTab extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                        <Text headline semibold>
                            Gallery
                        </Text>
                        <Text footnote grayColor>
                            Show more
                        </Text>
                    </View>
                    <View style={styles.contentImageGird}>
                        <View style={{ flex: 4, marginRight: 10 }}>
                            <Card
                                style={{ borderRadius: 8 }}
                                image={Images.trip7}
                            >
                                <Text headline semibold whiteColor>
                                    Dallas
                                </Text>
                            </Card>
                        </View>
                        <View style={{ flex: 6 }}>
                            <View style={{ flex: 1 }}>
                                <Card
                                    style={{ borderRadius: 8 }}
                                    image={Images.trip3}
                                >
                                    <Text headline semibold whiteColor>
                                        Warsaw
                                    </Text>
                                </Card>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 10
                                }}
                            >
                                <View style={{ flex: 6, marginRight: 10 }}>
                                    <Card
                                        style={{
                                            borderRadius: 8
                                        }}
                                        image={Images.trip4}
                                    >
                                        <Text headline semibold whiteColor>
                                            Yokohama
                                        </Text>
                                    </Card>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Card
                                        style={{ borderRadius: 8 }}
                                        image={Images.trip6}
                                    >
                                        <Text headline semibold whiteColor>
                                            10+
                                        </Text>
                                    </Card>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text headline semibold style={{ marginTop: 20 }}>
                        Day 1: London - Somme - Paris
                    </Text>
                    <Image
                        source={Images.room2}
                        style={{ height: 120, width: "100%", marginTop: 10 }}
                    />
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text headline semibold style={{ marginTop: 20 }}>
                        Day 2: Paris - Burgundy - Swiss Alps
                    </Text>
                    <Image
                        source={Images.room3}
                        style={{ height: 120, width: "100%", marginTop: 10 }}
                    />
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text headline semibold style={{ marginTop: 20 }}>
                        Day 3: Swiss Alps - Strasbourg - Heidel…
                    </Text>
                    <Image
                        source={Images.room4}
                        style={{ height: 120, width: "100%", marginTop: 10 }}
                    />
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                    <Text body2 style={{ marginTop: 10 }}>
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

/**
 * @description Show when tab Package activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class PackageTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageItem: PackageData[0],
            packageItem2: PackageData[2]
        };
    }

    render() {
        const { packageItem, packageItem2 } = this.state;

        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text body2 style={{ marginTop: 20 }}>
                        Europe welcomes millions of travelers every year. With
                        Expat Explore you can see all that Europe has to offer.
                        Take the time to explore small villages and big cities.
                        There's lots to choose from in over 50 independent
                        states. Our Europe multi-country tours are some of the
                        best packages. We offer you great prices, quality and
                        convenience. Get ready for the best European vacation!
                        Europe has a list of possible adventures for everyone.{" "}
                    </Text>
                    <PackageItem
                        packageName={packageItem.packageName}
                        price={packageItem.price}
                        type={packageItem.type}
                        description={packageItem.description}
                        services={packageItem.services}
                        onPressIcon={() => {
                            this.props.navigation.navigate("PricingTable");
                        }}
                        style={{ marginBottom: 10, marginTop: 20 }}
                    />
                    <PackageItem
                        detail
                        packageName={packageItem2.packageName}
                        price={packageItem2.price}
                        type={packageItem2.type}
                        description={packageItem2.description}
                        services={packageItem2.services}
                    />
                </View>
            </ScrollView>
        );
    }
}

/**
 * @description Show when tab Review activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class ReviewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rateDetail: {
                point: 4.7,
                maxPoint: 5,
                totalRating: 25,
                data: ["80%", "10%", "10%", "0%", "0%"]
            },
            reviewList: ReviewData
        };
    }
    render() {
        let { rateDetail, reviewList } = this.state;
        return (
            <FlatList
                style={{ padding: 20 }}
                refreshControl={
                    <RefreshControl
                        colors={[BaseColor.primaryColor]}
                        tintColor={BaseColor.primaryColor}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {}}
                    />
                }
                data={reviewList}
                keyExtractor={(item, index) => item.id}
                ListHeaderComponent={() => (
                    <RateDetail
                        point={rateDetail.point}
                        maxPoint={rateDetail.maxPoint}
                        totalRating={rateDetail.totalRating}
                        data={rateDetail.data}
                    />
                )}
                renderItem={({ item }) => (
                    <CommentItem
                        style={{ marginTop: 10 }}
                        image={item.source}
                        name={item.name}
                        rate={item.rate}
                        date={item.date}
                        title={item.title}
                        comment={item.comment}
                    />
                )}
            />
        );
    }
}
