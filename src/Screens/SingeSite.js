import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import TourGuideListed from '../Components/TourGuideListed';
import Font from '../Utils/Font';
const SingleSite = ({ route }) => {
  const { site } = route.params;

  return (
    <View style={styles.container}>
      <Image source={site.image } style={styles.image} />
      <Text style={styles.title}>{site.name}</Text>
      <Text style={styles.description}>{site.description}</Text>

      <View>
        <TourGuideListed site={site.tagname} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius:15,
  },
  title: {
    fontSize: 24,
    fontFamily:Font.bold,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'left',
    fontFamily:Font.regular,
  },
});

export default SingleSite;
