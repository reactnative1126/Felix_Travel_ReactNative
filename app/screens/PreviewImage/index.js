import React, { Component } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import Swiper from "react-native-swiper";
import { Image, Header, SafeAreaView, Icon, Text } from "@components";
import styles from "./styles";

export default class PreviewImage extends Component {
    constructor(props) {
        super(props);

        // Temp data images define
        this.state = {
            images: [
                { id: "1", image: Images.room1, selected: true },
                { id: "2", image: Images.room2 },
                { id: "3", image: Images.room3 },
                { id: "4", image: Images.room4 },
                { id: "5", image: Images.room5 },
                { id: "6", image: Images.room6 },
                { id: "7", image: Images.room7 }
            ],
            indexSelected: 0
        };
        this.flatListRef = null;
        this.swiperRef = null;
    }

    onSelect(indexSelected) {
        this.setState(
            {
                indexSelected: indexSelected,
                images: this.state.images.map((item, index) => {
                    if (index == indexSelected) {
                        return {
                            ...item,
                            selected: true
                        };
                    } else {
                        return {
                            ...item,
                            selected: false
                        };
                    }
                })
            },
            () => {
                this.flatListRef.scrollToIndex({
                    animated: true,
                    index: indexSelected
                });
            }
        );
    }

    /**
     * @description Called when image item is selected or activated
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {*} touched
     * @returns
     */
    onTouchImage(touched) {
        if (touched == this.state.indexSelected) return;
        this.swiperRef.scrollBy(touched - this.state.indexSelected, false);
    }

    render() {
        const { navigation } = this.props;
        const { images, indexSelected } = this.state;
        return (
            <SafeAreaView
                style={[BaseStyle.safeAreaView, { backgroundColor: "black" }]}
                forceInset={{ top: "always" }}
            >
                <Header
                    style={{ backgroundColor: "black" }}
                    title=""
                    renderRight={() => {
                        return (
                            <Icon
                                name="times"
                                size={20}
                                color={BaseColor.whiteColor}
                            />
                        );
                    }}
                    onPressRight={() => {
                        navigation.goBack();
                    }}
                    barStyle="light-content"
                />
                <Swiper
                    ref={ref => {
                        this.swiperRef = ref;
                    }}
                    dotStyle={{
                        backgroundColor: BaseColor.textSecondaryColor
                    }}
                    paginationStyle={{ bottom: 0 }}
                    loop={false}
                    activeDotColor={BaseColor.primaryColor}
                    removeClippedSubviews={false}
                    onIndexChanged={index => this.onSelect(index)}
                >
                    {images.map((item, key) => {
                        return (
                            <Image
                                key={key}
                                style={{ width: "100%", height: "100%" }}
                                resizeMode="contain"
                                source={item.image}
                            />
                        );
                    })}
                </Swiper>
                <View
                    style={{
                        paddingVertical: 10
                    }}
                >
                    <View style={styles.lineText}>
                        <Text body2 whiteColor>
                            Standard Double Room
                        </Text>
                        <Text body2 whiteColor>
                            {indexSelected + 1}/{images.length}
                        </Text>
                    </View>
                    <FlatList
                        ref={ref => {
                            this.flatListRef = ref;
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={images}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    this.onTouchImage(index);
                                }}
                                activeOpacity={0.9}
                            >
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        marginLeft: 20,
                                        borderRadius: 8,
                                        borderColor:
                                            index == indexSelected
                                                ? BaseColor.lightPrimaryColor
                                                : BaseColor.grayColor,
                                        borderWidth: 1
                                    }}
                                    source={item.image}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
