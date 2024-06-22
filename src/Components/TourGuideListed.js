import React, {useState, useEffect} from 'react';
import {Dimensions,Button, Linking, Pressable, FlatList, Image, StyleSheet, Text, View } from 'react-native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
import Images from '../Utils/Image';
import Colors from '../Utils/Color';
import Font from '../Utils/Font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Width;
const tourGuides = [
    {
      id: '1',
      name: 'Mwinyi Juma',
      place: 'Serengeti National Park',
      phone: '+255 123 456 789',
      costPerDay: '$100',
      email: 'guide@gmail.com'
    },
    {
      id: '2',
      name: 'Neema Chambo',
      place: 'Ngorongoro Conservation Area',
      phone: '+255 987 654 321',
      costPerDay: '$120',
      email: 'guide@gmail.com'

    },
    {
      id: '3',
      name: 'Amani Mvungi',
      place: 'Tarangire National Park',
      phone: '+255 456 789 123',
      costPerDay: '$110',
      email: 'guide@gmail.com'

    },
    {
      id: '4',
      name: 'Upendo Msuya',
      place: 'Lake Manyara National Park',
      phone: '+255 321 654 987',
      costPerDay: '$105',
      email: 'guide@gmail.com'

    },
    {
      id: '5',
      name: 'Baraka Mwita',
      place: 'Ruaha National Park',
      phone: '+255 654 321 789',
      costPerDay: '$115',
      email: 'guide@gmail.com'

    },
    {
      id: '6',
      name: 'Zawadi Kisongo',
      place: 'Mikumi National Park',
      phone: '+255 789 123 456',
      costPerDay: '$125',
      email: 'guide@gmail.com'

    },
    {
      id: '7',
      name: 'Kijana Ngonyani',
      place: 'Katavi National Park',
      phone: '+255 987 123 654',
      costPerDay: '$130',
      email: 'guide@gmail.com'

    },
    {
      id: '8',
      name: 'Fatuma Omari',
      place: 'Selous Game Reserve',
      phone: '+255 321 987 654',
      costPerDay: '$140',
      email: 'guide@gmail.com'

    },
  ];
  

  const handleCall = (phone) => {
    const url = `tel:${phone}`;
    Linking.openURL(url).catch(err => {
      console.error("Failed to make a call", err);
      Alert.alert("Failed to make a call", "Please try again later.");
    });
  };
  
  const handleEmail = (email) => {
    const url = `mailto:${email}`;
    Linking.openURL(url).catch(err => {
      console.error("Failed to send email", err);
      Alert.alert("Failed to send email", "Please try again later.");
    });
  };
  


const TourGuideListed = (site) => {
      console.log(site);

    const navigation = useNavigation();

    const onPressSite = (site) => {
    navigation.navigate('SingleSite', { site });
    };


    const [fetchedTourGuides, setFetchedTourGuides] = useState([]);
    const [tourGuideData, setTourGuideData] = useState([]);

    useEffect(() => {
        const fetchTourGuides = async () => {
            try {
                const usersString = await AsyncStorage.getItem('users');
                const users = usersString ? JSON.parse(usersString) : [];

                // Filter users to get only tour guides
                console.log(`This is for ${site.site}`)
                const tourGuides = users
                    .filter(user => user.type === 'tour_guide'&& user.sites && user.sites[site.site] )
                    .reverse()
                    // .slice(0, 3);
                     console.log(tourGuides);


                setFetchedTourGuides(tourGuides);
        
                // const tourGuides = users.filter(user => user.type === 'tour_guide');
                // setFetchedTourGuides(tourGuides);
                console.log("Now for fetched tour guides")
                console.log(fetchedTourGuides);


                console.log(tourGuideData);
                console.log(tourGuideData);
            
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchTourGuides();
    }, []);


  const renderItem = ({ item }) => (
    <View   style={styles.card}>
      <View style={{flexDirection:'column',}}>
      <Text style={styles.title}>{item.companyName}</Text>
      <View style={{flexDirection:'row'}}>
        {/* <Image source={Images.locator} style={{width:10, height:10, marginLeft:0, marginTop:0}} /> */}
        <Text style={{fontSize:10, fontFamily:Font.regular, color:Colors.black, marginLeft:5, marginTop:0}}>{item.address}</Text>
      </View>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-around'}}>
        <Image source={Images.medal} style={{width:20, height:20, marginRight:0,}}/>
        <Text style={{fontFamily:Font.bold,color:Colors.black,fontSize:16,fontWeight:'600',marginRight:10,}}>4.5</Text>
        <Image source={Images.bed} style={{width:20, height:20,marginRight:0,}}/>
        <Text style={{fontFamily:Font.bold,color:Colors.black,fontSize:16,fontWeight:'600'}}>300$</Text>
        <View style={{width:screenWidth*.2}}/>
        {/* <View style={{justifyContent:'center',borderRadius:10,width:screenWidth*.3, backgroundColor:Colors.secondary, height:50,}}>
                  <Text style={{fontFamily:Font.extraBold,fontWeight:"600",color:Colors.white,fontSize:24,margin:'auto'}}>Book</Text>
        </View> */}
      </View>
      <View style={{flexDirection:'row',}}>
        <Pressable style={{marginLeft:10, borderRadius:5,height:40, width:screenWidth*.3, backgroundColor:Colors.secondary}} onPress={() => handleCall(item.phone)} >
          <Text style={{fontFamily:Font.bold,fontWeight:"600",color:Colors.white,fontSize:20,margin:'auto'}}>Call</Text>
        </Pressable>
        <Pressable style={{marginLeft:10, borderRadius:5,height:40, width:screenWidth*.3, backgroundColor:Colors.secondary}}   onPress={() => handleEmail(item.email)} >
          <Text style={{fontFamily:Font.bold,fontWeight:"600",color:Colors.white,fontSize:20,margin:'auto'}}>Email</Text>
        </Pressable>
      </View>
      </View>

      {/* <Text style={styles.description}>{item.description}</Text> */}

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fetchedTourGuides}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        vertical
        showsVerticalScrollIndicator={false}
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
    flexDirection:'row',
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    // height:150,
    width:Width*.89,
    paddingVertical:10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical:5,
    fontFamily:Font.bold,
    color:Colors.secondary,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default TourGuideListed;


