import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Icon, StarRating, Tag, ProfileDetail } from "@components";
import { BaseStyle, BaseColor } from "@config";
import PropTypes from "prop-types";
import styles from "./styles";
export default class TourItem extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Display Tour item as block
     */
    renderBlock() {
        const {
            isRTL,
            style,
            image,
            name,
            price,
            rate,
            rateCount,
            author,
            onPress,
            onPressUser,
            onPressBookNow
        } = this.props;
        return (
            <View style={style}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image source={image} style={styles.blockImage} />
                    <View style={!isRTL ? styles.blockPriceContent : styles.blockPriceContentRTL}>
                        <Text title3 whiteColor semibold>
                            {price}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={[BaseStyle.bodyPaddingDefault, !isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}, { marginTop: 5 }]}>
                    <ProfileDetail
                        isRTL={isRTL}
                        image={author.image}
                        textFirst={name}
                        textSecond={author.name}
                        point={author.point}
                        icon={false}
                        style={{ marginTop: 10 }}
                        onPress={onPressUser}
                    />
                    <View style={styles.blockDetailContent}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <StarRating
                                disabled={true}
                                starSize={10}
                                maxStars={5}
                                rating={rate}
                                selectedStar={rating => {}}
                                fullStarColor={BaseColor.yellowColor}
                            />

                            <Text
                                caption1
                                grayColor
                                semibold
                                style={[!isRTL ? {transform: [{scaleX: 1}], textAlign: 'left', marginLeft: 10, marginRight: 3 }: {transform: [{scaleX: -1}], textAlign: 'right',  marginLeft: 3, marginRight: 10}]}
                            >
                                Rating
                            </Text>
                            <Text caption1 primaryColor semibold
                                style={[!isRTL ? {transform: [{scaleX: 1}], textAlign: 'left'}: {transform: [{scaleX: -1}], textAlign: 'right'}]}
                            >
                                {rateCount}
                            </Text>
                        </View>
                        <Tag
                            outline
                            round
                            style={[!isRTL ? {transform: [{scaleX: 1}]} : {transform: [{scaleX: -1}]}, { height: 30 }]}
                            onPress={onPressBookNow}
                        >
                            Book Now
                        </Tag>
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Display Tour item as list
     */
    renderList() {
        const {
            isRTL,
            style,
            image,
            name,
            location,
            price,
            rate,
            startTime,
            rateCount,
            services,
            onPress,
            onPressBookNow
        } = this.props;
        return (
            <View style={[!isRTL ? styles.listContent : styles.listContentRTL, style]}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image source={image} style={styles.listImage} />
                </TouchableOpacity>
                <View style={styles.listContentRight}>
                    <Text headline semibold style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}>
                        {name}
                    </Text>
                    <View
                        style={!isRTL ? { flexDirection: "row", marginTop: 5 } : { flexDirection: "row-reverse", marginTop: 5 }}
                    >
                        <View style={!isRTL ? styles.listContentIcon : styles.listContentIconRTL}>
                            <Icon
                                name="calendar-alt"
                                color={BaseColor.lightPrimaryColor}
                                size={10}
                                solid
                            />
                            <Text
                                caption1
                                grayColor
                                style={!isRTL ? { textAlign: 'left', marginLeft: 3 } : { textAlign: 'right', marginRight: 3 }}
                            >
                                {startTime}
                            </Text>
                        </View>
                        <View style={!isRTL ? styles.listContentIcon : styles.listContentIconRTL}>
                            <Icon
                                name="map-marker-alt"
                                color={BaseColor.lightPrimaryColor}
                                size={10}
                            />
                            <Text
                                caption1
                                grayColor
                                style={!isRTL ? { textAlign: 'left', marginLeft: 3 } : { textAlign: 'right', marginRight: 3 }}
                            >
                                {location}
                            </Text>
                        </View>
                    </View>
                    <View style={!isRTL ? styles.listContentRate : styles.listContentRateRTL }>
                        <StarRating
                            disabled={true}
                            starSize={10}
                            maxStars={5}
                            rating={rate}
                            selectedStar={rating => {}}
                            fullStarColor={BaseColor.yellowColor}
                        />
                        <Text
                            caption1
                            grayColor
                            semibold
                            style={!isRTL ? { textAlign: 'left', marginLeft: 10, marginRight: 3 } : { textAlign: 'right', marginLeft: 3, marginRight: 10}}
                        >
                            Rating
                        </Text>
                        <Text caption1 primaryColor semibold
                            style={!isRTL ? { textAlign: 'left'} : { textAlign: 'right'}}
                        >
                            {rateCount}
                        </Text>
                    </View>
                    <View style={!isRTL ? styles.listContentService : styles.listContentServiceRTL}>
                        {services.map((item, index) => {
                            return (
                                <View
                                    style={!isRTL ? styles.tag : styles.tagRTL}
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
                                        style={!isRTL ? { marginLeft: 5 } : { marginRight: 5 }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            marginTop: 5
                        }}
                    >
                        <View style={!isRTL ? styles.listRowPrice : styles.listRowPriceRTL}>
                            <Text title3 primaryColor semibold
                                style={!isRTL ? {textAlign: 'left'} : {textAlign: 'right'}}
                            >
                                {price}
                            </Text>
                            <Tag
                                outline
                                round
                                style={{ height: 30 }}
                                onPress={onPressBookNow}
                            >
                                Book Now
                            </Tag>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Display Tour item as grid
     */
    renderGrid() {
        const {
            isRTL,
            style,
            image,
            name,
            location,
            price,
            travelTime,
            onPress
        } = this.props;
        return (
            <View style={[styles.girdContent, style]}>
                <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                    <Image source={image} style={styles.girdImage} />
                </TouchableOpacity>
                <View style={!isRTL ? styles.girdContentLocation : styles.girdContentLocationRTL }>
                    <Icon
                        name="map-marker-alt"
                        color={BaseColor.primaryColor}
                        size={10}
                    />
                    <Text
                        caption2
                        grayColor
                        style={!isRTL ? {textAlign: 'left', marginLeft: 3} : {textAlign: 'right', marginRight: 3} }
                    >
                        {location}
                    </Text>
                </View>
                <Text
                    body2
                    semibold
                    style={!isRTL ? {textAlign: 'left', marginTop: 5} : {textAlign: 'right', marginTop: 5} }
                    numberOfLines={1}
                >
                    {name}
                </Text>
                <View style={!isRTL ? styles.girdContentRate : styles.girdContentRateRTL}>
                    <Text caption1 accentColor>
                        {travelTime}
                    </Text>
                </View>
                <Text
                    title3
                    primaryColor
                    semibold
                    style={!isRTL ? {textAlign: 'left', marginTop: 5} : {textAlign: 'right', marginTop: 5} }
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

TourItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    list: PropTypes.bool,
    block: PropTypes.bool,
    grid: PropTypes.bool,
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
    startTime: PropTypes.string,
    price: PropTypes.string,
    travelTime: PropTypes.string,
    rateCount: PropTypes.string,
    rate: PropTypes.number,
    numReviews: PropTypes.number,
    author: PropTypes.object,
    services: PropTypes.array,
    onPress: PropTypes.func,
    onPressBookNow: PropTypes.func,
    onPressUser: PropTypes.func
};

TourItem.defaultProps = {
    style: {},
    list: true,
    block: false,
    grid: false,
    image: "",
    name: "",
    location: "",
    price: "",
    rate: 0,
    rateCount: "",
    numReviews: 0,
    travelTime: "",
    startTime: "",
    author: {},
    services: [],
    onPress: () => {},
    onPressBookNow: () => {},
    onPressUser: () => {}
};
