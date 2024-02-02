import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PageBanner, YoutubePlayer } from '../components';
import appConfig from '../utils/appConfig';

const VideoScreen = (): ReactElement => {

    const youtubeIds = [
        'HJVKp-_IU5s',
        'olty-0kaGM4',
        'vdc779TdMx4',
        'Y6pK94BShR4',
        'XHkACy6rzYc',
        'DztC_wnJaLo',
        'qvJmmk_jLFg',
    ];

    const videos = youtubeIds.map((id: string) => {
        return (
            <YoutubePlayer key={id} videoId={id} />
        );
    });

    return (
        <ScrollView style={styles.container}>
            <PageBanner
                pageTitle={appConfig.pageHeaders.video.title}
                pageSubTitle={appConfig.pageHeaders.video.subTitle}
            />
            {videos}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default VideoScreen;
