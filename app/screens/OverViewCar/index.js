import React, { Component } from "react";
import { ScrollView, ImageBackground } from "react-native";
import { Text, Button } from "@components";
import styles from "./styles";
import { Images } from "@config";

export default class OverViewCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        const { navigation } = this.props;
        let { slide, loading } = this.state;
        return (
            <ImageBackground
                source={Images.car5}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
            >
                <ScrollView contentContainerStyle={styles.contain}>
                    <Text header whiteColor>
                        Sports & Luxury Cars
                    </Text>
                    <Text body1 whiteColor>
                        Extras, additional services and expert advice: Sports &
                        Luxury Cars has a solution for all questions related to
                        luxury car hire.
                    </Text>
                    <Button
                        full
                        style={{ marginTop: 20 }}
                        loading={loading}
                        onPress={() => {
                            navigation.navigate("Car");
                        }}
                    >
                        Join Now
                    </Button>
                </ScrollView>
            </ImageBackground>
        );
    }
}
