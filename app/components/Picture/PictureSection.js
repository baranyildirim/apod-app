import React, { Component } from 'react';
import { View } from 'react-native'
import MainPicture from './MainPicture';
import AppHeader from '../Header/AppHeader.js';


export default class PictureSection extends Component {
    render(){
        return(
            <View>
                <AppHeader />
                <MainPicture 
                imageSource="uri:'https://apod.nasa.gov/apod/image/1802/ManhattanSkylinesHonda.jpg'"
                imageStyle=""
                />
            </View>
        );
    }
}

function getUrl(){
    
}