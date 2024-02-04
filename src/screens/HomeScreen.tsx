import React, { ReactElement, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import appConfig from '../utils/appConfig';
import { BodyText, ColorBlockLink, HeaderText, PageBanner } from '../components';
import { useScrollToTop } from '@react-navigation/native';

const HomeScreen = ({ navigation }: any): ReactElement => {

    const scrollRef = useRef(null);

    useScrollToTop(scrollRef);

    type ColorBlockProps = {
        image: string;
        color1: string;
        color2: string;
        iconName: string;
        title: string;
        screenToNavigateTo: string;
    };

    const ColorBlocks = () => appConfig.homepageColorBlocks.map((colorBlock: ColorBlockProps) => {
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
        <ScrollView style={{ backgroundColor: appConfig.colors.secondary }} ref={scrollRef}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.home.title}
                pageSubTitle={appConfig.pageHeaders.home.subTitle}
            />
            <ColorBlocks />
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
