import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constatns/navigationStrings';
import * as Screens from '../Screens';
import { Image } from 'react-native';
import imagePath from '../constatns/imagePath';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigationStrings.CHATS}>



            <Tab.Screen
                name={navigationStrings.CHATS}
                component={Screens.Chats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{ tintColor: focused ? 'blue' : 'black' }} source={imagePath.icChats} />
                    }
                }}
            />

        </Tab.Navigator>

    );
}