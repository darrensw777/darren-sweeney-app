import React, { ReactElement, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import appConfig from '../utils/appConfig';
import { BodyText, ColorBlockLink, HeaderText } from '../components';

const WorkScreen = ({ navigation }: any): ReactElement => {

    return (
        <HeaderText style={{ fontSize: 40 }}>Work screen</HeaderText>
    );
};

const styles = StyleSheet.create({

});

export default WorkScreen;
