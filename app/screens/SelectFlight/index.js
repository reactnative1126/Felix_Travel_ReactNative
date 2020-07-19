import React, { Component } from "react";
import {
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Image } from "@components";
import styles from "./styles";

// Load sample flight data list
import { FlightBrandData } from "@data";

export default class SelectFlight extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            airplane: "",
            flight: FlightBrandData,
            loading: false
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const selected = navigation.getParam("selected");
        if (selected) {
            this.setState({
                flight: this.state.flight.map(item => {
                    return {
                        ...item,
                        checked: item.value == selected.value
                    };
                })
            });
        }
    }
    /**
     * @description Called when setting flight is selected
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     * @param {object} select
     */
    onChange(select) {
        this.setState({
            flight: this.state.flight.map(item => {
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
        const onChangeAir = navigation.getParam("onChangeAir");
        const selected = this.state.flight.filter(item => item.checked);
        if (selected.length > 0 && onChangeAir) {
            this.setState(
                {
                    loading: true
                },
                () => {
                    setTimeout(() => {
                        onChangeAir(selected[0]);
                        navigation.goBack();
                    }, 500);
                }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        let { flight, loading, airplane } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Airplane"
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
                        onChangeText={text => this.setState({ airplane: text })}
                        autoCorrect={false}
                        placeholder="Search Airplane"
                        placeholderTextColor={BaseColor.grayColor}
                        value={airplane}
                        selectionColor={BaseColor.primaryColor}
                    />
                    <View style={{ width: "100%", height: "100%" }}>
                        <FlatList
                            data={flight}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.item}
                                    onPress={() => this.onChange(item)}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Image
                                            style={styles.imageBrand}
                                            source={item.image}
                                            resizeMode="contain"
                                        />
                                        <Text body1>{item.name}</Text>
                                    </View>
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
