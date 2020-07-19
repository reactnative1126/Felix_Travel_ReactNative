import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Icon } from "@components";
import { BaseColor } from "@config";
import PropTypes from "prop-types";
import styles from "./styles";
export default class RoomType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            style,
            image,
            name,
            available,
            services,
            price,
            onPress
        } = this.props;
        return (
            <View style={[styles.listContent, style]}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image source={image} style={styles.listImage} />
                </TouchableOpacity>
                <View style={styles.listContentRight}>
                    <Text headline semibold numberOfLines={1}>
                        {name}
                    </Text>
                    <View style={styles.listContentService}>
                        {services.map((item, index) => (
                            <View style={styles.tag} key={"service" + index}>
                                <Icon
                                    name={item.icon}
                                    size={12}
                                    color={BaseColor.accentColor}
                                />
                                <Text
                                    overline
                                    grayColor
                                    numberOfLines={1}
                                    style={{ marginLeft: 5 }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <Text
                        title3
                        primaryColor
                        semibold
                        style={{ paddingTop: 10, paddingBottom: 5 }}
                    >
                        {price}
                    </Text>
                    <Text
                        footnote
                        accentColor
                        numberOfLines={1}
                        style={{
                            marginTop: 5
                        }}
                    >
                        {available}
                    </Text>
                </View>
            </View>
        );
    }
}

RoomType.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    price: PropTypes.string,
    available: PropTypes.string,
    services: PropTypes.array,
    onPress: PropTypes.func
};

RoomType.defaultProps = {
    style: {},
    image: "",
    name: "",
    price: "",
    available: "",
    services: [],
    onPress: () => {}
};
