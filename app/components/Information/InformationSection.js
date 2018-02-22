import React, { Component } from 'react';
import { View } from 'react-native';
import InformationText from './InformationText.js';
import AppHeader from '../Header/AppHeader.js';


export default class InformationSection extends Component {
    render(){
        return(
            <View>
            <AppHeader />
            <InformationText 
                infoText= "Test info"
                infoSource= "Test source"    
            />
            </View>
        );
    }
}