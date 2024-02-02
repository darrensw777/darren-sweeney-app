import React, { ReactElement } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IconTitle from './IconTitle';
import { NavigationProp } from '@react-navigation/native';

interface ColorBlockLinkProps {
    image: ImageSourcePropType;
    color1: string;
    color2: string;
    iconName: string;
    title: string;
    screenToNavigateTo: string,
    navigation: NavigationProp<any, any>;
}
const ColorBlockLink = ({ image, color1, color2, iconName, title, screenToNavigateTo, navigation }: ColorBlockLinkProps): ReactElement => {

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate(screenToNavigateTo)}
        >

            <LinearGradient
                style={styles.colorBlock}
                colors={[color1, color2]}
                locations={[0.5, 0.5]}
            >
                <Image
                    source={image}
                    style={styles.blockImage}
                />
                <IconTitle
                    title={title}
                    iconName={iconName}
                />
            </LinearGradient>

        </Pressable>
    );
};

const iconDimensions = 260;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    colorBlock: {
        width: '90%',
        height: 400,
        alignSelf: 'center',
    },
    blockImage: {
        width: iconDimensions,
        height: iconDimensions,
        borderRadius: iconDimensions / 2,
        overflow: "hidden",
        borderWidth: 6,
        borderColor: "white",
        alignSelf: 'center',
        marginTop: 40
    },
});

export default ColorBlockLink;
