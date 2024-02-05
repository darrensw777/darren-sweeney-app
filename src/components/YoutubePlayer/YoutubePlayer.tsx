import React, { useState, useCallback, ReactElement, useRef } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { YoutubePlayControl } from "../../components/";

// TODO, how to stop playing if screen changes or if out of viewport

export const NUM_SECONDS_FF_OR_REWIND = 10;

const RNYoutubePlayer = ({ videoId }: { videoId: string; }): ReactElement => {
    const [playing, setPlaying] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const playerRef = useRef<YoutubeIframeRef>(null);

    const onStateChange = useCallback((state: any) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    const styles = StyleSheet.create({
        loader: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 10,
            display: !videoLoaded ? 'flex' : 'none',
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
            color: 'white',
        },
    });

    return (
        <View style={{ marginBottom: 20, borderRadius: 10, overflow: 'hidden' }}>
            <View pointerEvents="none" style={{ position: 'relative' }}>
                <YoutubePlayer
                    ref={playerRef}
                    height={300}
                    play={playing}
                    videoId={videoId}
                    onChangeState={onStateChange}
                    onReady={() => setVideoLoaded(true)}
                    webViewStyle={{ opacity: 0.99, marginBottom: 20 }}
                />
                <View
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '15%',
                        backgroundColor: 'black',
                        bottom: 72
                    }}
                />
            </View>

            <YoutubePlayControl playerRef={playerRef} playing={playing} togglePlaying={togglePlaying} />

            <ActivityIndicator
                size={'large'}
                style={styles.loader}
                animating={!videoLoaded}
            />
        </View>
    );
};

export default RNYoutubePlayer;
