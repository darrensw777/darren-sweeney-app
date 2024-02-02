import React, { ReactElement, useState } from 'react';
import {
    Image,
    ImageSourcePropType,
    Dimensions,
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';

interface FullWidthImageProps {
    image: ImageSourcePropType;
}

const win = Dimensions.get('window');

const FullWidthImage = ({ image }: FullWidthImageProps): ReactElement => {
    const [imageLoading, setIsImageLoading] = useState(true);
    const { width: imageWidth, height: imageHeight } = Image.resolveAssetSource(image);

    const ratio = win.width / imageWidth;

    const styles = StyleSheet.create({
        loader: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 10,
            display: imageLoading ? 'flex' : 'none',
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
            color: 'white',
        },
        image: {
            width: win.width,
            height: imageHeight * ratio,
            resizeMode: "contain",
            alignSelf: "flex-start",
        }
    });

    return (
        <View>
            <Image
                style={styles.image}
                source={image}
                onLoadEnd={() => setIsImageLoading(false)}
            />
            <ActivityIndicator
                size={'large'}
                style={styles.loader}
                animating={imageLoading}
            />
        </View>
    );
};

export default FullWidthImage;
