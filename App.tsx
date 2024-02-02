import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { SafeAreaView } from 'react-native';
import appConfig from './src/utils/appConfig';
import * as Font from "expo-font";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const App: React.FC = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const [defaultFontIsLoaded] = useFonts({ 'RobotoSlab': require('./assets/fonts/RobotoSlab.ttf') });

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    'Dosis': require('./assets/fonts/Dosis.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady || !defaultFontIsLoaded) {
        return null;
    }

    return (
        <SafeAreaView
            onLayout={onLayoutRootView}
            style={{ flex: 1, backgroundColor: appConfig.colors.primary, padding: 20 }}
        >
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
