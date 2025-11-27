import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Smart Delivery</Text>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Request')}>
        <Text style={styles.cardTitle}>Request a delivery</Text>
        <Text style={styles.cardSubtitle}>Send packages quickly</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Tracking')}>
        <Text style={styles.cardTitle}>Track a package</Text>
        <Text style={styles.cardSubtitle}>Live tracking & updates</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileBtn} onPress={()=>navigation.navigate('Profile')}>
        <Text style={{color:'#fff'}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:'#fff'},
  title:{fontSize:22,fontWeight:'700',marginVertical:12},
  card:{padding:18,borderWidth:1,borderRadius:10,marginVertical:10},
  cardTitle:{fontWeight:'700',fontSize:16},
  cardSubtitle:{color:'#6B7280',marginTop:6},
  profileBtn:{position:'absolute',right:20,bottom:30,backgroundColor:'#111827',padding:12,borderRadius:8}
});
