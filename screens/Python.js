import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Linking } from 'react-native';

const PythonOOP = () => {
  const videoUrl = 'https://youtu.be/Ej_02ICOIgs?si=AE6WTJMTcy7uGrk3';

  const chapters = [
    {
      title: 'Chapter One♠',
      content: 'Introduction to Pytjon OOP                                         Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes for organizing code. Python, being an object-oriented programming language, supports OOP principles.',
      imageUrl: 'https://www.boardinfinity.com/blog/content/images/2023/03/Copy-of-Copy-of-Copy-of-Untitled-Design--1--1.png',
    },
    {
      title: 'Chapter Two♠',
      content: 'CLASS Variables                                                                                                     In Python, class variables are variables that are shared among all instances of a class. Unlike instance variables, which are unique to each instance of a class, class variables are the same for all instances.',
      imageUrl: 'https://i2.wp.com/www.differencebetween.com/wp-content/uploads/2018/02/Difference-Between-Class-and-Instance-Variables-fig-1.png?resize=550%2C347&ssl=1',
    },
    {
      title: 'Chapter Three♠',
      content: 'Class and Static Method                                                In Python, class methods and static methods are special types of methods that are associated with a class rather than an instance of the class. They are defined using the @classmethod and @staticmethod decorators, respectively.',
      imageUrl: 'https://www.boardinfinity.com/blog/content/images/2023/05/Class-and-Static-method-in-Python.png',
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

export default PythonOOP;
