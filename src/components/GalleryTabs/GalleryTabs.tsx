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
        return <FullWidthImage key={`galleryImage_${idx}`} image={item.src} />;
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
    first: () => <GalleryImages data={appConfig.galleryImages.performing} />,
    second: () => <GalleryImages data={appConfig.galleryImages.atSea} />,
    third: () => <GalleryImages data={appConfig.galleryImages.misc} />
});

export default function TabViewComponent() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Performing' },
        { key: 'second', title: 'At sea' },
        { key: 'third', title: 'Misc' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => <TabBar
                {...props}
                style={{ backgroundColor: appConfig.colors.primary }}
                indicatorStyle={{ backgroundColor: 'white', height: 2 }}
            />}
        />
    );
}
