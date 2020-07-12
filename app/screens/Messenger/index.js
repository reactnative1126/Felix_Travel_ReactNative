import React, { Component } from "react";
import { View, RefreshControl, FlatList } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, ListThumbSquare } from "@components";
import styles from "./styles";

// Load sample data
import { MessagesData } from "@data";

export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            messenger: MessagesData
        };
    }

    render() {
        const { navigation } = this.props;
        const { messenger } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Messenger"
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
                    refreshControl={
                        <RefreshControl
                            colors={[BaseColor.primaryColor]}
                            tintColor={BaseColor.primaryColor}
                            refreshing={this.state.refreshing}
                            onRefresh={() => { }}
                        />
                    }
                    data={messenger}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => (
                        <ListThumbSquare
                            onPress={() => {
                                navigation.navigate("Messages");
                            }}
                            image={item.image}
                            txtLeftTitle={item.user}
                            txtContent={item.message}
                            txtRight={item.date}
                        />
                    )}
                />
            </SafeAreaView>
        );
    }
}
