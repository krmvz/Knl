import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
    return ( 
        <View style = { styles.container } >
        <Image style = { styles.profileImage }
        source = {
            { uri: 'https://placekitten.com/200/200' } }/> 
            <
        Text style = { styles.name } > John Doe </Text> <
        Text style = { styles.bio } > Passionate Developer </Text> </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
});

export default Profile;