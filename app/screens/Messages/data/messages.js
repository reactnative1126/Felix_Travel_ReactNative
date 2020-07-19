import * as Utils from "@utils";
import { Images } from "@config";
module.exports = [
    {
        _id: Math.round(Math.random() * 1000000),
        text: "Yes, Wellcome!",
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: "Developer",
            avatar: Images.profile2
        },
        sent: true,
        received: true
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: "Are you building a chat app?",
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 2,
            name: "Paul",
            avatar: Images.profile2
        }
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: "Hi everyone :)",
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        system: true
    }
];
