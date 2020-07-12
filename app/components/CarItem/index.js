import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Icon, Image, StarRating } from "@components";
import { BaseColor } from "@config";
import PropTypes from "prop-types";
import styles from "./styles";
export default class CarItem extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Display car item as block
     */
    renderBlock() {
        const { style, image, title, name, price, per, onPress } = this.props;
        return (
            <View style={[styles.blockContain, style]}>
                <View style={[styles.blockRow, { marginBottom: 3 }]}>
                    <Text title3 primaryColor semibold>
                        {price}
                    </Text>
                    <Text headline semibold>
                        {title}
                    </Text>
                </View>
                <View style={[styles.blockRow, { marginBottom: 10 }]}>
                    <Text footnote>Per {per}</Text>
                    <Text body2>{name}</Text>
                </View>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image
                        source={image}
                        style={styles.blockImage}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * Display car item as list
     */
    renderList() {
        const {
            style,
            image,
            title,
            name,
            price,
            services,
            onPress
        } = this.props;
        return (
            <View style={{ alignItems: "center" }}>
                <View style={[styles.listContent, style]}>
                    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                        <Image
                            source={image}
                            style={styles.listImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <View style={styles.listContentRight}>
                        <Text headline semibold>
                            {title}
                        </Text>
                        <Text subhead grayColor style={{ marginVertical: 3 }}>
                            {name}
                        </Text>
                        <View style={styles.listContentService}>
                            {services.map((item, index) => {
                                return (
                                    <View
                                        style={styles.tag}
                                        key={"service" + index}
                                    >
                                        <Icon
                                            name={item.icon}
                                            color={BaseColor.accentColor}
                                            size={12}
                                            solid
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
                                );
                            })}
                        </View>
                        <View style={styles.contentPrice}>
                            <Text title3 primaryColor semibold>
                                {price}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lineBottom} />
            </View>
        );
    }

    /**
     * Display car item as grid
     */
    renderGrid() {
        const {
            style,
            image,
            title,
            name,
            price,
            rate,
            numReviews,
            onPress
        } = this.props;
        return (
            <View style={[styles.girdContent, style]}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image
                        source={image}
                        style={styles.girdImage}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <Text headline semibold style={{ marginTop: 5 }}>
                    {title}
                </Text>
                <Text subhead grayColor style={{ marginVertical: 5 }}>
                    {name}
                </Text>
                <View style={styles.girdContentRate}>
                    <View style={{ width: 60 }}>
                        <StarRating
                            disabled={true}
                            starSize={10}
                            maxStars={5}
                            rating={rate}
                            selectedStar={rating => {}}
                            fullStarColor={BaseColor.accentColor}
                        />
                    </View>
                    <Text caption2 grayColor>
                        {numReviews} reviews
                    </Text>
                </View>
                <Text
                    title3
                    primaryColor
                    semibold
                    style={{
                        marginTop: 5
                    }}
                >
                    {price}
                </Text>
            </View>
        );
    }

    render() {
        let { block, grid } = this.props;
        if (grid) return this.renderGrid();
        else if (block) return this.renderBlock();
        else return this.renderList();
    }
}

CarItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    list: PropTypes.bool,
    block: PropTypes.bool,
    grid: PropTypes.bool,
    title: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    per: PropTypes.string,
    rate: PropTypes.number,
    numReviews: PropTypes.number,
    services: PropTypes.array,
    onPress: PropTypes.func
};

CarItem.defaultProps = {
    style: {},
    list: true,
    block: false,
    grid: false,
    image: "",
    title: "",
    name: "",
    price: "",
    per: "",
    rate: 0,
    numReviews: 0,
    services: [],
    onPress: () => {}
};
