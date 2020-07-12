import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    DatePicker,
    Text,
    Button,
    BusPlan
} from "@components";
import styles from "./styles";
import Modal from "react-native-modal";

export default class BusSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            modalVisible: false,
            people: 1
        };
    }

    renderModal() {
        const { people, modalVisible } = this.state;
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
                            <Text body1>Passenger</Text>
                            <Text caption1 grayColor>
                                People
                            </Text>
                        </View>
                        <View style={styles.iconRight}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({
                                        people: people - 1 > 0 ? people : 0
                                    })
                                }
                            >
                                <Icon
                                    name="minus-circle"
                                    size={24}
                                    color={BaseColor.grayColor}
                                />
                            </TouchableOpacity>
                            <Text title1>{people}</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    this.setState({ people: people + 1 })
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
        const { loading, people } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Shutle Bus Search"
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
                                onPress={() => navigation.navigate("SelectBus")}
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    From
                                </Text>
                                <Text headline semibold>
                                    Smart Market
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.linePick} />
                            <TouchableOpacity
                                style={styles.itemPick}
                                onPress={() => navigation.navigate("SelectBus")}
                            >
                                <Text
                                    caption1
                                    light
                                    style={{ marginBottom: 5 }}
                                >
                                    To
                                </Text>
                                <Text headline semibold>
                                    Harvard University
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentQuest}>
                            <DatePicker
                                label="Date"
                                time="01 Aug 2019"
                                style={{ flex: 6, marginRight: 15 }}
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
                                    Passenger
                                </Text>
                                <Text body1 semibold>
                                    {people} People
                                </Text>
                            </TouchableOpacity>
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
                                        navigation.navigate("BusList");
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
