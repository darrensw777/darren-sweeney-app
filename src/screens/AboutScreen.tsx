import React, { ReactElement } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BodyText, FullWidthImage, HeaderText, Interests, PageBanner } from '../components';
import appConfig from '../utils/appConfig';
import { aboutGreeting } from '../utils/helpers';

const AboutScreen = (): ReactElement => {

    const heroImage = require('../../assets/images/gallery/darren.webp');

    const greeting = aboutGreeting({});

    const copyParas = appConfig.about.copy.map((copyItem) => {
        return <BodyText key={copyItem.key} style={styles.copy}> {copyItem.copy}</BodyText >;
    });

    return (
        <ScrollView style={styles.container}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.about.title}
                pageSubTitle={appConfig.pageHeaders.about.subTitle}
            />
            <FullWidthImage image={heroImage} padding={10} />
            <HeaderText style={styles.greeting}>
                {greeting}
            </HeaderText>
            {copyParas}
            <HeaderText style={styles.greeting}>
                {appConfig.about.interestsTitle}
            </HeaderText>
            <Interests />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    copy: { fontSize: 20, color: appConfig.colors.textColor, marginBottom: 20 },
    greeting: {
        fontSize: 24,
        marginVertical: 20
    },
    interestLists: {

    }
});

export default AboutScreen;
