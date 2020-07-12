import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icon, Text, Button } from "@components";
import PropTypes from "prop-types";
import { BaseColor } from "@config";
import Modal from "react-native-modal";

export default class FilterSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOption: props.sortOption,
            sortSelected: props.sortSelected,
            modalVisible: false
        };
    }

    componentDidMount() {
        const { sortOption, sortSelected } = this.state;
        this.setState({
            sortOption: sortOption.map(item => {
                return {
                    ...item,
                    checked: item.value == sortSelected.value
                };
            })
        });
    }

    onSelectFilter(selected) {
        const { sortOption } = this.state;
        this.setState({
            sortOption: sortOption.map(item => {
                return {
                    ...item,
                    checked: item.value == selected.value
                };
            })
        });
    }

    onOpenSort() {
        const { sortOption, sortSelected } = this.state;
        this.setState({
            modalVisible: true,
            sortOption: sortOption.map(item => {
                return {
                    ...item,
                    checked: item.value == sortSelected.value
                };
            })
        });
    }

    onApply() {
        const { sortOption } = this.state;
        const { onChangeSort } = this.props;
        const sorted = sortOption.filter(item => item.checked);
        if (sorted.length > 0) {
            this.setState({
                sortSelected: sorted[0],
                modalVisible: false
            });
            onChangeSort(sorted[0]);
        }
    }

    iconModeView(modeView) {
        switch (modeView) {
            case "block":
                return "square";
            case "grid":
                return "th-large";
            case "list":
                return "th-list";
            default:
                return "th-list";
        }
    }

    render() {
        const {
            style,
            modeView,
            onFilter,
            onChangeView,
            labelCustom
        } = this.props;
        const { sortOption, modalVisible, sortSelected } = this.state;
        const customAction =
            modeView != "" ? (
                <TouchableOpacity
                    onPress={onChangeView}
                    style={{
                        width: 30,
                        alignItems: "flex-end"
                    }}
                >
                    <Icon
                        name={this.iconModeView(modeView)}
                        size={16}
                        color={BaseColor.grayColor}
                        solid
                    />
                </TouchableOpacity>
            ) : (
                <Text headline grayColor>
                    {labelCustom}
                </Text>
            );
        return (
            <View style={[styles.contain, style]}>
                <Modal
                    isVisible={modalVisible}
                    onSwipeComplete={() => {
                        this.setState({
                            modalVisible: false,
                            sortOption: this.props.sortOption
                        });
                    }}
                    swipeDirection={["down"]}
                    style={styles.bottomModal}
                >
                    <View style={styles.contentFilterBottom}>
                        <View style={styles.contentSwipeDown}>
                            <View style={styles.lineSwipeDown} />
                        </View>
                        {sortOption.map((item, index) => (
                            <TouchableOpacity
                                style={styles.contentActionModalBottom}
                                key={item.value}
                                onPress={() => this.onSelectFilter(item)}
                            >
                                <Text
                                    body2
                                    semibold
                                    primaryColor={item.checked}
                                >
                                    {item.text}
                                </Text>
                                {item.checked && (
                                    <Icon
                                        name="check"
                                        size={14}
                                        color={BaseColor.primaryColor}
                                    />
                                )}
                            </TouchableOpacity>
                        ))}
                        <Button
                            full
                            style={{ marginTop: 10, marginBottom: 20 }}
                            onPress={() => this.onApply()}
                        >
                            Apply
                        </Button>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => this.onOpenSort()}
                >
                    <Icon
                        name={sortSelected.icon}
                        size={16}
                        color={BaseColor.grayColor}
                        solid
                    />
                    <Text headline grayColor style={{ marginLeft: 5 }}>
                        {sortSelected.text}
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {customAction}
                    <View style={styles.line} />
                    <TouchableOpacity
                        onPress={onFilter}
                        style={styles.contentFilter}
                    >
                        <Icon
                            name="filter"
                            size={16}
                            color={BaseColor.grayColor}
                            solid
                        />
                        <Text headline grayColor style={{ marginLeft: 5 }}>
                            Filter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

FilterSort.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    sortOption: PropTypes.array,
    sortSelected: PropTypes.object,
    modeView: PropTypes.string,
    labelCustom: PropTypes.string,
    onChangeSort: PropTypes.func,
    onChangeView: PropTypes.func,
    onFilter: PropTypes.func
};

FilterSort.defaultProps = {
    style: {},
    sortOption: [
        {
            value: "low_price",
            icon: "sort-amount-up",
            text: "Lowest Price"
        },
        {
            value: "hight_price",
            icon: "sort-amount-down",
            text: "Hightest Price"
        },
        {
            value: "high_rate",
            icon: "sort-amount-up",
            text: "Hightest Rating"
        },
        {
            value: "popular",
            icon: "sort-amount-down",
            text: "Popularity"
        }
    ],
    sortSelected: {
        value: "high_rate",
        icon: "sort-amount-up",
        text: "Hightest Rating"
    },
    modeView: "",
    labelCustom: "",
    onChangeSort: () => {},
    onChangeView: () => {},
    onFilter: () => {}
};
