import { View, StyleSheet, Text, Image, Button } from 'react-native';

const GuardinhasScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Monitoramento de Guardinha</Text>
        <Image source={require('../../assets/outros/guardinha.png')} />
        <Button
          title="Ir para Guardinhas"
          onPress={() => navigation.navigate('Guardinhas')} />
      </View>
    );
}

export default GuardinhasScreen;