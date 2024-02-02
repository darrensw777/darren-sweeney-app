import React, { useState, useCallback } from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import appConfig from "../../utils/appConfig";

const RNYoutubePlayer = ({ videoId }: { videoId: string; }) => {
    const [playing, setPlaying] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

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
        button: {
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: appConfig.colors.secondary,
            padding: 10,
            height: 80,
            marginTop: -110 // this is only here to hide youtube controls
        },
        buttonText: {
            color: 'white',
            fontSize: 18
        }
    });

    return (
        <View>
            <View pointerEvents="none" style={{ position: 'relative' }}>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={videoId}
                    onChangeState={onStateChange}
                    onReady={() => setVideoLoaded(true)}
                    webViewStyle={{ opacity: 0.99 }}
                />
                <View
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '15%',
                        backgroundColor: 'black',
                        bottom: 60
                    }}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={togglePlaying}
            >
                <Text style={styles.buttonText}>{playing ? "PAUSE" : "PLAY"}</Text>
            </TouchableOpacity>
            <ActivityIndicator
                size={'large'}
                style={styles.loader}
                animating={!videoLoaded}
            />
        </View>
    );
};

export default RNYoutubePlayer;
