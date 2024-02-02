import React from 'react';
import { Linking, Pressable, StyleSheet, Text } from 'react-native';
import appConfig from '../../utils/appConfig';

const UrlLinkingButton = ({ type }: { type: string; }) => {
    const conf = type === 'email' ? appConfig.contact.email : appConfig.contact.telephone;
    const url = type === 'email'
        ? `mailto:${appConfig.contact.email}?subject=From App`
        : `tel:${appConfig.contact.telephone}`;
    const copyWord = type === 'email' ? 'Email' : 'Telephone';

    return (
        <Pressable
            style={styles.button}
            onPress={async () => await Linking.canOpenURL(url)
                .then((supported) => {
                    if (!supported) {
                        console.log("Can't handle url: " + url);
                    } else {
                        return Linking.openURL(url);
                    }
                })
                .catch((err) => console.error('An error occurred', err))
            }
        >
            <Text style={styles.buttonText}>
                {`${copyWord}: ${conf}`}
            </Text>
        </Pressable >
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: 'black',
        borderWidth: 0,
        borderColor: 'red',
        paddingVertical: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    }
});

export default UrlLinkingButton;
