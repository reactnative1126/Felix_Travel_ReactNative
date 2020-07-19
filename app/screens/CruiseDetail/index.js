import React, { Component } from "react";
import {
    View,
    ScrollView,
    FlatList,
    Animated,
    RefreshControl,
    InteractionManager,
    TouchableOpacity,
    TextInput
} from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    Button,
    Image,
    RateDetail,
    CommentItem,
    PostListItem,
    HelpBlock,
    StarRating
} from "@components";
import { TabView, TabBar } from "react-native-tab-view";
import * as Utils from "@utils";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./styles";

// Load sample data
import { HelpBlockData, ReviewData } from "@data";

export default class CruiseDetail extends Component {
    constructor(props) {
        super(props);
        // Temp data define
        this.state = {
            heightHeader: Utils.heightHeader(),
            title: "Europe Cruises",
            region: {
                latitude: 1.9344,
                longitude: 103.358727,
                latitudeDelta: 0.05,
                longitudeDelta: 0.004
            },
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
            ],
            index: 0,
            routes: [
                { key: "itinerary", title: "Itinerary" },
                { key: "information", title: "Information" },
                { key: "review", title: "Review" },
                { key: "feedback", title: "Feedback" }
            ]
        };
        this._deltaY = new Animated.Value(0);
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
            case "itinerary":
                return (
                    <Itinerary
                        jumpTo={jumpTo}
                        navigation={this.props.navigation}
                    />
                );
            case "feedback":
                return (
                    <Feedback
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
        const { title, heightHeader, service } = this.state;
        const heightImageBanner = Utils.scaleWithPixel(250, 1);
        const marginTopBanner = heightImageBanner - heightHeader;

        return (
            <View style={{ flex: 1 }}>
                <Animated.View
                    style={[
                        styles.imgBanner,
                        {
                            height: this._deltaY.interpolate({
                                inputRange: [
                                    0,
                                    Utils.scaleWithPixel(150),
                                    Utils.scaleWithPixel(150)
                                ],
                                outputRange: [
                                    heightImageBanner,
                                    heightHeader,
                                    heightHeader
                                ]
                            })
                        }
                    ]}
                >
                    <Image
                        source={Images.cruise1}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                    />
                    <Text
                        title2
                        semibold
                        whiteColor
                        style={{
                            position: "absolute",
                            paddingTop: heightHeader - 45
                        }}
                    >
                        {title}
                    </Text>
                </Animated.View>
                <SafeAreaView
                    style={BaseStyle.safeAreaView}
                    forceInset={{ top: "always" }}
                >
                    {/* Header */}
                    <Header
                        title=""
                        renderLeft={() => {
                            return (
                                <Icon
                                    name="arrow-left"
                                    size={20}
                                    color={BaseColor.whiteColor}
                                />
                            );
                        }}
                        renderRight={() => {
                            return (
                                <Icon
                                    name="images"
                                    size={20}
                                    color={BaseColor.whiteColor}
                                />
                            );
                        }}
                        onPressLeft={() => {
                            navigation.goBack();
                        }}
                        onPressRight={() => {
                            navigation.navigate("PreviewImage");
                        }}
                    />
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
                        {/* Main Container */}
                        <View
                            style={[
                                { paddingHorizontal: 20, paddingTop: 10 },
                                { marginTop: marginTopBanner }
                            ]}
                        >
                            <Text
                                headline
                                style={{ marginBottom: 10 }}
                                semibold
                            >
                                Specials
                            </Text>
                            <FlatList
                                numColumns={5}
                                data={service}
                                keyExtractor={(item, index) => item.id}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            alignItems: "center",
                                            paddingHorizontal: 10,
                                            marginBottom: 10
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
                        </View>
                        <TabView
                            lazy
                            navigationState={this.state}
                            renderScene={this._renderScene}
                            renderTabBar={this._renderTabBar}
                            onIndexChange={this._handleIndexChange}
                        />
                    </ScrollView>
                    {/* Pricing & Booking Process */}
                    <View style={styles.contentButtonBottom}>
                        <View>
                            <Text caption1 semibold>
                                Starting From
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
                            onPress={() =>
                                navigation.navigate("PreviewBooking")
                            }
                        >
                            Book Now
                        </Button>
                    </View>
                </SafeAreaView>
            </View>
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
    }

    render() {
        return (
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <Text headline semibold>
                    Day 1: London - Somme - Paris
                </Text>
                <Image
                    source={Images.cruise1}
                    style={{ height: 120, width: "100%", marginTop: 10 }}
                />
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text headline semibold style={{ marginTop: 20 }}>
                    Day 2: Paris - Burgundy - Swiss Alps
                </Text>
                <Image
                    source={Images.cruise2}
                    style={{ height: 120, width: "100%", marginTop: 10 }}
                />
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text headline semibold style={{ marginTop: 20 }}>
                    Day 3: Swiss Alps - Strasbourg - Heidel…
                </Text>
                <Image
                    source={Images.cruise3}
                    style={{ height: 120, width: "100%", marginTop: 10 }}
                />
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
                <Text body2 style={{ marginTop: 10 }}>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </Text>
            </View>
        );
    }
}

/**
 * @description Show when tab Itinerary activated
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @class PreviewTab
 * @extends {Component}
 */
class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderMapView: false,
            region: {
                latitude: 1.9344,
                longitude: 103.358727,
                latitudeDelta: 0.05,
                longitudeDelta: 0.004
            },
            helpBlock: HelpBlockData,
            todo: [
                {
                    id: "1",
                    title: "South Travon",
                    image: Images.trip1
                },
                {
                    id: "2",
                    title: "South Travon",
                    image: Images.trip2
                },
                {
                    id: "3",
                    title: "South Travon",
                    image: Images.trip3
                },
                {
                    id: "4",
                    title: "South Travon",
                    image: Images.trip4
                },
                {
                    id: "5",
                    title: "South Travon",
                    image: Images.trip5
                }
            ]
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderMapView: true });
        });
    }

    render() {
        const { renderMapView, todo, helpBlock } = this.state;
        const { navigation } = this.props;
        return (
            <View style={{ paddingHorizontal: 20 }}>
                <Text body2 style={{ marginTop: 15 }}>
                    The beauty of natural wonders and rustic wildlife sightings
                    makes this Alaska cruise a remarkable experience. Venture
                    into the wilderness on a dogsled ride in Juneau, witness
                    Misty Fjords aboard a jet-powered catamaran in Ketchikan,
                    and take it all in via the rails on the Skagway White Pass
                    Scenic Railway.
                </Text>
                <View
                    style={{
                        height: 180,
                        width: "100%",
                        marginVertical: 15
                    }}
                >
                    {renderMapView && (
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            region={this.state.region}
                            onRegionChange={() => {}}
                        >
                            <Marker
                                coordinate={{
                                    latitude: 1.9344,
                                    longitude: 103.358727
                                }}
                            />
                        </MapView>
                    )}
                </View>
                <View style={styles.lineInfor}>
                    <Text headline numberOfLines={1} style={{ flex: 1 }}>
                        Day
                    </Text>
                    <Text headline numberOfLines={1} style={{ flex: 2 }}>
                        Ports
                    </Text>
                    <Text headline numberOfLines={1} style={{ flex: 1 }}>
                        Arrive
                    </Text>
                    <Text
                        headline
                        numberOfLines={1}
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        Depart
                    </Text>
                </View>
                <View style={styles.lineInfor}>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        Mon
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 2 }}>
                        Seattle, Washington
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        --
                    </Text>
                    <Text
                        caption1
                        numberOfLines={1}
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        5:00 pm
                    </Text>
                </View>
                <View style={styles.lineInfor}>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        Tue
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 2 }}>
                        Skagway, Alaska
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        7:00 am
                    </Text>
                    <Text
                        caption1
                        numberOfLines={1}
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        8:00 pm
                    </Text>
                </View>
                <View style={styles.lineInfor}>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        Wed
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 2 }}>
                        Skagway, Alaska
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        7:00 am
                    </Text>
                    <Text
                        caption1
                        numberOfLines={1}
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        8:00 pm
                    </Text>
                </View>
                <View style={styles.lineInfor}>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        Thur
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 2 }}>
                        Skagway, Alaska
                    </Text>
                    <Text caption1 numberOfLines={1} style={{ flex: 1 }}>
                        7:00 am
                    </Text>
                    <Text
                        caption1
                        numberOfLines={1}
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        8:00 pm
                    </Text>
                </View>
                <View style={styles.todoTitle}>
                    <Text headline semibold>
                        Todo Things
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Post");
                        }}
                    >
                        <Text caption1 grayColor>
                            Show More
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={todo}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <PostListItem
                            style={{ marginRight: 20 }}
                            title="South Travon"
                            date="6 Deals Left"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            image={item.image}
                            onPress={() => {
                                navigation.navigate("PostDetail");
                            }}
                        />
                    )}
                />
                <HelpBlock
                    title={helpBlock.title}
                    description={helpBlock.description}
                    phone={helpBlock.phone}
                    email={helpBlock.email}
                    style={{ marginTop: 15 }}
                    onPress={() => {
                        navigation.navigate("ContactUs");
                    }}
                />
                <View style={{ paddingVertical: 15 }}>
                    <Text headline semibold>
                        If You Have Any Questions
                    </Text>
                    <View style={styles.itemReason}>
                        <Icon
                            name="map-marker-alt"
                            size={18}
                            color={BaseColor.accentColor}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text subhead semibold>
                                How Can We Get Great Food
                            </Text>
                            <Text body2>
                                Lorem ipsum dolor sit amet, nec et suas augue
                                diceret, cu cum malis veniam democritum. Eu
                                liber vocibus his, qui id cetero
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemReason}>
                        <Icon
                            name="pagelines"
                            size={18}
                            color={BaseColor.accentColor}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text subhead semibold>
                                Great Food
                            </Text>
                            <Text body2>
                                Excellent cuisine, typical dishes from the best
                                Romagna tradition and more!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemReason}>
                        <Icon
                            name="servicestack"
                            size={18}
                            color={BaseColor.accentColor}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text subhead semibold>
                                Private Beach
                            </Text>
                            <Text body2>
                                Excellent cuisine, typical dishes from the best
                                Romagna tradition and more!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemReason}>
                        <Icon
                            name="trophy"
                            size={18}
                            color={BaseColor.accentColor}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text subhead semibold>
                                5 Stars Hospitality
                            </Text>
                            <Text body2>
                                Romagna hospitality, typical and much
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
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
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 4.5,
            title: "",
            review: ""
        };
    }

    render() {
        const { rate, title, review } = this.state;
        return (
            <View style={{ alignItems: "center", padding: 20 }}>
                <View style={{ width: 160 }}>
                    <StarRating
                        starSize={26}
                        maxStars={5}
                        rating={rate}
                        selectedStar={rating => {
                            this.setState({ rate: rating });
                        }}
                        fullStarColor={BaseColor.yellowColor}
                        containerStyle={{ padding: 5 }}
                    />
                    <Text caption1 grayColor style={{ textAlign: "center" }}>
                        Tap a star to rate
                    </Text>
                </View>
                <TextInput
                    style={[BaseStyle.textInput, { marginTop: 10 }]}
                    onChangeText={text => this.setState({ title: text })}
                    autoCorrect={false}
                    placeholder="Title"
                    placeholderTextColor={BaseColor.grayColor}
                    value={title}
                    selectionColor={BaseColor.primaryColor}
                />
                <TextInput
                    style={[
                        BaseStyle.textInput,
                        { marginTop: 20, height: 140 }
                    ]}
                    onChangeText={text => this.setState({ review: text })}
                    textAlignVertical="top"
                    multiline={true}
                    autoCorrect={false}
                    placeholder="Reviews"
                    placeholderTextColor={BaseColor.grayColor}
                    value={review}
                    selectionColor={BaseColor.primaryColor}
                />
                <Button full style={{ marginTop: 20 }} onPress={() => {}}>
                    Sent
                </Button>
            </View>
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
