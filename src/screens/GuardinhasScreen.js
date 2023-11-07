import { View, StyleSheet, Text, Image, Button } from 'react-native';

const GuardinhasScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Monitoramento de Guardinha</Text>
        <Image 
        style={styles.logo}
        source={require('../../assets/outros/guardinha.png') } 
        />
        <Button
          title="Ir para Guardinhas"
          onPress={() => navigation.navigate('MapaGuardinhas')} />
      </View>
    );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  }
});

export default GuardinhasScreen;