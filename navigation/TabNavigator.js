import React from "react"
import {CreateBottomNavigator} from '@react-navigation/bottom-tabs';
import CreatePost from "../screens/createPost";
import Feed from "../screens/Feed";

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                TabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused
                        ? "book"
                        : "book-outline";
                    } else if (route.name === "CreatePost") {
                        iconName = focused ? "create" : "create-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: "Tomato",
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name = "Feed" component={Feed} />
            <Tab.Screen name = "CriarPost" component={CreatePost} />
        </Tab.Navigator>
    );
}