import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import { Text, Icon } from "@components";
import { BaseColor, Images } from "@config";
import styles from "./styles";

export default class FlightItem extends Component {
    render() {
        const {
            isRTL,
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
                <View style={!isRTL ? styles.contentTop : styles.contentTopRTL}>
                    <View style={{ flex: 1 }}>
                        <Text title2 style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>{from.hour}</Text>
                        <Text footnote light style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>
                            {from.value}
                        </Text>
                    </View>
                    <View style={{ flex: 1.5, alignItems: "center" }}>
                        <Text caption1 light>
                            {!isRTL ? '' : 'Hours'} {totalHour} {!isRTL ? 'Hours': ''}
                        </Text>
                        <View style={!isRTL ? styles.contentLine : styles.contentLineRTL}>
                            <View style={styles.line} />
                            <Icon
                                name="plane"
                                color={BaseColor.dividerColor}
                                size={24}
                                solid
                                style={!isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}}
                            />
                            <View style={styles.dot} />
                        </View>
                        <Text caption1 light>
                            {route}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text title2 style={!isRTL ? {textAlign: 'right'} : {textAlign: 'left'}}>{to.hour}</Text>
                        <Text footnote light style={!isRTL ? {textAlign: 'right'} : {textAlign: 'left'}}>
                            {to.value}
                        </Text>
                    </View>
                </View>
                <View style={!isRTL ? styles.contentBottom : styles.contentBottomRTL}>
                    <View style={!isRTL ? styles.bottomLeft : styles.bottomLeftRTL}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={image}
                        />
                        <View>
                            <Text caption1 semibold accentColor style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>
                                {brand}
                            </Text>
                            <Text caption2 light style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>
                                {type}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={!isRTL ? { flexDirection: "row", alignItems: "flex-end" } : { flexDirection: "row-reverse", alignItems: "flex-end" }}
                    >
                        <Text title3 semibold primaryColor>
                            {price}
                        </Text>
                        <Text caption1 light style={!isRTL ? { marginLeft: 5 } : { marginRight: 5 }}>
                            Pax
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

FlightItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    from: PropTypes.object,
    to: PropTypes.object,
    totalHour: PropTypes.number,
    brand: PropTypes.string,
    image: PropTypes.node.isRequired,
    type: PropTypes.string,
    price: PropTypes.string,
    route: PropTypes.string,
    onPress: PropTypes.func
};

FlightItem.defaultProps = {
    style: {},
    from: {
        name: "United State",
        value: "USA",
        image: Images.airline1,
        hour: "05:00"
    },
    to: {
        name: "Singapore",
        value: "SIN",
        image: Images.airline2,
        hour: "18:00"
    },
    totalHour: 13.5,
    brand: "Vietjet",
    image: Images.airline2,
    type: "Economy",
    price: "$499,99",
    route: "Non Stop",
    onPress: () => { }
};
