import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Linking } from 'react-native';

const MobileApp = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=f1f3d2gVadU&list=PLsO_V9s8C6fqtib6olJE4F-MvTW-hNWa6';

  const chapters = [
    { title: 'Chapter One♠', content: 'Introduction to Mobile App Development' },
    { title: 'Chapter Two♠', content: 'Building User Interfaces with React Native' },
    { title: 'Chapter Three♠', content: 'State Management in React Native' },
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
          <Text style={styles.chapterContent}>{chapter.content}</Text>

          {index === 0 && (
            <TouchableOpacity onPress={openVideoLink} style={styles.videoLink}>
              <Text style={styles.videoLinkText}>Watch Video</Text>
            </TouchableOpacity>
          )}

          <WebView
            source={{ html: `<iframe width="100%" height="200" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>` }}
            style={styles.webView}
          />
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
  webView: {
    height: 200,
  },
});

export default MobileApp;
