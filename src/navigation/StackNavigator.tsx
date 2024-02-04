import React, { ReactElement } from 'react';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';

import {
    HomeScreen,
    AboutScreen,
    ContactScreen,
    GalleryScreen,
    VideoScreen,
    WorkScreen
} from '../screens';

import appConfig from '../utils/appConfig';

const Stack = createStackNavigator();

const headerOptions = {
    headerMode: 'screen',
    headerShown: true,
    headerTintColor: '#333',
    headerShadowVisible: false, // removes header bottom border
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'RobotoSlab',
    },
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: appConfig.colors.primary,
    },
    // headerTitle: 'Darren Sweeney',
} as StackNavigationOptions;

export const HomeStack = (): ReactElement => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Darren Sweeney',
                    ...headerOptions,
                }}
            />
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerTitle: 'About',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                        fontFamily: 'RobotoSlab',
                    },
                    ...headerOptions,
                }}
            />
            <Stack.Screen
                name="Work"
                component={WorkScreen}
                options={{
                    title: 'Work',
                    ...headerOptions,
                }}
            />
            <Stack.Screen
                name="Gallery"
                component={GalleryScreen}
                options={{
                    title: 'Gallery',
                    ...headerOptions,
                }}
            />
            <Stack.Screen
                name="Video"
                component={VideoScreen}
                options={{
                    title: 'Video',
                    ...headerOptions,
                }}
            />
            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    headerTitle: 'Contact',
                    ...headerOptions,
                }}
            />
        </Stack.Navigator>
    );
};

// export const AboutStack = (): ReactElement => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="About"
//                 component={AboutScreen}
//                 options={{
//                     title: 'About',
//                     headerShown: false,
//                     ...headerOptions,
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };

// export const WorkStack = (): ReactElement => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Work"
//                 component={WorkScreen}
//                 options={{
//                     title: 'Work',
//                     ...headerOptions,
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };

// export const GalleryStack = (): ReactElement => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Gallery"
//                 component={GalleryScreen}
//                 options={{
//                     title: 'Gallery',
//                     ...headerOptions,
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };

// export const VideoStack = (): ReactElement => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Video"
//                 component={VideoScreen}
//                 options={{
//                     title: 'Video',
//                     ...headerOptions,
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };

// export const ContactStack = (): ReactElement => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Contact"
//                 component={ContactScreen}
//                 options={{
//                     title: 'Contact',
//                     ...headerOptions,
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };
