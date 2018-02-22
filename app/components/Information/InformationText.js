import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class InformationText extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.infoText}</Text>
                <Text>{this.props.infoSource}</Text>
            </View>
        );
    }
}

InformationText.propTypes = {
    infoText: PropTypes.string.isRequired,
    infoSource: PropTypes.string.isRequired
};

InformationText.defaultProps = {
    infoText: "Unable to retrieve information",
    infoSource: "Unable to retrieve source"
};


