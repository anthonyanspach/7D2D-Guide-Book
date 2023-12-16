{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CannedFoodsScreen({ navigation }) {
    return (
      <View>
        <Text>Canned Foods Screen</Text>
        <Button title="Can of Cat Food" onPress={() => navigation.navigate('CanCatFoodItem')} />
        <Button title="Can of Chili" onPress={() => navigation.navigate('CanChiliItem')} />
        <Button title="Can of Dog Food" onPress={() => navigation.navigate('CanDogFoodItem')} />
        <Button title="Can of Miso" onPress={() => navigation.navigate('CanMisoItem')} />
        <Button title="Can of Pasta" onPress={() => navigation.navigate('CanPastaItem')} />
        <Button title="Can of Pears" onPress={() => navigation.navigate('CanPearsItem')} />
        <Button title="Can of Peas" onPress={() => navigation.navigate('CanPeasItem')} />
        <Button title="Can of Salmon" onPress={() => navigation.navigate('CanSalmonItem')} />
        <Button title="Can of Sham" onPress={() => navigation.navigate('CanShamItem')} />
        <Button title="Can of Stock" onPress={() => navigation.navigate('CanStockItem')} />
        <Button title="Can of Tuna" onPress={() => navigation.navigate('CanTunaItem')} />
        <Button title="Chicken Ration" onPress={() => navigation.navigate('ChickenRationItem')} />
        <Button title="Chicken Soup" onPress={() => navigation.navigate('ChickenSoupItem')} />
        <Button title="Lamb Ration" onPress={() => navigation.navigate('LambRationItem')} />
        <Button title="Large Beef Ration" onPress={() => navigation.navigate('LargeBeefRationItem')} />
      </View>
    );
  }

export default CannedFoodsScreen;