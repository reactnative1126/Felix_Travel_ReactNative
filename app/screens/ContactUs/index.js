import React, { Component } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Button } from "@components";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./styles";

export default class ContactUs extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            name: "",
            email: "",
            message: "",
            success: {
                name: true,
                email: true,
                message: true
            },
            loading: false,
            region: {
                latitude: 10.73902,
                longitude: 106.709938,
                latitudeDelta: 0.009,
                longitudeDelta: 0.004
            }
        };
    }

    /**
     * @description Called when user sumitted form
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     */
    onSubmit() {
        const { navigation } = this.props;
        let { success, name, email, message } = this.state;
        if (name == "" || email == "" || message == "") {
            this.setState({
                success: {
                    ...success,
                    email: email != "" ? true : false,
                    name: name != "" ? true : false,
                    message: message != "" ? true : false
                }
            });
        } else {
            this.setState(
                {
                    loading: true
                },
                () => {
                    setTimeout(() => {
                        this.setState({
                            loading: false
                        });
                        navigation.goBack();
                    }, 500);
                }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        let { name, email, message, success, loading } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Contact Us"
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
                        <View style={{ height: 180, width: "100%" }}>
                            <MapView
                                provider={PROVIDER_GOOGLE}
                                style={styles.map}
                                region={this.state.region}
                                onRegionChange={() => {}}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: 10.73902,
                                        longitude: 106.709938
                                    }}
                                />
                            </MapView>
                        </View>
                        <Text headline style={{ marginVertical: 10 }}>
                            Contact Details
                        </Text>
                        <TextInput
                            style={[BaseStyle.textInput]}
                            onChangeText={text => this.setState({ name: text })}
                            autoCorrect={false}
                            placeholder="Name"
                            placeholderTextColor={
                                success.name
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={name}
                        />
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text =>
                                this.setState({ email: text })
                            }
                            autoCorrect={false}
                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor={
                                success.email
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={email}
                        />
                        <TextInput
                            style={[
                                BaseStyle.textInput,
                                { marginTop: 10, height: 120 }
                            ]}
                            onChangeText={text =>
                                this.setState({ message: text })
                            }
                            textAlignVertical="top"
                            multiline={true}
                            autoCorrect={false}
                            placeholder="Message"
                            placeholderTextColor={
                                success.message
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={message}
                        />
                    </View>
                </ScrollView>
                <View style={{ padding: 20 }}>
                    <Button
                        loading={this.state.loading}
                        full
                        onPress={() => {
                            this.onSubmit();
                        }}
                    >
                        Send
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
