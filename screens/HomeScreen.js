import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { auth } from 'firebase'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation()

  // const handleSignOut = () => {
  //   auth
  //   .signOut()
  //   .then(() => {
  //     navigation.replace("Login")
  //   })
  //   .catch(error => alert(error.message))
  // }

  return (
    <View style={styles.bg}>
      <Button title='User Page' onPress={() => navigation.navigate("UserPage")}></Button>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 100, textAlign: 'center'}}>Welcome back</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
{/* <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/> */}
<View style={styles.cardContainer}>

{/* Link */}
<TouchableOpacity
  style={styles.linkContainer}
  onPress={() => { /* Handle navigation to course page */ }}
>
  {/* Card Image */}
  <Image
    style={styles.cardImage}
    source={{ uri: 'https://ocs.alatoo.edu.kg/pluginfile.php/12816/course/overviewfiles/th.jpg' }}
  />
  <Text style={styles.srOnly}>COM 319, COM 320, COM 420: Internships</Text>
</TouchableOpacity>

<View style={styles.cardBody}>

  <View style={styles.courseInfo}>
    <TouchableOpacity
      style={styles.courseLink}
      onPress={() => { /* Handle navigation to course page */ }}
    >
      <View style={styles.favoriteIcon}>
        <Text>☆</Text>
      </View>
      <Text style={styles.courseName}>COM 319, COM 320, COM 420: Mobile app</Text>
    </TouchableOpacity>
    <Text style={styles.courseCategory}>Computer Science</Text>
  </View>
</View>
<View style={styles.cardBody}>
<TouchableOpacity
  style={styles.linkContainer}
  onPress={() => { /* Handle navigation to course page */ }}
>
  {/* Card Image */}
  <Image
    style={styles.cardImage}
    source={{ uri: 'https://ocs.alatoo.edu.kg/pluginfile.php/12816/course/overviewfiles/th.jpg' }}
  />
  <Text style={styles.srOnly}>COM 319, COM 320, COM 420: Internships</Text>
</TouchableOpacity>
  <View style={styles.courseInfo}>
    <TouchableOpacity
      style={styles.courseLink}
      onPress={() => { /* Handle navigation to course page */ }}
    >
      <View style={styles.favoriteIcon}>
        <Text>☆</Text>
      </View>
      <Text style={styles.courseName}>COM 319, COM 320, COM 420:Python OOP</Text>
    </TouchableOpacity>
    <Text style={styles.courseCategory}>Computer Science</Text>
  </View>
</View>
<View style={styles.cardBody}>

<TouchableOpacity
  style={styles.linkContainer}
  onPress={() => { /* Handle navigation to course page */ }}
>
  {/* Card Image */}
  <Image
    style={styles.cardImage}
    source={{ uri: 'https://ocs.alatoo.edu.kg/pluginfile.php/12816/course/overviewfiles/th.jpg' }}
  />
  <Text style={styles.srOnly}>COM 319, COM 320, COM 420: Internships</Text>
</TouchableOpacity>
  <View style={styles.courseInfo}>
    <TouchableOpacity
      style={styles.courseLink}
      onPress={() => { /* Handle navigation to course page */ }}
    >
      <View style={styles.favoriteIcon}>
        <Text>☆</Text>
      </View>
      <Text style={styles.courseName}>COM 319, COM 320, COM 420: Java for fist year students</Text>
    </TouchableOpacity>
    <Text style={styles.courseCategory}>Computer Science</Text>
  </View>
</View>
</View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',

    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  bg: {
    backgroundColor: '#deb887',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
  linkContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    // clip: 'rect(0, 0, 0, 0)',
    borderWidth: 0,
  },
  cardBody: {
    marginBottom:45,
    padding: 15,
    backgroundColor: '#f0ffff',
    // marginRight: 15,
  },
  courseInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  courseLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    marginRight: 5,
    fontSize: 18,
    color: 'gold', // Change the color to your preferred choice
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  courseCategory: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
})