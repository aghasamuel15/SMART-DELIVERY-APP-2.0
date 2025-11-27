import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your profile</Text>
      <Text style={styles.info}>Name: Jane Doe</Text>
      <Text style={styles.info}>Phone: +234 800 000 0000</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.replace('Login')}>
        <Text style={{color:'#fff'}}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:20,fontWeight:'700',marginBottom:12},
  info:{marginVertical:6},
  btn:{backgroundColor:'#EF4444',padding:12,borderRadius:8,alignItems:'center',marginTop:20}
});
