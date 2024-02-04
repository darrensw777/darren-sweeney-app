import React, { ReactElement, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import appConfig from '../utils/appConfig';
import { BodyText, ColorBlockLink, HeaderText } from '../components';

const ContactScreen = ({ navigation }: any): ReactElement => {

    return (
        <HeaderText style={{ fontSize: 40 }}>contactttttt screen</HeaderText>
    );
};

const styles = StyleSheet.create({

});

export default ContactScreen;

// import React, { ReactElement } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const ContactScreen = (): ReactElement => {

//     return (
//         <View style={styles.container}>
//             <Text>Contact</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     }
// });

// export default ContactScreen;
