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
    padding: number;
}

const win = Dimensions.get('window');

const FullWidthImage = ({ image, padding }: FullWidthImageProps): ReactElement => {
    const [imageLoading, setIsImageLoading] = useState(true);
    const { width: imageWidth, height: imageHeight } = Image.resolveAssetSource(image);

    const ratio = (win.width - (padding * 2)) / imageWidth;

    const imgWidth = win.width;
    const imgHeight = imageHeight * ratio;

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
            width: imgWidth,
            height: imgHeight,
            resizeMode: "contain",
            alignSelf: "center",
            marginLeft: padding,
            marginBottom: padding,
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
