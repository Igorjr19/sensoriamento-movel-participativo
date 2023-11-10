import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import GuardinhasScreen from './GuardinhasScreen';
import VeiculosScreen from './VeiculosScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/outros/UnespSCity_Logo.png')}
        style={styles.logo}
      />

      <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>SENSORIAMENTO REMOTO</Text>
      <View style={styles.buttonsContainer}>

        <TouchableOpacity
          style={styles.buttonGuardinha}
          onPress={() => navigation.navigate('MapaGuardinhas')}
        >
          <Image
            source={require('../../assets/outros/guardinha.png')}
            style={styles.buttonImage}
          />
          <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>GUARDINHAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonVO}
          onPress={() => navigation.navigate('MapaGuardinhas')}
        >
          <Image
            source={require('../../assets/outros/veiculo.png')}
            style={styles.buttonImage}
          />
          <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>VEÍCULOS OFICIAIS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596BE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  buttonGuardinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 15, // Adiciona a sombra
  },
  buttonVO: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 75,
    elevation: 15, // Adiciona a sombra
  },
  logo: {
    width: 410,
    height: 200,
    marginTop: -30,
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
