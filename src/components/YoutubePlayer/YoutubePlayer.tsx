import React, { useState, useCallback } from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text, Pressable } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import appConfig from "../../utils/appConfig";
import BodyText from "../BodyText";

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
            backgroundColor: !playing ? appConfig.colors.secondary : 'green',
            padding: 10,
            height: 80,
            marginTop: -120, // this is only here to hide youtube controls
            borderColor: 'black',
            borderWidth: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopWidth: 0
        },
        buttonText: {
            color: !playing ? '#333' : 'white',
            fontSize: 18
        }
    });

    return (
        <View style={{ marginBottom: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden' }}>
            <View pointerEvents="none" style={{ position: 'relative' }}>
                <YoutubePlayer
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
            <Pressable
                style={styles.button}
                onPress={togglePlaying}
            >
                <BodyText style={styles.buttonText}>{playing ? "PAUSE" : "PLAY"}</BodyText>
            </Pressable>
            <ActivityIndicator
                size={'large'}
                style={styles.loader}
                animating={!videoLoaded}
            />
        </View>
    );
};

export default RNYoutubePlayer;
