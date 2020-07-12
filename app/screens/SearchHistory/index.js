import React, { Component } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import { Header, SafeAreaView, Icon, Text, Card } from "@components";
import styles from "./styles";
import internationalization from "../../config/internationalization";

export default class SearchHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            loading: false,
            searchHistory: [
                { id: "1", keyword: "Delux Room" },
                { id: "2", keyword: "Tripple Room" },
                { id: "3", keyword: "Single Room" },
                { id: "4", keyword: "King Room" },
                { id: "5", keyword: "Lux Room" }
            ],
            discoverMore: [
                { id: "1", keyword: "Hotel California" },
                { id: "2", keyword: "Top 10 Things Must To Do In This Autum" },
                { id: "3", keyword: "Best Hotel Indonesia" }
            ],
            recentlyView: [
                { id: "1", name: "France", image: Images.trip1 },
                { id: "2", name: "Dublin", image: Images.trip2 },
                { id: "3", name: "Houston", image: Images.trip3 },
                { id: "4", name: "Houston", image: Images.trip4 }
            ]
        };
    }

    onSearch(keyword) {
        const { navigation } = this.props;
        const { search, searchHistory } = this.state;
        const found = searchHistory.some(item => item.keyword == keyword);
        let searchData = [];

        if (found) {
            searchData = searchHistory.map(item => {
                return {
                    ...item,
                    checked: item.keyword == keyword
                };
            });
        } else {
            searchData = searchHistory.concat({
                keyword: search
            });
        }
        this.setState(
            {
                search: keyword,
                searchHistory: searchData,
                loading: true
            },
            () => {
                setTimeout(() => navigation.goBack(), 1000);
            }
        );
    }

    render() {
        const isRTL = internationalization.isRTL();
        const { navigation } = this.props;
        const {
            search,
            searchHistory,
            discoverMore,
            recentlyView,
            loading
        } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    isRTL={isRTL}
                    title="Search"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="times"
                                size={20}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    renderRight={() => {
                        if (loading) {
                            return (
                                <ActivityIndicator
                                    size="small"
                                    color={BaseColor.primaryColor}
                                />
                            );
                        }
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                />
                <View style={{ padding: 20 }}>
                    <View
                        style={!isRTL ? { flexDirection: "row", alignItems: "center" } : { flexDirection: "row-reverse", alignItems: "center" }}
                    >
                        <TextInput
                            style={[!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}, BaseStyle.textInput]}
                            onChangeText={text =>
                                this.setState({ search: text })
                            }
                            autoCorrect={false}
                            placeholder="Search..."
                            placeholderTextColor={BaseColor.grayColor}
                            value={search}
                            selectionColor={BaseColor.primaryColor}
                            onSubmitEditing={() => {
                                this.onSearch(search);
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    search: ""
                                });
                            }}
                            style={styles.btnClearSearch}
                        >
                            <Icon
                                name="times"
                                size={18}
                                color={BaseColor.grayColor}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={!isRTL ? styles.rowTitle : styles.rowTitleRTL}>
                            <Text headline style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>SEARCH HISTORY</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({ searchHistory: [] })
                                }
                            >
                                <Text caption1 accentColor style={!isRTL ? {textAlign: 'right'} : {textAlign: 'left'}}>
                                    Clear
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={!isRTL ? {flexDirection: "row", flexWrap: "wrap"} : {flexDirection: "row-reverse", flexWrap: "wrap"}}
                        >
                            {searchHistory.map((item, index) => (
                                <TouchableOpacity
                                    style={[
                                        styles.itemHistory,
                                        item.checked
                                            ? {
                                                  backgroundColor:
                                                      BaseColor.primaryColor
                                              }
                                            : {}
                                    ]}
                                    onPress={() => this.onSearch(item.keyword)}
                                    key={"search" + index}
                                >
                                    <Text
                                        caption2
                                        style={
                                            item.checked
                                                ? {
                                                      color:
                                                          BaseColor.whiteColor
                                                  }
                                                : {}
                                        }
                                    >
                                        {item.keyword}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={!isRTL ? styles.rowTitle : styles.rowTitleRTL}>
                            <Text headline style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>DISCOVER MORE</Text>
                            <TouchableOpacity>
                                <Text caption1 accentColor style={!isRTL ? {textAlign: 'right'} : {textAlign: 'left'}}>
                                    Refresh
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={!isRTL ? {flexDirection: "row", flexWrap: "wrap"} : {flexDirection: "row-reverse", flexWrap: "wrap"}}
                        >
                            {discoverMore.map((item, index) => (
                                <TouchableOpacity
                                    style={styles.itemHistory}
                                    key={"discover" + index}
                                >
                                    <Text caption2>{item.keyword}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text headline style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>RECENTLY VIEWED</Text>
                        <FlatList
                            style={!isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={recentlyView}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => (
                                <Card
                                    style={[
                                        !isRTL ?
                                        {transform: [{scaleX: 1}], flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", marginRight: 20} :
                                        {transform: [{scaleX: -1}], flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", marginLeft: 20},
                                        { width: 100, height: 100, marginTop: 5 }]}
                                    image={item.image}
                                    onPress={() =>
                                        navigation.navigate("HotelDetail")
                                    }
                                >
                                    <Text headline semibold whiteColor
                                        style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}
                                    >
                                        {item.name}
                                    </Text>
                                </Card>
                            )}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
