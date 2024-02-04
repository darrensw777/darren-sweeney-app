import { StyleSheet, Text } from "react-native";
import appConfig from "../../utils/appConfig";

interface BodyTextProps {
    children: React.ReactNode;
    style?: any;
}
const BodyText = ({ children, style }: BodyTextProps) => {

    return (
        <Text style={[styles.bodyText, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Dosis',
        color: appConfig.colors.textColor,
        fontSize: appConfig.siteSettings.fontSize,
    }
});

export default BodyText;
