import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PageBanner, UrlLinkingButton } from '../components';
import appConfig from '../utils/appConfig';

const ContactScreen = (): ReactElement => {

    return (
        <ScrollView style={styles.container}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.contact.title}
                pageSubTitle={appConfig.pageHeaders.contact.subTitle}
            />
            <UrlLinkingButton type='email' />
            <UrlLinkingButton type='telephone' />
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default ContactScreen;
