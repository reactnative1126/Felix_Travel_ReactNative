import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, Switch } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthActions } from "@actions";
import { BaseStyle, BaseColor } from "@config";
import {
    Header,
    SafeAreaView,
    Icon,
    Text,
    Button,
    ProfileDetail,
    ProfilePerformance
} from "@components";
import styles from "./styles";

// Load sample data
import { UserData } from "@data";

class Profile extends Component {
    constructor(props) {
        super();
        this.state = {
            reminders: false,
            loading: false,
            userData: UserData[0]
        };
    }

    /**
     * @description Simple logout with Redux
     * @author Passion UI <passionui.com>
     * @date 2019-08-03
     */
    onLogOut() {
        this.setState(
            {
                loading: true
            },
            () => {
                this.props.actions.authentication(false, response => {
                    if (response.success) {
                        this.props.navigation.navigate("Loading");
                    } else {
                        this.setState({ loading: false });
                    }
                });
            }
        );
    }

    /**
     * @description Call when reminder option switch on/off
     */
    toggleSwitch = value => {
        this.setState({ reminders: value });
    };

    render() {
        const { navigation } = this.props;
        const { userData, loading } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Profile"
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
                        return (
                            <Icon
                                name="bell"
                                size={24}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    renderRightSecond={() => {
                        return (
                            <Icon
                                name="envelope"
                                size={24}
                                color={BaseColor.primaryColor}
                            />
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {
                        navigation.navigate("Notification");
                    }}
                    onPressRightSecond={() => {
                        navigation.navigate("Messenger");
                    }}
                />
                <ScrollView>
                    <View style={styles.contain}>
                        <ProfileDetail
                            image={userData.image}
                            textFirst={userData.name}
                            point={userData.point}
                            textSecond={userData.address}
                            textThird={userData.id}
                            onPress={() =>
                                navigation.navigate("ProfileExanple")
                            }
                        />
                        <ProfilePerformance
                            data={userData.performance}
                            style={{ marginTop: 20, marginBottom: 20 }}
                        />
                        <View style={{ width: "100%" }}>
                            <TouchableOpacity
                                style={styles.profileItem}
                                onPress={() => {
                                    navigation.navigate("ProfileEdit");
                                }}
                            >
                                <Text body1>Edit Profile</Text>
                                <Icon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{ marginLeft: 5 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.profileItem}
                                onPress={() => {
                                    navigation.navigate("ChangePassword");
                                }}
                            >
                                <Text body1>Change Password</Text>
                                <Icon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{ marginLeft: 5 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.profileItem}
                                onPress={() => {
                                    navigation.navigate("ChangeLanguage");
                                }}
                            >
                                <Text body1>Language</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text body1 grayColor>
                                        English
                                    </Text>
                                    <Icon
                                        name="angle-right"
                                        size={18}
                                        color={BaseColor.primaryColor}
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.profileItem}
                                onPress={() => {
                                    navigation.navigate("Currency");
                                }}
                            >
                                <Text body1>Currency</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text body1 grayColor>
                                        USD
                                    </Text>
                                    <Icon
                                        name="angle-right"
                                        size={18}
                                        color={BaseColor.primaryColor}
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.profileItem}>
                                <Text body1>Reminders</Text>
                                <Switch
                                    name="angle-right"
                                    size={18}
                                    onValueChange={this.toggleSwitch}
                                    value={this.state.reminders}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.profileItem}
                                onPress={() => {
                                    navigation.navigate("BookingHistory");
                                }}
                            >
                                <Text body1>Booking History</Text>
                                <Icon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{ marginLeft: 5 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.profileItem}
                                onPress={() => {
                                    navigation.navigate("Coupons");
                                }}
                            >
                                <Text body1>Coupons</Text>
                                <Icon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{ marginLeft: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ padding: 20 }}>
                    <Button
                        full
                        loading={loading}
                        onPress={() => this.onLogOut()}
                    >
                        Sign Out
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
