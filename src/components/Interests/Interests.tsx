import { StyleSheet, View } from "react-native";
import appConfig from "../../utils/appConfig";
import BodyText from "../BodyText";

const Interests = () => {
    return (
        <>

            {appConfig.about.interests.map((interest, idx: number) => {
                const outerKey = `${interest.title}_${idx}`;
                const interests = interest.copy.map((interest) => {
                    const key = `${interest}_${idx}`;
                    return <BodyText key={key} style={styles.copy}>{`\u2022 ${interest}`}</BodyText>;
                });
                return (
                    <View style={styles.interestLists} key={outerKey}>
                        <View style={styles.interestTitle}>
                            <BodyText>{interest.title}</BodyText>
                        </View>
                        <View style={styles.interestsList}>
                            {interests}
                        </View>
                    </View>
                );
            })}
        </>
    );
};

const styles = StyleSheet.create({
    copy: {
        fontSize: 20,
        color: appConfig.colors.textColor,
        marginBottom: 10
    },
    interestLists: {
        flex: 1,
        flexDirection: 'row',
    },
    interestsList: {
        flex: 2,
        flexDirection: 'column',
        borderColor: appConfig.colors.textColor,
        borderTopWidth: 1,
        padding: appConfig.siteSettings.padding / 2,
    },
    interestTitle: {
        flex: 1,
        borderColor: appConfig.colors.textColor,
        borderTopWidth: 1,
        padding: appConfig.siteSettings.padding / 2,
    },
});

export default Interests;
