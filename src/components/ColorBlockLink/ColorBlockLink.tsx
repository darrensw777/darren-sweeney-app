import React, { ReactElement } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import HeaderText from '../HeaderText';

interface ColorBlockLinkProps {
    image: string;
    color1: string;
    color2: string;
    iconName: keyof typeof Entypo.glyphMap;
    title: string;
    screenToNavigateTo: string,
    navigation: NavigationProp<any, any>;
}
const ColorBlockLink = ({ image, color1, color2, iconName, title, screenToNavigateTo, navigation }: ColorBlockLinkProps): ReactElement => {

    const colorBlockImages = {
        home: require('../../../assets/images/home-card-images/darren.webp'),
        about: require('../../../assets/images/home-card-images/darren.webp'),
        work: require('../../../assets/images/home-card-images/tay1.webp'),
        video: require('../../../assets/images/home-card-images/darren3.webp'),
        gallery: require('../../../assets/images/home-card-images/zt1.webp'),
        contact: require('../../../assets/images/home-card-images/darren4.jpeg'),
    };

    const blockImage = colorBlockImages[image as unknown as keyof typeof colorBlockImages];

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
                    source={blockImage}
                    style={styles.blockImage}
                />
                <View style={styles.iconTitle}>
                    <Entypo
                        name={iconName}
                        color={'white'}
                        size={40}
                        style={styles.navIcon}
                    />
                    <HeaderText style={styles.title}>{title}</HeaderText>
                </View>
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
    title: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'white'
    },
    navIcon: {
        marginRight: 10
    },
    iconTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    }
});

export default ColorBlockLink;
