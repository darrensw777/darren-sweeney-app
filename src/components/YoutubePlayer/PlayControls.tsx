import { Platform, Pressable, StyleSheet, View } from "react-native";
import { YoutubeIframeRef } from "react-native-youtube-iframe";
import { NUM_SECONDS_FF_OR_REWIND } from "./YoutubePlayer";
import BodyText from "../BodyText";
import appConfig from "../../utils/appConfig";

interface PlayControlProps {
    playerRef: React.RefObject<YoutubeIframeRef>,
    playing: boolean;
    togglePlaying: () => void;
}

const PlayControl = ({ playerRef, playing, togglePlaying }: PlayControlProps) => {
    const styles = StyleSheet.create({
        button: {
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: !playing ? appConfig.colors.secondary : 'green',
            padding: 10,
            height: Platform.OS === 'ios' ? 60 : 80,
            // marginTop: Platform.OS === 'ios' ? -120 : -140, // this is only here to hide youtube controls
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
        <View>
            <Pressable
                style={styles.button}
                onPress={togglePlaying}
            >
                <BodyText style={styles.buttonText}>{playing ? "PAUSE" : "PLAY"}</BodyText>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={async () => {
                    const duration = await playerRef.current?.getDuration().then(
                        getDuration => getDuration
                    );
                    const currentTime = await playerRef.current?.getCurrentTime().then(
                        currentTime => currentTime
                    );
                    if (currentTime) {
                        const timeAhead = (duration && currentTime + NUM_SECONDS_FF_OR_REWIND <= duration)
                            ? currentTime + NUM_SECONDS_FF_OR_REWIND
                            : duration;

                        playerRef.current?.seekTo(Math.floor(timeAhead || currentTime), true);
                    }
                }}
            >
                <BodyText style={styles.buttonText}>{">>>"}</BodyText>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={async () => {
                    const currentTime = await playerRef.current?.getCurrentTime().then(
                        currentTime => currentTime
                    );

                    if (currentTime) {
                        const timeBack = (currentTime - NUM_SECONDS_FF_OR_REWIND >= 0)
                            ? currentTime - NUM_SECONDS_FF_OR_REWIND
                            : 0;

                        playerRef.current?.seekTo(Math.floor(timeBack || currentTime), true);
                    }

                }}
            >
                <BodyText style={styles.buttonText}>{"<<<"}</BodyText>
            </Pressable>
        </View>
    );
};

export default PlayControl;
