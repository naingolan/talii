import Images from '../Utils/Image';
import Colors from '../Utils/Color';
import Font from '../Utils/Font';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BottomCarousel = () => {
	const flatlistRef = useRef();
	// Get Dimesnions
    const screenHeight = Dimensions.get("window").height;
	const screenWidth = Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto Scroll
    const [fetchedTourGuides, setFetchedTourGuides] = useState([]);
    const [tourGuideData, setTourGuideData] = useState([]);

    useEffect(() => {
        const fetchTourGuides = async () => {
            try {
                const usersString = await AsyncStorage.getItem('users');
                const users = usersString ? JSON.parse(usersString) : [];

                // Filter users to get only tour guides
                const tourGuides = users
                    .filter(user => user.type === 'tour_guide')
                    .reverse()
                    .slice(0, 3);

                setFetchedTourGuides(tourGuides);
        
                // const tourGuides = users.filter(user => user.type === 'tour_guide');
                // setFetchedTourGuides(tourGuides);
                console.log("Now for fetched tour guides")
                console.log(fetchedTourGuides);

                setTourGuideData( fetchedTourGuides.map((tourGuide, index) => {
                    return {
                        name: tourGuide.companyName,
                        address: tourGuide.address,
                        id: tourGuide.id,
                        image: tourGuide.image,
                        key: index.toString(),
                    };
                }));
                console.log(tourGuideData);
                console.log(tourGuideData);
            
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchTourGuides();
    }, []);


	useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === carouselData.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 4000);

		return () => clearInterval(interval);
	});

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});
	// Data for carousel
	const carouselData = [
		{
			id: "01",
			image: Images.site_2,
			key: "0123",
            name: "Richard Chadwick Safaris",
            address: "Arusha Tanzania",
		},
		{
			id: "02",
			image: Images.site_1,
			key: "022423",
            name: "Maendeleo Tours",
            address: "Zanzibar",
		},
		{
			id: "03",
			image: Images.site_3,
			key: "03",
            name:"Kizimkazi Tours",
            address:"Dar es Salaam",
		},
	]
    

	//  Display Images // UI
	const renderItem = ({ item, index }) => {
		return (
			<View>
				<View
					//source={item.image}
					style={{ backgroundColor:Colors.background, marinTop:10,height: screenHeight*.18, width: screenWidth }}
				>
                    <View style={{elevation:2,padding:10,borderRadius:10,width:screenWidth*.95, backgroundColor:Colors.primary, height:'95%', marginHorizontal:10,}}>
                        <Text style={{fontSize:24,color:Colors.secondary, fontWeight:'600', fontFamily:Font.extraBold}}>{item.name}</Text>
                        <View>
                            <Text style={{color:Colors.black,fontSize:16,fontFamily:Font.semiBold}}>{item.address}</Text>
                        </View>

                        
                        <View style={{alignItems:"flex-end",flexDirection:'row',justifyContent:'space-around'}}>
                            <Image source={Images.medal} style={{width:20, height:20,}}/>
                            <Text style={{fontFamily:Font.bold,color:Colors.black,fontSize:16,fontWeight:'600'}}>4.5</Text>
                            <Image source={Images.bed} style={{width:20, height:20,}}/>
                            <Text style={{fontFamily:Font.bold,color:Colors.black,fontSize:16,fontWeight:'600'}}>300$</Text>
                            <View style={{width:screenWidth*.2}}/>
                            <View style={{justifyContent:'center',borderRadius:10,width:screenWidth*.3, backgroundColor:Colors.secondary, height:50,}}>
                                <Text style={{fontFamily:Font.extraBold,fontWeight:"600",color:Colors.white,fontSize:24,margin:'auto'}}>Book</Text>
                            </View>
                        </View>
                    </View>


                </View>
			</View>
		);
	};

	// Handle Scroll
	const handleScroll = (event) => {
		// Get the scroll position
		const scrollPosition = event.nativeEvent.contentOffset.x;
		// Get the index of current active item

		const index = scrollPosition / screenWidth;

		setActiveIndex(index);
	};

	// Render Dot Indicators
	const renderDotIndicators = () => {
		return carouselData.map((dot, index) => {
			// if the active index === index

			if (activeIndex === index) {
				return (
					<View
					    key={index}
						style={{
							backgroundColor: "white",
							height: 10,
							width: 10,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={index}
						style={{
							backgroundColor: Colors.lghtBlack2,
							height: 10,
							width: 10,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			}
		});
	};

	return (
		<View style= {styles.carousel}>
			<FlatList 
                style={styles.flatList}
				data={carouselData}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item)=>item.key}
				horizontal={true}
				pagingEnabled={true}
				onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
			/>

			{/* <View
				style={styles.dotIndicatorContainer}
			>
				{renderDotIndicators()}
			</View> */}
		</View>
	);
};

export default BottomCarousel;

const styles = StyleSheet.create({
    carousel:{
        flex:1,
        position: 'relative',
        height:280,
        backgroundColor:Colors.background,
        // backgroundColor:Colors.primary,

    },
    flatList:{
        flex:1
    },
    dotIndicatorContainer:{
        position:'absolute',
        bottom:20,
        right:20,
        justifyContent:'center',
        flexDirection:'row',
    },
    item:{
        width:10,
        height:10,
        justifyContent:'center',
        alignItems:'center'
    },

});