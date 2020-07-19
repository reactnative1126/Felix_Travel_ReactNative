import { StyleSheet } from "react-native";

/**
 * Common font family setting
 * - This font name will be used for all template
 * - Check more how to add more font family with url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const FontFamily = {
    default: "Raleway"
};

/**
 * Fontweight setting
 * - This font weight will be used for style of screens where needed
 * - Check more how to use font weight with url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const FontWeight = {
    thin: "100",
    ultraLight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    heavy: "800",
    black: "900"
};

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const Typography = StyleSheet.create({
    header: {
        fontSize: 34,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    title1: {
        fontSize: 28,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    title2: {
        fontSize: 22,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    title3: {
        fontSize: 20,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    headline: {
        fontSize: 17,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    body1: {
        fontSize: 17,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    body2: {
        fontSize: 14,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    callout: {
        fontSize: 17,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    subhead: {
        fontSize: 15,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    footnote: {
        fontSize: 13,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    caption1: {
        fontSize: 12,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    caption2: {
        fontSize: 11,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    },
    overline: {
        fontSize: 10,
        fontWeight: FontWeight.regular,
        fontFamily: FontFamily.default
    }
});
