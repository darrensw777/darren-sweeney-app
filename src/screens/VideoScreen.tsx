import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PageBanner } from '../components';
import YoutubePlayer from '../components/YoutubePlayer/YoutubePlayer';
import appConfig from '../utils/appConfig';

const VideoScreen = (): ReactElement => {

    const youtubeIds = [
        'jXqviADvoRY',
        '9wIuPVdfwzc',
        'TQ4RCWRSDfE',
        'h7RNaw3xwYk',
        'zbEXPnzBLq4',
        '4RmWZ7RPLEg',
        'cMGa00-tSKQ',
        'YKno0_OR3Rg',
        '4ka99sMVTzY',
        '9xZp0Itn2Vg',
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
        backgroundColor: 'white'
    }
});

export default VideoScreen;
