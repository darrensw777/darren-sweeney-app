import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { GalleryTabs, PageBanner } from '../components';
import appConfig from '../utils/appConfig';

const GalleryScreen = (): ReactElement => {

    return (
        <View style={styles.container}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.gallery.title}
                pageSubTitle={appConfig.pageHeaders.gallery.subTitle}
            />
            <GalleryTabs />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default GalleryScreen;
