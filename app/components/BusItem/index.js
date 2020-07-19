import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import { Text, Icon } from "@components";
import { BaseColor, Images } from "@config";
import styles from "./styles";

export default class BusItem extends Component {
    render() {
        const {
            style,
            from,
            to,
            totalHour,
            route,
            image,
            brand,
            type,
            price,
            onPress
        } = this.props;
        return (
            <TouchableOpacity style={[styles.content, style]} onPress={onPress}>
                <View style={styles.contentTop}>
                    <View style={{ flex: 1 }}>
                        <Text title2>{from.hour}</Text>
                        <Text footnote light>
                            {from.value}
                        </Text>
                    </View>
                    <View style={{ flex: 1.5, alignItems: "center" }}>
                        <Text caption1 light>
                            {totalHour} Hours
                        </Text>
                        <Icon
                            name="long-arrow-alt-right"
                            color={BaseColor.primaryColor}
                            size={24}
                            solid
                        />
                        <Text caption1 light>
                            {route}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text title2>{to.hour}</Text>
                        <Text footnote light numberOfLines={1}>
                            {to.value}
                        </Text>
                    </View>
                </View>
                <View style={styles.contentBottom}>
                    <View style={styles.bottomLeft}>
                        <Icon
                            name="bus"
                            color={BaseColor.grayColor}
                            size={24}
                            solid
                        />
                        <View style={{ marginLeft: 5 }}>
                            <Text caption1 semibold accentColor>
                                {brand}
                            </Text>
                            <Text caption2 light>
                                {type}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                        <Text title3 semibold primaryColor>
                            {price}
                        </Text>
                        <Text caption1 light style={{ marginLeft: 5 }}>
                            Seat
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

BusItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    from: PropTypes.object,
    to: PropTypes.object,
    totalHour: PropTypes.number,
    brand: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string,
    route: PropTypes.string,
    onPress: PropTypes.func
};

BusItem.defaultProps = {
    style: {},
    from: {
        name: "",
        value: "",
        hour: ""
    },
    to: {
        name: "",
        value: "",
        hour: ""
    },
    totalHour: 0,
    brand: "",
    type: "",
    price: "",
    route: "",
    onPress: () => {}
};
