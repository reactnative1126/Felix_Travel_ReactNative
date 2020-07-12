import React, { Component } from "react";
import { FlatList, RefreshControl, View, TouchableOpacity } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import { Image, Header, SafeAreaView, Icon, Text } from "@components";
import styles from "./styles";

export default class ProfileExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            profileScreen: [
                {
                    key: "1",
                    screen: "Profile1",
                    image: Images.profile1
                },
                {
                    key: "2",
                    screen: "Profile2",
                    image: Images.profile2
                },
                {
                    key: "3",
                    screen: "Profile3",
                    image: Images.profile3
                },
                {
                    key: "4",
                    screen: "Profile4",
                    image: Images.profile4
                },
                {
                    key: "5",
                    screen: "Profile5",
                    image: Images.profile5
                },
                {
                    key: "6",
                    screen: "Profile6",
                    image: Images.profile6
                },
                {
                    key: "7",
                    screen: "Profile7",
                    image: Images.profile7
                },
                {
                    key: "8",
                    screen: "Profile8",
                    image: Images.profile8
                }
            ]
        };
    }

    render() {
        const { navigation } = this.props;
        let { profileScreen } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Profile"
                    subTitle="Profile 8 Screens"
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
                <FlatList
                    style={{ padding: 20 }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            colors={[BaseColor.primaryColor]}
                            tintColor={BaseColor.primaryColor}
                            refreshing={this.state.refreshing}
                            onRefresh={() => {}}
                        />
                    }
                    data={profileScreen}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <View
                            style={[
                                styles.iconProFile,
                                index % 2 ? { marginLeft: 10 } : {}
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(item.screen);
                                }}
                                style={{ alignItems: "center" }}
                                activeOpacity={0.9}
                            >
                                <Image
                                    source={item.image}
                                    style={styles.imgProfile}
                                />
                                <Text body1>{item.screen}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}
