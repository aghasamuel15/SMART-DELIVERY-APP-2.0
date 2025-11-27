import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
      <TextInput placeholder="Full name" style={styles.input}/>
      <TextInput placeholder="Phone" style={styles.input} keyboardType="phone-pad"/>
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address"/>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry/>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.replace('Home')}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
  title:{fontSize:24,fontWeight:'700',marginBottom:20},
  input:{width:'100%',padding:12,borderWidth:1,borderRadius:8,marginBottom:12},
  btn:{backgroundColor:'#10B981',padding:12,width:'100%',borderRadius:8,alignItems:'center'},
  btnText:{color:'#fff',fontWeight:'600'}
});
