import React, { ReactElement } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import appConfig from '../utils/appConfig';
import { BodyText, FullWidthImage, PageBanner } from '../components';


const WorkScreen = ({ navigation }: any): ReactElement => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.work.title}
                pageSubTitle={appConfig.pageHeaders.work.subTitle}
            />
            <Pressable
                onPress={() => navigation.navigate('Contact')}
            >
                <View style={styles.contactLink}>
                    <BodyText>Contact me</BodyText>
                </View>
            </Pressable>
            <FullWidthImage
                image={require('../../assets/images/cv/ds1.webp')}
                padding={20}
            />
            <FullWidthImage
                image={require('../../assets/images/cv/ds2.webp')}
                padding={20}
            />
            <FullWidthImage
                image={require('../../assets/images/cv/ds3.webp')}
                padding={20}
            />
            <FullWidthImage
                image={require('../../assets/images/cv/ds4.webp')}
                padding={20}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contactLink: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
});

export default WorkScreen;
