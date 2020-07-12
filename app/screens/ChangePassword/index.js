import React, { Component } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Button } from "@components";
import styles from "./styles";

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            repassword: "",
            loading: false
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Change Password"
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
                        <View style={styles.contentTitle}>
                            <Text headline semibold>
                                Password
                            </Text>
                        </View>
                        <TextInput
                            style={BaseStyle.textInput}
                            onChangeText={text =>
                                this.setState({ password: text })
                            }
                            autoCorrect={false}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor={BaseColor.grayColor}
                            value={this.state.password}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <View style={styles.contentTitle}>
                            <Text headline semibold>
                                Re-Password
                            </Text>
                        </View>
                        <TextInput
                            style={BaseStyle.textInput}
                            onChangeText={text =>
                                this.setState({ repassword: text })
                            }
                            autoCorrect={false}
                            secureTextEntry={true}
                            placeholder="Password Confirm"
                            placeholderTextColor={BaseColor.grayColor}
                            value={this.state.repassword}
                            selectionColor={BaseColor.primaryColor}
                        />
                    </View>
                </ScrollView>
                <View style={{ padding: 20 }}>
                    <Button
                        loading={this.state.loading}
                        full
                        onPress={() => {
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
                        }}
                    >
                        Confirm
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
