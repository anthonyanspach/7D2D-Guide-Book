{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BatonsScreen({ navigation }) {
    return (
      <View>
        <Text>Batons</Text>

        <Text>Description:</Text>
        <Text>Batons are covered under the perk Electrocutioner. While not offering too much damage, they make up for it with unique qualities. The Pipe Baton's regular attack causes zombies to stagger instantly and its power attack is an instant knockdown against all but the most tough zombies. It also attacks in an arc similar to the sledgehammer and can knock more than one zombie down. The Stun Baton goes further by electrocuting and shocking zombies, making them stunned for a while.</Text>
        
        <Button title="Pipe Baton" onPress={() => navigation.navigate('PipeBatonItem')} />
        <Button title="Stun Baton" onPress={() => navigation.navigate('StunBatonItem')} />
      </View>
    );
  }

export default BatonsScreen;