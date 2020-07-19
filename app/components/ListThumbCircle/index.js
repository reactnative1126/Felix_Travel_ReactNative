import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text } from "@components";
import styles from "./styles";
import PropTypes from "prop-types";

export default class ListThumbCircle extends Component {
    render() {
        const {
            style,
            imageStyle,
            image,
            txtLeftTitle,
            txtContent,
            txtRight,
            onPress
        } = this.props;
        return (
            <TouchableOpacity
                style={[styles.item, style]}
                onPress={onPress}
                activeOpacity={0.9}
            >
                <View style={styles.contain}>
                    <Image source={image} style={[styles.thumb, imageStyle]} />
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text headline semibold>
                                {txtLeftTitle}
                            </Text>
                            <Text
                                note
                                numberOfLines={1}
                                footnote
                                grayColor
                                style={{
                                    paddingTop: 5
                                }}
                            >
                                {txtContent}
                            </Text>
                        </View>
                        <View style={styles.right}>
                            <Text caption2 grayColor>
                                {txtRight}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

ListThumbCircle.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    imageStyle: PropTypes.object,
    image: PropTypes.node.isRequired,
    txtLeftTitle: PropTypes.string,
    txtContent: PropTypes.string,
    txtRight: PropTypes.string,
    onPress: PropTypes.func
};

ListThumbCircle.defaultProps = {
    style: {},
    imageStyle: {},
    image: "",
    txtLeftTitle: "",
    txtContent: "",
    txtRight: "",
    onPress: () => {}
};
