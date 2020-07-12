import React, { Component } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Image, Text, Icon, StarRating, Tag } from "@components";
import { BaseColor } from "@config";
import PropTypes from "prop-types";
import styles from "./styles";
export default class HotelItem extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Display hotel item as block
     */
    renderBlock() {
        const {
            style,
            image,
            name,
            location,
            price,
            available,
            rate,
            rateStatus,
            onPress,
            onPressTag,
            services
        } = this.props;
        return (
            <View style={style}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image source={image} style={styles.blockImage} />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        title2
                        semibold
                        style={{ marginTop: 5 }}
                        numberOfLines={1}
                    >
                        {name}
                    </Text>
                    <View style={styles.blockContentAddress}>
                        <Icon
                            name="map-marker-alt"
                            color={BaseColor.lightPrimaryColor}
                            size={10}
                        />
                        <Text
                            caption1
                            grayColor
                            style={{
                                marginLeft: 3
                            }}
                            numberOfLines={1}
                        >
                            {location}
                        </Text>
                    </View>
                    <View style={styles.blockContentDetail}>
                        <View>
                            <Text title3 primaryColor semibold>
                                {price}
                            </Text>
                            <Text
                                caption1
                                accentColor
                                style={{
                                    marginTop: 3
                                }}
                                numberOfLines={1}
                            >
                                {available}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row"
                            }}
                        >
                            <Tag onPress={onPressTag} rate>
                                {rate}
                            </Tag>
                            <View
                                style={{
                                    marginLeft: 10
                                }}
                            >
                                <Text
                                    caption1
                                    grayColor
                                    semibold
                                    style={{ paddingBottom: 5 }}
                                >
                                    {rateStatus}
                                </Text>
                                <StarRating
                                    disabled={true}
                                    starSize={10}
                                    maxStars={5}
                                    rating={rate}
                                    selectedStar={rating => { }}
                                    fullStarColor={BaseColor.yellowColor}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contentService}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={services}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => (
                            <View
                                style={styles.serviceItemBlock}
                                key={"block" + index}
                            >
                                <Icon
                                    name={item.icon}
                                    size={16}
                                    color={BaseColor.accentColor}
                                />
                                <Text
                                    overline
                                    grayColor
                                    style={{ marginTop: 4 }}
                                    numberOfLines={1}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        )}
                    />
                    <TouchableOpacity
                        style={{
                            alignItems: "flex-end",
                            justifyContent: "center",
                            width: 16
                        }}
                    >
                        <Icon
                            name="angle-right"
                            size={16}
                            color={BaseColor.textSecondaryColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    /**
     * Display hotel item as list
     */
    renderList() {
        const {
            style,
            image,
            name,
            location,
            price,
            available,
            rate,
            rateCount,
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
                    <View style={styles.listContentRow}>
                        <Icon
                            name="map-marker-alt"
                            color={BaseColor.lightPrimaryColor}
                            size={10}
                        />
                        <Text
                            caption1
                            grayColor
                            style={{
                                marginLeft: 3
                            }}
                            numberOfLines={1}
                        >
                            {location}
                        </Text>
                    </View>
                    <View style={styles.listContentRow}>
                        <StarRating
                            disabled={true}
                            starSize={10}
                            maxStars={5}
                            rating={rate}
                            selectedStar={rating => { }}
                            fullStarColor={BaseColor.yellowColor}
                        />
                        <Text
                            caption1
                            grayColor
                            semibold
                            style={{
                                marginLeft: 10,
                                marginRight: 3
                            }}
                        >
                            Ratting
                        </Text>
                        <Text caption1 primaryColor semibold>
                            {rateCount}
                        </Text>
                    </View>
                    <Text
                        title3
                        primaryColor
                        semibold
                        style={{ marginTop: 5, marginBottom: 5 }}
                    >
                        {price}
                    </Text>
                    <Text caption1 semibold>
                        AVG/NIGHT
                    </Text>
                    <Text footnote accentColor style={{ marginTop: 3 }}>
                        {available}
                    </Text>
                </View>
            </View>
        );
    }

    /**
     * Display hotel item as grid
     */
    renderGrid() {
        const {
            isRTL,
            style,
            image,
            name,
            location,
            price,
            rate,
            numReviews,
            onPress
        } = this.props;
        return (
            <View style={[styles.girdContent, style]}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image source={image} style={styles.girdImage} />
                </TouchableOpacity>
                <View style={!isRTL ? styles.girdContentLocation :  styles.girdContentLocationRTL}>
                    <Icon
                        name="map-marker-alt"
                        color={BaseColor.primaryColor}
                        size={10}
                    />
                    <Text
                        caption2
                        grayColor
                        style={!isRTL ? {marginLeft: 3} : {marginRight: 3}}
                        numberOfLines={1}
                    >
                        {location}
                    </Text>
                </View>
                <Text
                    body2
                    semibold
                    style={[!isRTL ? {textAlign: 'left', marginLeft: 0} : {textAlign: 'right', marginRight: 0}, {marginTop: 5}]}
                >
                    {name}
                </Text>
                <View style={!isRTL ? styles.girdContentRate : styles.girdContentRateRTL}>
                    <StarRating
                        disabled={true}
                        starSize={10}
                        maxStars={5}
                        rating={rate}
                        selectedStar={rating => { }}
                        fullStarColor={BaseColor.yellowColor}
                    />
                    <Text caption2 grayColor>
                        {!isRTL ? '' : 'reviews'} {numReviews} {!isRTL ? 'reviews' : ''}
                    </Text>
                </View>
                <Text
                    title3
                    primaryColor
                    semibold
                    style={[!isRTL ? {textAlign: 'left', marginLeft: 0} : {textAlign: 'right', marginRight: 0}, {marginTop: 5}]}
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

HotelItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    list: PropTypes.bool,
    block: PropTypes.bool,
    grid: PropTypes.bool,
    name: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.string,
    available: PropTypes.string,
    rate: PropTypes.number,
    rateCount: PropTypes.string,
    rateStatus: PropTypes.string,
    numReviews: PropTypes.number,
    services: PropTypes.array,
    onPress: PropTypes.func,
    onPressTag: PropTypes.func
};

HotelItem.defaultProps = {
    style: {},
    image: "",
    list: true,
    block: false,
    grid: false,
    name: "",
    location: "",
    price: "",
    available: "",
    rate: 0,
    rateCount: "",
    rateStatus: "",
    numReviews: 0,
    services: [],
    onPress: () => { },
    onPressTag: () => { }
};
