import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutStack, ContactStack, GalleryStack, HomeStack, VideoStack, WorkStack } from './StackNavigator';
import * as NavigationBar from 'expo-navigation-bar';
import { Entypo } from '@expo/vector-icons';

import appConfig from '../utils/appConfig';
import { Platform, StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// This sets the bottom tab backgroud color, the device tab
// not typical bottom tab used for App navigation.
// Platform.OS === 'android' && NavigationBar.setBackgroundColorAsync(appConfig.colors.primary);

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: appConfig.colors.primary,
                    borderTopWidth: 0
                },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#fff',
                headerShadowVisible: false,
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={() => ({
                    headerTitle: '',
                    tabBarStyle: {
                        backgroundColor: appConfig.colors.primary,
                    },
                    tabBarIcon: ({ size }) => (
                        <>
                            <Entypo name="home"
                                color={appConfig.colors.bottomNavIcons}
                                size={Platform.OS === 'ios' ? size : size - 5}
                                style={styles.navIcon}
                            />
                            <Text style={styles.iconText}>Home</Text>
                        </>
                    ),
                })}
            />
            <Tab.Screen
                name="AboutStack"
                component={AboutStack}
                options={{
                    headerTitle: 'About',
                    tabBarIcon: ({ size }) => (
                        <>
                            <Entypo
                                name="info-with-circle"
                                color={appConfig.colors.bottomNavIcons}
                                size={Platform.OS === 'ios' ? size : size - 5}
                                style={styles.navIcon}
                            />
                            <Text style={styles.iconText}>About</Text>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="WorkStack"
                component={WorkStack}
                options={{
                    headerTitle: 'Work',
                    tabBarIcon: ({ size }) => (
                        <>
                            <Entypo
                                name="code"
                                color={appConfig.colors.bottomNavIcons}
                                size={Platform.OS === 'ios' ? size : size - 5}
                                style={styles.navIcon}
                            />
                            <Text style={styles.iconText}>Work/CV</Text>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="GalleryStack"
                component={GalleryStack}
                options={{
                    tabBarIcon: ({ size }) => (
                        <>
                            <Entypo
                                name="images"
                                color={appConfig.colors.bottomNavIcons}
                                size={Platform.OS === 'ios' ? size : size - 5}
                                style={styles.navIcon}
                            />
                            <Text style={styles.iconText}>Gallery</Text>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="VideoStack"
                component={VideoStack}
                options={{
                    tabBarIcon: ({ size }) => (
                        <>
                            <Entypo
                                name="video-camera"
                                color={appConfig.colors.bottomNavIcons}
                                size={Platform.OS === 'ios' ? size : size - 5}
                                style={styles.navIcon}
                            />
                            <Text style={styles.iconText}>Video</Text>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="ContactStack"
                component={ContactStack}
                options={{
                    tabBarIcon: ({ size }) => (
                        <>
                            <Entypo
                                name="email"
                                color={appConfig.colors.bottomNavIcons}
                                size={Platform.OS === 'ios' ? size : size - 5}
                                style={styles.navIcon}
                            />
                            <Text style={styles.iconText}>Contact</Text>
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    navIcon: {
        marginTop: Platform.OS === 'ios' ? 10 : 1
    },
    iconText: {
        color: appConfig.colors.textColor,
        fontSize: 12
    }
});

export default TabNavigator;
