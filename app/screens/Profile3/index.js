import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    PackageItem,
    ProfileDescription,
    ProfilePerformance,
    StepProgress,
    Tag,
    HelpBlock
} from "@components";
import styles from "./styles";

// Load sample data
import { UserData, PackageData, WorkProgressData, HelpBlockData } from "@data";

export default class Profile3 extends Component {
    constructor(props) {
        super();
        this.state = {
            packageItem: PackageData[0],
            workProgress: WorkProgressData,
            helpBlock: HelpBlockData,
            userData: UserData[0]
        };
    }

    render() {
        const { navigation } = this.props;
        const { packageItem, workProgress, helpBlock, userData } = this.state;

        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Profile3"
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
                        <View style={{ width: 80, alignItems: "center" }}>
                            <Tag style={{ width: "100%" }}>+ Follow</Tag>
                        </View>
                        <View style={{ flex: 1 }}>
                            <ProfilePerformance
                                data={UserData[0].performance}
                                type="small"
                                style={{
                                    backgroundColor: BaseColor.whiteColor
                                }}
                            />
                        </View>
                    </View>
                    <PackageItem
                        packageName={packageItem.packageName}
                        price={packageItem.price}
                        type={packageItem.type}
                        description={packageItem.description}
                        services={packageItem.services}
                        onPressIcon={() => {
                            navigation.navigate("PricingTable");
                        }}
                    />
                    <View>
                        <Text
                            headline
                            semibold
                            style={{
                                marginLeft: 20,
                                marginTop: 20,
                                marginBottom: 10
                            }}
                        >
                            Work Progress
                        </Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={workProgress}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => (
                                <StepProgress
                                    style={{ marginLeft: 20 }}
                                    step={item.step}
                                    title={item.title}
                                    description={item.description}
                                    onPress={() =>
                                        navigation.navigate("PricingTableIcon")
                                    }
                                />
                            )}
                        />
                    </View>
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
                </ScrollView>
            </SafeAreaView>
        );
    }
}
