import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Linking } from 'react-native';

const MobileApp = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=f1f3d2gVadU&list=PLsO_V9s8C6fqtib6olJE4F-MvTW-hNWa6';

  const chapters = [
    {
      title: 'Chapter One♠',
      content: 'Introduction to Mobile App Development Mobile app development involves creating software applications that are designed to run on mobile devices such as smartphones and tablets. These applications can be developed for various mobile operating systems, including iOS (Apple), Android (Google), and sometimes Windows or other platforms.',
      imageUrl: 'https://www.collatree.com/wp-content/uploads/2021/03/Social-Media-Poster-Collatree-1.png',
    },
    {
      title: 'Chapter Two♠',
      content: 'Building User Interfaces with React Native Building user interfaces with React Native involves creating cross-platform mobile applications using the React framework. React Native allows developers to use a single codebase to build applications for both iOS and Android platforms.',
      imageUrl: 'https://media.licdn.com/dms/image/D5612AQEbJdFM_VZPJQ/article-cover_image-shrink_720_1280/0/1693024748643?e=2147483647&v=beta&t=qgIqKTAoIlNt2MsHugcfHrJ0zXgB7F0BOJ4H2Uqf-f8',
    },
    {
      title: 'Chapter Three♠',
      content: 'State Management in React Native State management is a crucial aspect of React Native development as it allows you to manage and update the state of your application. There are several approaches to state management in React Native, and the choice often depends on the complexity of your application. ',
      imageUrl: 'https://www.loginradius.com/blog/static/ef27359624480604211f0e018dd47f18/d9e4b/title-image.png',
    },
    // Add more chapters as needed
  ];

  const openVideoLink = () => {
    Linking.openURL(videoUrl);
  };

  return (
    <ScrollView style={styles.container}>
      {chapters.map((chapter, index) => (
        <View key={index}>
          <Text style={styles.chapterTitle}>{chapter.title}</Text>
          <View style={styles.divider} />
          {chapter.imageUrl && (
            <Image source={{ uri: chapter.imageUrl }} style={styles.chapterImage} />
          )}
          <Text style={styles.chapterContent}>{chapter.content}</Text>

          {index === 0 && (
            <TouchableOpacity onPress={openVideoLink} style={styles.videoLink}>
              <Text style={styles.videoLinkText}>Watch Video</Text>
            </TouchableOpacity>
          )}

          {index === 1 || index === 2 ? (
            <TouchableOpacity onPress={openVideoLink} style={styles.videoLink}>
              <Text style={styles.videoLinkText}>Watch Video</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chapterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chapterImage: {
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 16,
  },
  chapterContent: {
    fontSize: 16,
    marginBottom: 16,
  },
  videoLink: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  videoLinkText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MobileApp;
