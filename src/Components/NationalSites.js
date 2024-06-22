import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
import Images from '../Utils/Image';
import Colors from '../Utils/Color';
import Font from '../Utils/Font';
const parks = [
  {
    id: '1',
    name: 'Serengeti National Park',
    description: 'Famous for its annual migration of over 1.5 million white-bearded wildebeest and 250,000 zebra.',
    image: Images.site_1,
    tagname:'serengeti'
  },
  {
    id: '2',
    name: 'Ngorongoro Conservation',
    description: 'Home to the famous Ngorongoro Crater, a large volcanic caldera.',
    image: Images.site_2,
    tagname:'ngorongoro'
  },
  {
    id: '3',
    name: 'Tarangire National Park',
    description: 'Known for its high density of elephants and the baobab trees.',
    image: Images.site_3,
    tagname:'tarangire'
  },
  {
    id: '4',
    name: 'Lake Manyara National Park',
    description: 'Famous for its tree-climbing lions and flamingos.',
    image: Images.site_1,
    tagname:'manyara'
  },
  {
    id: '5',
    name: 'Ruaha National Park',
    description: 'The largest national park in Tanzania with a rich wildlife diversity.',
    image: Images.site_3,
    tagname:'ruaha'
  },
  {
    id: '6',
    name: 'Mikumi National Park',
    description: 'A great place to see the Big Five and diverse bird species.',
    image: Images.site_3,
    tagname : 'mikumi'
  },
  {
    id: '7',
    name: 'Katavi National Park',
    description: 'One of Tanzania\'s most remote and wildest national parks.',
    image: Images.site_3,
    tagname : 'katavi'
  },
  // Add more parks if needed
];

const NationalSites = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <View style={{flexDirection:'row'}}>
        <Image source={Images.locator} style={{width:10, height:10, marginLeft:5, marginTop:0}} />
        <Text style={{fontSize:10, fontFamily:Font.regular, color:Colors.white, marginLeft:5, marginTop:0}}>Arusha, Tanzania</Text>
      </View>
      {/* <Text style={styles.description}>{item.description}</Text> */}

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={parks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:Height*.3,
  },
  card: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    height:210,
    width:150,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    // fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical:5,
    fontFamily:Font.semiBold,
    color:Colors.white,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default NationalSites;


