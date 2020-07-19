import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    DatePicker,
    Text,
    QuantityPicker,
    Button
} from "@components";
import styles from "./styles";
import Modal from "react-native-modal";

export default class CruiseSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            night: 1
        };
    }

    renderModal() {
        const { night, modalVisible } = this.state;
        return (
            <Modal
                isVisible={modalVisible}
                onSwipeComplete={() => this.setState({ modalVisible: false })}
                swipeDirection={["down"]}
                style={styles.bottomModal}
            >
                <View style={styles.contentFilterBottom}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown} />
                    </View>
                    <View style={styles.contentActionModalBottom}>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ modalVisible: false })
                            }
                        >
                            <Text body1>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({ modalVisible: false })
                            }
                        >
                            <Text body1 primaryColor>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.lineRow, { marginBottom: 40 }]}>
                        <View>
                            <Text body1>Duration</Text>
                            <Text caption1 grayColor>
                                Night
                            </Text>
                        </View>
                        <View style={styles.iconRight}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        night: night - 1 > 0 ? night : 0
                                    })
                                }
                            >
                                <Icon
                                    name="minus-circle"
                                    size={24}
                                    color={BaseColor.grayColor}
                                />
                            </TouchableOpacity>
                            <Text title1>{night}</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({ night: night + 1 })
                                }
                            >
                                <Icon
                                    name="plus-circle"
                                    size={24}
                                    color={BaseColor.primaryColor}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        const { navigation } = this.props;
        const { loading } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Cruise Search"
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
                {this.renderModal()}
                <ScrollView>
                    <View style={styles.contain}>
                        <View style={styles.contentPickDate}>
                            <TouchableOpacity
                                style={styles.itemPick}
                                onPress={() =>
                                    navigation.navigate("SelectCruise")
                                }
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    Cruising From
                                </Text>
                                <Text headline semibold>
                                    Caribbean
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.linePick} />
                            <TouchableOpacity
                                style={styles.itemPick}
                                onPress={() =>
                                    navigation.navigate("SelectCruise")
                                }
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    Leaving From
                                </Text>
                                <Text headline semibold>
                                    Bahamas
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentQuest}>
                            <DatePicker
                                label="Depart From"
                                time="01 Aug 2019"
                                style={{ flex: 4, marginRight: 15 }}
                            />
                            <TouchableOpacity
                                style={styles.duration}
                                onPress={() =>
                                    this.setState({ modalVisible: true })
                                }
                            >
                                <Text
                                    caption1
                                    grayColor
                                    style={{ marginBottom: 5 }}
                                >
                                    Durating
                                </Text>
                                <Text body1 semibold>
                                    4 Days 5 Nights
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: "row" }}>
                            <QuantityPicker
                                label="Adults"
                                detail=">= 12 years"
                                value={1}
                            />
                            <QuantityPicker
                                label="Childrens"
                                detail="2 - 12 years"
                                value={1}
                                style={{ marginHorizontal: 15 }}
                            />
                            <QuantityPicker
                                label="Infants"
                                detail="<= 2 years"
                                value={1}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <Button
                        loading={loading}
                        full
                        onPress={() =>
                            this.setState(
                                {
                                    loading: true
                                },
                                () => {
                                    setTimeout(() => {
                                        navigation.navigate("Cruise");
                                        this.setState({
                                            loading: false
                                        });
                                    }, 500);
                                }
                            )
                        }
                    >
                        Search
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
