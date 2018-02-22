import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';  

export default class MainPicture extends Component {
    render(){
        return(
            <View>
                <Image style={this.props.imageStyle} 
                source={{uri: this.props.imageSource}} />
            </View>
        );
    }
}

MainPicture.propTypes = {
    imageSource: PropTypes.string.isRequired,
    imageStyle: PropTypes.string.isRequired
};

MainPicture.defaultProps = { 
    imageSource: "require('../../assets/reload.png')", //Add image to folder
};


