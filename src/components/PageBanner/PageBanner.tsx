import React, { ReactElement } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderText from '../HeaderText';
import BodyText from '../BodyText';
import appConfig from '../../utils/appConfig';

interface PageBannerProps {
    pageTitle: string;
    pageSubTitle: string;
}

const PageBanner = ({ pageTitle, pageSubTitle }: PageBannerProps): ReactElement => {
    return (
        <>
            <View style={styles.banner}>
                <HeaderText style={styles.bannerText}>{pageTitle}</HeaderText>
            </View>
            <View style={styles.subTitle}>
                {pageSubTitle ? <BodyText style={styles.bannerTextSubTitle}>{pageSubTitle}</BodyText> : null}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: 'white',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 4,
        borderTopColor: appConfig.colors.border,
        borderBottomWidth: 4,
        borderBottomColor: appConfig.colors.border,
        marginBottom: 20
    },
    bannerText: {
        fontSize: 24,
        color: appConfig.colors.textColor,
    },
    bannerTextSubTitle: {
        fontSize: 20,
        color: appConfig.colors.textColor,
    },
    subTitle: {
        borderLeftWidth: 4,
        borderLeftColor: appConfig.colors.border,
        paddingLeft: 10,
        marginBottom: 20
    }
});

export default PageBanner;
