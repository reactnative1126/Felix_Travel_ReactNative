import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, PackageItem } from "@components";
import styles from "./styles";

// Load sample data
import { PackageData } from "@data";

export default class PricingTable extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            packageItem: PackageData[0],
            packageItemDetail: PackageData[1]
        };
    }
    render() {
        const { navigation } = this.props;
        const { packageItem, packageItemDetail } = this.state;

        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Pricing Table"
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
                    <View style={styles.contain}>
                        {/* Package Component > Summarize */}
                        <PackageItem
                            packageName={packageItem.packageName}
                            price={packageItem.price}
                            type={packageItem.type}
                            description={packageItem.description}
                            onPressIcon={() => {
                                navigation.navigate("PricingTable");
                            }}
                            style={{ marginBottom: 10 }}
                        />
                        {/* Package Component > Expand Detail */}
                        <PackageItem
                            detail
                            packageName={packageItemDetail.packageName}
                            price={packageItemDetail.price}
                            type={packageItemDetail.type}
                            description={packageItemDetail.description}
                            services={packageItemDetail.services}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
