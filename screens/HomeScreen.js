import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("UserPage")} style={styles.button}>
        <Text style={styles.buttonText}>User Page</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back</Text>
      </View>

      <View style={styles.cardContainer}>
        {/* Card 1 */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Mobile App")}
        >
          <Image
            style={styles.cardImage}
            source={{ uri: 'https://www.baypmtech.com/wp-content/uploads/2021/04/istock-131404860final.gif' }}
          />
          <Text style={styles.srOnly}>COM 319, COM 320, COM 420: Internships</Text>

          <View style={styles.cardBody}>
            <View style={styles.courseInfo}>
              <View style={styles.favoriteIcon}>
                <FontAwesome name="star" size={18} color="gold" />
              </View>
              <Text style={styles.courseName}>COM 319, COM 320, COM 420: Mobile App</Text>
            </View>
            <Text style={styles.courseCategory}>Computer Science</Text>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Python OOP")}
        >
          <Image
            style={styles.cardImage}
            source={{ uri: 'https://editor.analyticsvidhya.com/uploads/50548logo.png' }}
          />
          <Text style={styles.srOnly}>COM 319, COM 320, COM 420: Internships</Text>

          <View style={styles.cardBody}>
            <View style={styles.courseInfo}>
              <View style={styles.favoriteIcon}>
                <FontAwesome name="star" size={18} color="gold" />
              </View>
              <Text style={styles.courseName}>COM 319, COM 320, COM 420: Python OOP</Text>
            </View>
            <Text style={styles.courseCategory}>Computer Science</Text>
          </View>
        </TouchableOpacity>

        {/* Add more cards as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Background color for the entire screen
    flexDirection: 'column', // Display cards in a column
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'column', // Display cards in a column
    marginBottom: 20, // Add margin to the entire column
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 10, // Add margin between cards
    elevation: 3,
  },
  cardImage: {
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    overflow: 'hidden',
    borderWidth: 0,
  },
  cardBody: {
    padding: 15,
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  favoriteIcon: {
    marginRight: 5,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseCategory: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
