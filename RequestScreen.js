import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RequestScreen({navigation}) {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [notes, setNotes] = useState('');

  const submit = ()=>{
    // In a real app you'd call backend API. For prototype we just navigate to tracking
    if(!pickup || !dropoff){ Alert.alert('Please enter pickup and dropoff addresses'); return; }
    navigation.navigate('Tracking', {deliveryId: 'PROTOTYPE-1234'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request a Delivery</Text>
      <TextInput placeholder="Pickup address" style={styles.input} value={pickup} onChangeText={setPickup}/>
      <TextInput placeholder="Dropoff address" style={styles.input} value={dropoff} onChangeText={setDropoff}/>
      <TextInput placeholder="Notes (optional)" style={styles.input} value={notes} onChangeText={setNotes}/>
      <TouchableOpacity style={styles.btn} onPress={submit}>
        <Text style={styles.btnText}>Request Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:20,fontWeight:'700',marginVertical:12},
  input:{borderWidth:1,padding:12,borderRadius:8,marginBottom:12},
  btn:{backgroundColor:'#2563EB',padding:12,borderRadius:8,alignItems:'center'},
  btnText:{color:'#fff',fontWeight:'600'}
});
