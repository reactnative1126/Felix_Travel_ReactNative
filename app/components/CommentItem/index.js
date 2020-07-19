import React, { Component } from "react";
import { View } from "react-native";
import { Images, BaseColor } from "@config";
import { Text, Image, StarRating } from "@components";
import PropTypes from "prop-types";
import styles from "./styles";
import * as Utils from "@utils";

export default class CommentItem extends Component {
    render() {
        const { style, image, name, rate, date, title, comment } = this.props;
        return (
            <View style={[styles.contain, style]}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={styles.contentLeft}>
                        <Image source={image} style={styles.thumb} />
                        <View>
                            <Text headline semibold numberOfLines={1}>
                                {name}
                            </Text>
                            <View style={styles.contentRate}>
                                <StarRating
                                    disabled={true}
                                    starSize={14}
                                    maxStars={5}
                                    rating={rate}
                                    selectedStar={rating => {}}
                                    fullStarColor={BaseColor.yellowColor}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentRight}>
                        <Text caption2 grayColor numberOfLines={1}>
                            {date}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text subhead semibold>
                        {title}
                    </Text>
                    <Text
                        body2
                        grayColor
                        style={{
                            marginTop: 10
                        }}
                    >
                        {comment}
                    </Text>
                </View>
            </View>
        );
    }
}

CommentItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    rate: PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    comment: PropTypes.string
};

CommentItem.defaultProps = {
    style: {},
    image: Images.profile2,
    name: "",
    rate: 0,
    date: "",
    title: "",
    comment: ""
};
