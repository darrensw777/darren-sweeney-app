import * as React from 'react';
import { ImageSourcePropType, ScrollView, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FullWidthImage from '../FullWidthImage';
import appConfig from '../../utils/appConfig';

interface ItemProps {
    src: ImageSourcePropType;
    active: boolean;
}

interface DataProps {
    data: ItemProps[];
}

const GalleryImages = ({ data }: DataProps) => {
    const Images = data.map((item, idx) => {
        return <FullWidthImage key={`galleryImage_${idx}`} image={item.src} padding={0} marginTop={20} />;
    }
    );
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {Images}
            </ScrollView>
        </View>
    );
};

const renderScene = SceneMap({
    first: () => <GalleryImages data={appConfig.galleryImages.me} />,
    second: () => <GalleryImages data={appConfig.galleryImages.theBoys} />,
    third: () => <GalleryImages data={appConfig.galleryImages.singing} />
});

export default function TabViewComponent() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Me!' },
        { key: 'second', title: 'My boys' },
        { key: 'third', title: 'Singing' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => <TabBar
                {...props}
                style={{ backgroundColor: appConfig.colors.lightGreyBg, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                activeColor={appConfig.colors.textColor}
                inactiveColor={appConfig.colors.textColor}
                indicatorStyle={{ backgroundColor: '#333', height: 2 }}
            />}
        />
    );
}
