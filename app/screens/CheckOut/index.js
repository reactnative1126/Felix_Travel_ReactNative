import React, { Component } from "react";
import { View, TextInput, ScrollView } from "react-native";
import { BaseStyle, BaseColor } from "@config";
import { Header, SafeAreaView, Icon, Text, Button } from "@components";
import styles from "./styles";

export default class CheckOut extends Component {
    constructor(props) {
        super(props);

        // Temp data define
        this.state = {
            bookingType: "Hotel",
            card: "",
            valid: "",
            digit: "",
            name: "",
            street: "",
            city: "",
            postCode: "",
            country: "",
            contactName: "",
            email: "",
            phone: "",
            loading: false,
            success: {
                card: true,
                valid: true,
                digit: true,
                name: true,
                street: true,
                city: true,
                postCode: true,
                country: true,
                contactName: true,
                email: true,
                phone: true
            }
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const bookingType = navigation.getParam("bookingType")
            ? navigation.getParam("bookingType")
            : "Hotel";
        this.setState({
            bookingType
        });
    }

    onCheckOut() {
        const { navigation } = this.props;
        const { bookingType } = this.state;
        this.setState(
            {
                loading: true
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        loading: false
                    });
                    switch (bookingType) {
                        case "Bus":
                            navigation.navigate("BusTicket");
                            break;
                        default:
                            navigation.navigate("BookingDetail");
                            break;
                    }
                }, 500);
            }
        );
    }

    render() {
        const { navigation } = this.props;
        const {
            success,
            card,
            valid,
            digit,
            name,
            street,
            city,
            country,
            contactName,
            postCode,
            email,
            phone,
            loading
        } = this.state;
        return (
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{ top: "always" }}
            >
                <Header
                    title="Check Out"
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
                            <Text headline primaryColor>
                                Reset
                            </Text>
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {}}
                />
                <ScrollView>
                    <View
                        style={[
                            BaseStyle.bodyPaddingDefault,
                            { marginBottom: 20 }
                        ]}
                    >
                        <Text headline semibold style={{ marginTop: 20 }}>
                            Credit Card Details
                        </Text>
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text => this.setState({ card: text })}
                            autoCorrect={false}
                            placeholder="Credit Card Number"
                            placeholderTextColor={
                                success.card
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            keyboardType="numeric"
                            value={card}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 6.5 }}>
                                <TextInput
                                    style={BaseStyle.textInput}
                                    onChangeText={text =>
                                        this.setState({ valid: text })
                                    }
                                    autoCorrect={false}
                                    placeholder="Valid Until"
                                    placeholderTextColor={
                                        success.valid
                                            ? BaseColor.grayColor
                                            : BaseColor.primaryColor
                                    }
                                    value={valid}
                                    selectionColor={BaseColor.primaryColor}
                                />
                            </View>
                            <View style={{ flex: 3.5, marginLeft: 10 }}>
                                <TextInput
                                    style={BaseStyle.textInput}
                                    onChangeText={text =>
                                        this.setState({ digit: text })
                                    }
                                    autoCorrect={false}
                                    placeholder="3-Digit CCV"
                                    placeholderTextColor={
                                        success.digit
                                            ? BaseColor.grayColor
                                            : BaseColor.primaryColor
                                    }
                                    keyboardType="numeric"
                                    value={digit}
                                    selectionColor={BaseColor.primaryColor}
                                />
                            </View>
                        </View>
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text => this.setState({ name: text })}
                            autoCorrect={false}
                            placeholder="Name on card"
                            placeholderTextColor={
                                success.name
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={name}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <Text headline semibold style={{ marginTop: 20 }}>
                            Billing Information
                        </Text>
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text =>
                                this.setState({ street: text })
                            }
                            autoCorrect={false}
                            placeholder="Street address"
                            placeholderTextColor={
                                success.street
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={street}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text => this.setState({ city: text })}
                            autoCorrect={false}
                            placeholder="City"
                            placeholderTextColor={
                                success.city
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={city}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 3.5 }}>
                                <TextInput
                                    style={BaseStyle.textInput}
                                    onChangeText={text =>
                                        this.setState({ postCode: text })
                                    }
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    placeholder="Post Code"
                                    placeholderTextColor={
                                        success.postCode
                                            ? BaseColor.grayColor
                                            : BaseColor.primaryColor
                                    }
                                    value={postCode}
                                    selectionColor={BaseColor.primaryColor}
                                />
                            </View>
                            <View style={styles.inputItem}>
                                <TextInput
                                    onChangeText={text =>
                                        this.setState({ country: text })
                                    }
                                    autoCorrect={false}
                                    placeholder="Country"
                                    placeholderTextColor={
                                        success.country
                                            ? BaseColor.grayColor
                                            : BaseColor.primaryColor
                                    }
                                    value={country}
                                    selectionColor={BaseColor.primaryColor}
                                />
                                <Icon
                                    name="chevron-down"
                                    size={12}
                                    solid
                                    color={BaseColor.grayColor}
                                />
                            </View>
                        </View>
                        <Text headline semibold style={{ marginTop: 20 }}>
                            Contact Details
                        </Text>
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text =>
                                this.setState({ contactName: text })
                            }
                            autoCorrect={false}
                            placeholder="Contact's Name"
                            placeholderTextColor={
                                success.street
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={contactName}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <TextInput
                            style={[BaseStyle.textInput, { marginTop: 10 }]}
                            onChangeText={text =>
                                this.setState({ email: text })
                            }
                            autoCorrect={false}
                            placeholder="Email"
                            placeholderTextColor={
                                success.email
                                    ? BaseColor.grayColor
                                    : BaseColor.primaryColor
                            }
                            value={email}
                            selectionColor={BaseColor.primaryColor}
                        />
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 3 }}>
                                <TextInput
                                    style={BaseStyle.textInput}
                                    onChangeText={text =>
                                        this.setState({ postCode: text })
                                    }
                                    autoCorrect={false}
                                    placeholder="Code"
                                    keyboardType="numeric"
                                    placeholderTextColor={
                                        success.postCode
                                            ? BaseColor.grayColor
                                            : BaseColor.primaryColor
                                    }
                                    value={postCode}
                                    selectionColor={BaseColor.primaryColor}
                                />
                            </View>
                            <View style={{ flex: 7, marginLeft: 10 }}>
                                <TextInput
                                    style={BaseStyle.textInput}
                                    onChangeText={text =>
                                        this.setState({ phone: text })
                                    }
                                    autoCorrect={false}
                                    placeholder="Phone Number"
                                    keyboardType="numeric"
                                    placeholderTextColor={
                                        success.phone
                                            ? BaseColor.grayColor
                                            : BaseColor.primaryColor
                                    }
                                    value={phone}
                                    selectionColor={BaseColor.primaryColor}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ margin: 20 }}>
                    <Button
                        loading={loading}
                        full
                        onPress={() => {
                            this.onCheckOut();
                        }}
                    >
                        Check Out
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}
