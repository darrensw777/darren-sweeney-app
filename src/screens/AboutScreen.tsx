import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { FullWidthImage, PageBanner } from '../components';
import appConfig from '../utils/appConfig';

const AboutScreen = (): ReactElement => {

    const heroImage = require('../../assets/images/gallery/darren.webp');

    const Copy = () => appConfig.about.copy.map((copy: { copy: string; key: string; }) => {
        return <Text
            style={styles.copy}
            key={copy.key}
        >{copy.copy}</Text>;
    });

    return (
        <ScrollView style={styles.container}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.about.title}
                pageSubTitle={appConfig.pageHeaders.about.subTitle}
            />
            <FullWidthImage image={heroImage} />
            <Copy />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    copy: {
        fontSize: 16,
        color: 'white',
        padding: 12,
        lineHeight: 22
    }
});

export default AboutScreen;
