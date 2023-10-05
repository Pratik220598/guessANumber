import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colours from '../constants/colours';

const Header = props => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headerTitle:{
        color: colours.grey,
        fontSize: 24,
        fontWeight:'bold',
    }
});

export default Header;