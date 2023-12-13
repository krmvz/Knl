import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Linking } from 'react-native';

const PythonOOP = () => {
  const videoUrl = 'https://youtu.be/Ej_02ICOIgs?si=kGyVTyQ5v_y9xEXi';

  const chapters = [
    { title: 'Chapter One♠', content: 'Introduction to  Python OOP Development' },
    { title: 'Chapter Two♠', content: 'CLASS Variables' },
    { title: 'Chapter Three♠', content: 'Class and Static Method' },
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

export default PythonOOP;
