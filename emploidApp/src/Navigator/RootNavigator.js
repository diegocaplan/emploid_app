import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./StackNavigation";
import AuthStack from "./AuthStack";
import AuthNavigation from "./AuthStack";

export default function RootNavigator() {
    return (
      <NavigationContainer>
        <AuthNavigation/>
      </NavigationContainer>
    );
  }