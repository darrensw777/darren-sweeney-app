import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import appConfig from '../utils/appConfig';
import { BodyText, ColorBlockLink, HeaderText, PageBanner } from '../components';

const HomeScreen = ({ navigation }: any): ReactElement => {

    const ColorBlocks = () => appConfig.homepageColorBlocks.map((colorBlock: any) => {
        return (
            <ColorBlockLink
                key={colorBlock.title}
                image={colorBlock.image}
                color1={colorBlock.color1}
                color2={colorBlock.color2}
                iconName={colorBlock.iconName}
                title={colorBlock.title}
                screenToNavigateTo={colorBlock.screenToNavigateTo}
                navigation={navigation}
            />
        );
    });

    return (
        <ScrollView style={{ backgroundColor: appConfig.colors.secondary }}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.home.title}
                pageSubTitle={appConfig.pageHeaders.home.subTitle}
            />
            <ColorBlocks />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;
