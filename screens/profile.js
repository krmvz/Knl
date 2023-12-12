import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Profile = () => {
    return ( <
        View style = { styles.container } >
        <
        Image style = { styles.profileImage }
        source = {
            { uri: 'https://placekitten.com/200/200' }
        }
        /> <
        Text style = { styles.name } > John Doe < /Text> <
        Text style = { styles.bio } > Passionate Developer < /Text> < /
        View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    userInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bio: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    },
    editButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    editButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Profile;