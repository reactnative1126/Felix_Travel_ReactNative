import React, { Component } from "react";
import {
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text } from "@components";
import styles from "./styles";

export default class SelectBus extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            keyword: "",
            bus: [
                {
                    id: "1",
                    name: "Terminal 1",
                    value: "USA"
                },
                {
                    id: "2",
                    name: "Terminal 2",
                    value: "SIN"
                },
                {
                    id: "3",
                    name: "Terminal 3",
                    value: "SYN"
                }
            ],
            loading: false
        };
    }

    /**
     * @description Called when setting bus is selected
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {object} select
     */
    onChange(select) {
        this.setState({
            bus: this.state.bus.map(item => {
                if (item.value == select.value) {
                    return {
                        ...item,
                        checked: true
                    };
                } else {
                    return {
                        ...item,
                        checked: false
                    };
                }
            })
        });
    }

    onSave() {
        const { navigation } = this.props;
        this.setState(
            {
                loading: true
            },
            () => {
                setTimeout(() => {
                    navigation.goBack();
                }, 500);
            }
        );
    }

    render() {
        const { navigation } = this.props;
        let { bus, loading, keyword } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Search Shuttle Bus"
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
                        if (loading) {
                            return (
                                <ActivityIndicator
                                    size="small"
                                    color={BaseColor.primaryColor}
                                />
                            );
                        } else {
                            return (
                                <Text headline primaryColor>
                                    Save
                                </Text>
                            );
                        }
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => this.onSave()}
                />
                <View style={styles.contain}>
                    <TextInput
                        style={BaseStyle.textInput}
                        onChangeText={text => this.setState({ keyword: text })}
                        autoCorrect={false}
                        placeholder="Search Bus"
                        placeholderTextColor={BaseColor.grayColor}
                        value={keyword}
                        selectionColor={BaseColor.primaryColor}
                    />
                    <View style={{ width: "100%", height: "100%" }}>
                        <FlatList
                            data={bus}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.item}
                                    onPress={() => this.onChange(item)}
                                >
                                    <Text body1>{item.name}</Text>
                                    {item.checked && (
                                        <Icon
                                            name="check"
                                            size={14}
                                            color={BaseColor.primaryColor}
                                        />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
