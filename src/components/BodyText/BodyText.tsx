import { StyleSheet, Text } from "react-native";

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
    }
});

export default BodyText;
