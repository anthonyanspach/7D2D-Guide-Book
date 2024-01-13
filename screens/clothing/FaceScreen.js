{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function FaceScreen({ navigation }) {
    return (
      <View>
        <Text>Glasses Categories</Text>
        <Button title="Bandana" onPress={() => navigation.navigate('BandanaItem')} />
        <Button title="Cigar" onPress={() => navigation.navigate('CigarItem')} />
        
      </View>
    );
  }

export default FaceScreen;