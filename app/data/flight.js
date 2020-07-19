import { Images } from "@config";

const FlightData = [
    {
        id: "1",
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
        brand: "Emirates Air",
        image: Images.airline3,
        type: "Economy",
        price: "$499.99",
        route: "Non Stop"
    },
    {
        id: "2",
        from: {
            name: "Singapore",
            value: "SIN",
            image: Images.airline2,
            hour: "06:00"
        },
        to: {
            name: "United State",
            value: "USA",
            image: Images.airline1,
            hour: "19:00"
        },
        totalHour: 18.5,
        brand: "Singapore Air",
        image: Images.airline2,
        type: "Business",
        price: "$599.99",
        route: "Non Stop"
    },
    {
        id: "3",
        from: {
            name: "Singapore",
            value: "SIN",
            image: Images.airline2,
            hour: "07:00"
        },
        to: {
            name: "United State",
            value: "USA",
            image: Images.airline1,
            hour: "20:30"
        },
        totalHour: 18.5,
        brand: "United State of America",
        image: Images.airline1,
        type: "Business",
        price: "$599.99",
        route: "Non Stop"
    },
    {
        id: "2",
        from: {
            name: "Singapore",
            value: "SIN",
            image: Images.airline2,
            hour: "08:00"
        },
        to: {
            name: "United State",
            value: "USA",
            image: Images.airline1,
            hour: "21:30"
        },
        totalHour: 18.5,
        brand: "Singapore Air",
        image: Images.airline2,
        type: "Business",
        price: "$699.99",
        route: "Non Stop"
    }
];

export { FlightData };
