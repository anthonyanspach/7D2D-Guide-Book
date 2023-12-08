
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StartingGuide({ navigation }) {
    return (
      <View>
        <Text>Starting Guide</Text>
        {/* Dont use a home button. rely on the back arrow */}
        <Button title="" onPress={() => navigation.navigate('')} />
      </View>
    );
  }

export default StartingGuide;