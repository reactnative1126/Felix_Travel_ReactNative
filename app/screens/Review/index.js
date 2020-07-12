import React, { Component } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    RateDetail,
    CommentItem
} from "@components";
import styles from "./styles";

// Load sample data
import { ReviewData } from "@data";

export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rateDetail: {
                point: 4.7,
                maxPoint: 5,
                totalRating: 25,
                data: ["5%", "5%", "35%", "40%", "10%"]
            },
            reviewList: ReviewData
        };
    }

    render() {
        const { navigation } = this.props;
        let { rateDetail, reviewList } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Review"
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    renderRight={() => {
                        return (
                            <Text headline primaryColor numberOfLines={1}>
                                Reply
                            </Text>
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {
                        navigation.navigate("Feedback");
                    }}
                />
                {/* Sample User Review List */}
                <FlatList
                    style={{ padding: 20 }}
                    refreshControl={
                        <RefreshControl
                            colors={[BaseColor.primaryColor]}
                            tintColor={BaseColor.primaryColor}
                            refreshing={this.state.refreshing}
                            onRefresh={() => { }}
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
            </SafeAreaView>
        );
    }
}
