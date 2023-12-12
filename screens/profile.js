import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
    return ( <
        View style = { styles.container } > { /* Header with Profile Picture */ } <
        View style = { styles.header } >
        <
        Image style = { styles.profileImage }
        source = {
            { uri: 'https://placekitten.com/200/200' }
        } // Replace with the URL of your profile picture
        /> <
        Text style = { styles.name } > John Doe < /Text> <
        Text style = { styles.major } > Computer Science Major < /Text> < /
        View >

        { /* Student Information */ } <
        View style = { styles.studentInfo } >
        <
        Text style = { styles.label } > University: < /Text> <
        Text style = { styles.value } > Awesome University < /Text>

        <
        Text style = { styles.label } > Batch: < /Text> <
        Text style = { styles.value } > 2023 < /Text>

        <
        Text style = { styles.label } > GPA: < /Text> <
        Text style = { styles.value } > 3.8 < /Text> < /
        View >

        { /* Edit Profile Button */ } <
        TouchableOpacity style = { styles.editButton } >
        <
        Text style = { styles.editButtonText } > Edit Profile < /Text> < /
        TouchableOpacity > <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#3498db',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    major: {
        fontSize: 16,
        color: '#fff',
    },
    studentInfo: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        marginBottom: 15,
    },
    editButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Profile;