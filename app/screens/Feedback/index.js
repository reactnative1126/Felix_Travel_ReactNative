import React, { Component } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Image,
    Header,
    SafeAreaView,
    Icon,
    Text,
    StarRating
} from "@components";
import styles from "./styles";

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 4.5,
            title: "",
            review: ""
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
                    title="Feedback"
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
                                Save
                            </Text>
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {
                        navigation.navigate("Review");
                    }}
                />
                <ScrollView>
                    <View style={{ alignItems: "center", padding: 20 }}>
                        <Image
                            source={Images.profile2}
                            style={{
                                width: 62,
                                height: 62,
                                borderRadius: 31
                            }}
                        />
                        <View style={{ width: 160 }}>
                            <StarRating
                                starSize={26}
                                maxStars={5}
                                rating={this.state.rate}
                                selectedStar={rating => {
                                    this.setState({ rate: rating });
                                }}
                                fullStarColor={BaseColor.yellowColor}
                                containerStyle={{ padding: 5 }}
                            />
                            <Text
                                caption1
                                grayColor
                                style={{ textAlign: "center" }}
                            >
                                Tap a star to rate
                            </Text>
                        </View>
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text =>
                                this.setState({ title: text })
                            }
                            autoCorrect={false}
                            placeholder="Title"
                            placeholderTextColor={BaseColor.grayColor}
                            value={this.state.title}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 20 }]}
                            onChangeText={text =>
                                this.setState({ review: text })
                            }
                            textAlignVertical="top"
                            multiline={true}
                            autoCorrect={false}
                            placeholder="Reviews"
                            placeholderTextColor={BaseColor.grayColor}
                            value={this.state.review}
                            selectionColor={BaseColor.primaryColor}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
