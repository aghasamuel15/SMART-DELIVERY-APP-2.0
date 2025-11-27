import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Delivery</Text>
      <TextInput placeholder="Phone or email" style={styles.input} keyboardType="email-address"/>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry/>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.replace('Home')}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
        <Text style={styles.link}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
  title:{fontSize:28,fontWeight:'700',marginBottom:20},
  input:{width:'100%',padding:12,borderWidth:1,borderRadius:8,marginBottom:12},
  btn:{backgroundColor:'#2563EB',padding:12,width:'100%',borderRadius:8,alignItems:'center'},
  btnText:{color:'#fff',fontWeight:'600'},
  link:{color:'#2563EB',marginTop:12}
});
