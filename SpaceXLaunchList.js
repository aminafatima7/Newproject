

import React from "react";
import { useQuery, gql } from "@apollo/client";
import {  Text, View, StyleSheet } from 'react-native';
import { Linking } from 'react-native';


const FILMS_QUERY = gql`
  {
    
      launchesPast(limit: 10) {
        id
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
        }
        rocket {
          rocket_name
         
        }
        ships {
          name
          home_port
          image
        
      }
      }
  }
`;
 
export default function SpaceXLaunchList() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <pre>{error.message}</pre>

  return (
    <View style={styles.container}> 
      <Text style={styles.headingstyle}> SpaceX Launches</Text>
      <View>
        {data.launchesPast.map((launch) => (
          <View style={styles.cards} >
        <View style={styles.card}>
     <Text  key={launch.id} >    </Text>
   <Text  style={styles.cardnew}> Mission : {launch.mission_name} </Text>
   <Text style={styles.cardinfo}> Date: {launch.launch_date_local} </Text>
   <Text  style={styles.cardinfo}> Launch Site : {launch.launch_site.site_name_long}</Text>
   <Text  style={styles.title}> Rocket Name: {launch.rocket.rocket_name}</Text>
 <Text style={styles.button}
      onPress={() => Linking.openURL(launch.links.video_link)}>
  Watch Video
</Text>
          </View>
          </View>
        ))}
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    margin:"auto",
    boxSizing:"borderBox",
    padding:"0",
    textAlign:"center",
    width:"100%",
    
  
   

  },
  headingstyle: { 
    margin: "2rem",
    padding: "30px 0",
    textAlign:"center",
    fontFamily:"Raleway sansSerif",
    textTransform:"uppercase",
letterSpacing:"8px",
fontWeight:"500",
color:"#868686",

    fontSize:" 2rem",
    
  },
  cards: {
    width:"100%",
    height:"auto"
  },
  card:{
marginBottom:"6%",
margin:"auto",
transition:"all 0.4s cubicBerier(0.175, 0.885, 0, 1)",
backgroundColor:"#fff",
width:"40%",
borderRadius:"10px",
boxShadow:"0px 13px 10px -7px " ,
padding:"6px",
float:"left"


},

cardnew:{
width:"100%",
height:"1.4rem",
textAlign:"center",
color:"#868686",
fontSize:"1rem",
overflow:"hidden",
whiteSpace: "nowrap",
textOverflow: "ellipsis",
borderTopLeftRadius:"12px",
borderTopRightRadius:"12px",

},
cardinfo:{
backgroundColor:"#fff",
borderBottomLeftRadius:"12px",
borderBottomRightRadius:"12px",
padding:"16px 24px 24px 24px "
}
 
  ,
  title:{
marginTop:"5px",
marginBottom:"10px",
fontFamily:"'Raleway',sans-serif ",
textTransform:"capitalize",

  },
  button:{
    padding:"5px 8px",
    fontSize:"sans-serif",
    letterSpacing:"5px",
    fontWeight:"100",
    color:"white",
    backgroundColor:"#24a0ed",
    outline:"none",
    textTransform: "uppercase",
    border:"1px solid , black",
    cursor: "pointer",
  
  }

});
