import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Main from "./main";
import Loading from "@screens/Loading";

const AppNavigator = createSwitchNavigator(
    {
        Loading: Loading,
        Main: Main
    },
    {
        initialRouteName: "Loading"
    }
);

export default createAppContainer(AppNavigator);
