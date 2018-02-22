import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import InformationSection from './components/Information/InformationSection.js';
import PictureSection from './components/Picture/PictureSection.js';
import FavoritesSection from './components/Favorites/FavoritesSection.js'
import Ionicons from 'react-native-vector-icons/Ionicons';


class PictureScreen extends Component {
    render(){
        return(
            <View>
                <PictureSection/>
            </View>
        );
    }
}

class InformationScreen extends Component {
    render(){
        return(
            <View>
                <InformationSection />
            </View>
        );
    }
}

class FavoritesScreen extends Component {
    render(){
        return(
            <View>
                <FavoritesSection />
            </View>
        );
    }
}


export default TabNavigator({
    Picture: { screen: PictureScreen },
    Information: { screen: InformationScreen },
    Favorites: { screen: FavoritesScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor}) =>{
            const { routeName } = navigation.state;
            let iconName;
            if(routeName === 'Picture'){
                iconName = `ios-image${focused ? '' : '-outline'}`;
            } else if (routeName === 'Information'){
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Favorites') {
                iconName = `ios-star${focused ? '' : '-outline'}`;
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    
  }
);
