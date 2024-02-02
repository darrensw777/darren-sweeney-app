import { StyleSheet, Text } from "react-native";

interface HeaderTextProps {
    children: React.ReactNode;
    style?: any;
}
const HeaderText = ({ children, style }: HeaderTextProps) => {

    return (
        <Text style={[styles.bodyText, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'RobotoSlab',
    }
});

export default HeaderText;
