import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Card } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
export default function App() {

  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        ⚽ Hola, soy Nacho ⚽
      </Text>

      <Text style={styles.subtitle}>
        Esta es mi presentación
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}> - 16 años</Text>
        <Text style={styles.info}> - Estudio en PRoA</Text>
        <Text style={styles.info}> - Me gusta el fútbol</Text>
        <Text style={styles.info}> - Me gusta programar</Text>
      </View>

      <Card style={styles.card}>
        <Image
          source={require('./assets/ImagenNacho.png')}
          style={styles.image}
          
        />
      </Card>

      {/* BOTONES */}
      <View style={styles.buttonContainer}>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => abrirLink('https://instagram.com/nachorodriguezm_')}
        >
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.github]} 
          onPress={() => abrirLink('https://github.com/EmiCioNacho')}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#0f172a',
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 125,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
  },

  info: {
    color: '#e2e8f0',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },

card: {
  borderRadius: 15,
  overflow: 'hidden',
  backgroundColor: '#1e293b',
  marginBottom: 20,
  alignSelf: 'center',
  width: '90%',
},

image: {
  width: '%100',
  height: 300, // 👈 BAJALO (esto es clave)
  resizeMode: 'cover',
},

buttonContainer: {
  flexDirection: 'row',
  width: '100%',
  marginTop: 20,
  marginBottom: 40, // 👈 espacio abajo (clave)
  justifyContent: 'center'
},
  button: {
    backgroundColor: '#e11d48', // rojo moderno
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  github: {
    backgroundColor: '#111827', // negro github vibe
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }

});