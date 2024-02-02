import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderText } from '../../components';
import { Entypo } from '@expo/vector-icons';

interface IconTitleProps {
    iconName: any;
    title: string;
}
const IconTitle = ({ iconName, title }: IconTitleProps): ReactElement => {

    return (
        <View style={styles.iconTitle}>
            <Entypo
                name={iconName}
                color={'white'}
                size={40}
                style={styles.navIcon}
            />
            <HeaderText style={styles.title}>{title}</HeaderText>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'white'
    },
    navIcon: {
        marginRight: 10
    },
    iconTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    }
});

export default IconTitle;
