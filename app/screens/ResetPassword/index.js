import React, { Component } from "react";
import { View, ScrollView, Image, TextInput } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Button } from "@components";
import styles from "./styles";

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            loading: false,
            success: {
                email: true
            }
        };
    }

    onReset() {
        const { navigation } = this.props;
        if (this.state.email == "") {
            this.setState({
                success: {
                    ...this.state.success,
                    email: false
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
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Reset Password"
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
                    <View
                        style={{
                            alignItems: "center",
                            padding: 20,
                            width: "100%"
                        }}
                    >
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 65 }]}
                            onChangeText={text =>
                                this.setState({ email: text })
                            }
                            onFocus={() => {
                                this.setState({
                                    success: {
                                        ...this.state.success,
                                        email: true
                                    }
                                });
                            }}
                            autoCorrect={false}
                            placeholder="Email Address"
                            placeholderTextColor={
                                this.state.success.email
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={this.state.email}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <View style={{ width: "100%" }}>
                            <Button
                                full
                                style={{ marginTop: 20 }}
                                onPress={() => {
                                    this.onReset();
                                }}
                                loading={this.state.loading}
                            >
                                Reset Password
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
