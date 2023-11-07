import { View, Text, StyleSheet } from 'react-native';
import GuardinhasScreen from './GuardinhasScreen';
import VeiculosScreen from './VeiculosScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GuardinhasScreen navigation={navigation}/>
        <VeiculosScreen navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;
