import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Text, Icon } from "@components";
import { BaseColor } from "@config";
import styles from "./styles";

export default class RateDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { style, point, maxPoint, totalRating, data } = this.props;
        return (
            <View style={[styles.contain, style]}>
                <View style={styles.contentLeft}>
                    <Text primaryColor style={{ fontSize: 48 }}>
                        {point}
                    </Text>
                    <Text subhead grayColor semibold>
                        out of {maxPoint}
                    </Text>
                </View>
                <View style={styles.containRight}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.starLeft}>
                            <View style={styles.lineStar}>
                                {[1, 2, 3, 4, 5].map((icon, index) => {
                                    return (
                                        <Icon
                                            key={`star5` + index}
                                            name="star"
                                            color={BaseColor.grayColor}
                                            solid
                                            size={8}
                                        />
                                    );
                                })}
                            </View>
                            <View style={styles.lineStar}>
                                {[1, 2, 3, 4].map((icon, index) => {
                                    return (
                                        <Icon
                                            key={`star4` + index}
                                            name="star"
                                            color={BaseColor.grayColor}
                                            solid
                                            size={8}
                                        />
                                    );
                                })}
                            </View>
                            <View style={styles.lineStar}>
                                {[1, 2, 3].map((icon, index) => {
                                    return (
                                        <Icon
                                            key={`star3` + index}
                                            name="star"
                                            color={BaseColor.grayColor}
                                            solid
                                            size={8}
                                        />
                                    );
                                })}
                            </View>
                            <View style={styles.lineStar}>
                                {[1, 2].map((icon, index) => {
                                    return (
                                        <Icon
                                            key={`star2` + index}
                                            name="star"
                                            color={BaseColor.grayColor}
                                            solid
                                            size={8}
                                        />
                                    );
                                })}
                            </View>
                            <View style={styles.lineStar}>
                                <Icon
                                    name="star"
                                    color={BaseColor.grayColor}
                                    solid
                                    size={8}
                                />
                            </View>
                        </View>
                        <View style={styles.containStatus}>
                            {data.map((percent, index) => {
                                return (
                                    <View
                                        style={styles.contentLineStatus}
                                        key={"status" + index}
                                    >
                                        <View style={styles.lineStatusGray} />
                                        <View
                                            style={[
                                                styles.lineStatusPrimary,
                                                { width: percent }
                                            ]}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                    <Text body2 semibold>
                        {totalRating} Ratings
                    </Text>
                </View>
            </View>
        );
    }
}

RateDetail.propTypes = {
    style: PropTypes.object,
    point: PropTypes.number,
    maxPoint: PropTypes.number,
    totalRating: PropTypes.number,
    data: PropTypes.array
};

RateDetail.defaultProps = {
    style: {},
    point: 0,
    maxPoint: 5,
    totalRating: 0,
    data: ["0%", "5%", "35%", "40%", "10%"]
};
