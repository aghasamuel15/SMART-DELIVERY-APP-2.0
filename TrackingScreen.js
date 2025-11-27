import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TrackingScreen({route}) {
  const deliveryId = route.params?.deliveryId || 'PROTOTYPE-1234';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracking</Text>
      <Text style={styles.subtitle}>Delivery: {deliveryId}</Text>
      <View style={styles.step}><Text>● Pickup confirmed</Text></View>
      <View style={styles.step}><Text>● In transit</Text></View>
      <View style={styles.step}><Text>● Out for delivery</Text></View>
      <View style={styles.step}><Text>● Delivered (pending)</Text></View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:'#fff'}}>Contact driver</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:20,fontWeight:'700',marginBottom:6},
  subtitle:{color:'#6B7280',marginBottom:18},
  step:{padding:12,borderWidth:1,borderRadius:8,marginBottom:10},
  btn:{backgroundColor:'#10B981',padding:12,borderRadius:8,alignItems:'center',marginTop:20}
});
