import React, { Component } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Button } from "@components";
import styles from "./styles";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            loading: false,
            success: {
                name: true,
                email: true,
                address: true
            }
        };
    }

    onSignUp() {
        const { navigation } = this.props;
        let { name, email, address, success } = this.state;

        if (name == "" || email == "" || address == "") {
            this.setState({
                success: {
                    ...success,
                    name: name != "" ? true : false,
                    email: email != "" ? true : false,
                    address: address != "" ? true : false
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
                        navigation.navigate("SignIn");
                    }, 500);
                }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        let { loading, name, email, address, success } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Sign Up"
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
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 65 }]}
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
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text =>
                                this.setState({ address: text })
                            }
                            autoCorrect={false}
                            placeholder="Address"
                            placeholderTextColor={
                                success.address
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={address}
                        />
                        <View style={{ width: "100%" }}>
                            <Button
                                full
                                style={{ marginTop: 20 }}
                                loading={loading}
                                onPress={() => this.onSignUp()}
                            >
                                Sign Up
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
