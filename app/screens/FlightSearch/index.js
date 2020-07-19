import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { BaseStyle, BaseColor, Images } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    BookingTime,
    Tag,
    FlightPlan,
    FormOption,
    QuantityPicker,
    Button
} from "@components";
import styles from "./styles";

export default class FlightSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: true,
            loading: false,
            from: {
                id: "2",
                name: "Singapore",
                value: "SIN",
                image: Images.airline2
            },
            to: {
                id: "3",
                name: "Sydney",
                value: "SYN",
                image: Images.airline3
            }
        };
    }

    onSetFlightType(round) {
        this.setState({
            round: round
        });
    }

    onSelectFlight(type) {
        const { navigation } = this.props;
        const { from, to } = this.state;
        switch (type) {
            case "to":
                navigation.navigate("SelectFlight", {
                    selected: to,
                    onChangeAir: air =>
                        this.setState({
                            to: air
                        })
                });
                break;
            case "from":
                navigation.navigate("SelectFlight", {
                    selected: from,
                    onChangeAir: air =>
                        this.setState({
                            from: air
                        })
                });
                break;
            default:
                break;
        }
    }

    render() {
        const { navigation } = this.props;
        const { round, from, to, loading } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Search Flight"
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
                <ScrollView style={styles.contain}>
                    <View style={styles.flightType}>
                        <Tag
                            outline={!round}
                            round
                            onPress={() => this.onSetFlightType(true)}
                            style={{ marginRight: 20 }}
                        >
                            Round Trip
                        </Tag>
                        <Tag
                            outline={round}
                            round
                            onPress={() => this.onSetFlightType(false)}
                        >
                            One Way
                        </Tag>
                    </View>
                    <FlightPlan
                        round={round}
                        fromCode={from.value}
                        toCode={to.value}
                        from={from.name}
                        to={to.name}
                        style={{ marginTop: 20 }}
                        onPressFrom={() => this.onSelectFlight("from")}
                        onPressTo={() => this.onSelectFlight("to")}
                    />
                    <BookingTime style={{ marginTop: 20 }} />
                    <FormOption style={{ marginTop: 20 }} />
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
                </ScrollView>
                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <Button
                        loading={loading}
                        full
                        onPress={() => {
                            this.setState({ loading: true }, () => {
                                setTimeout(() => {
                                    navigation.navigate("FlightResult");
                                    this.setState({ loading: false });
                                }, 500);
                            });
                        }}
                    >
                        Search
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
