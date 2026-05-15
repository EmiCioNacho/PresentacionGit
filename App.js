import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable, Animated, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {

  const [tab, setTab] = useState('home');

 
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const animateContent = () => {
    fadeAnim.setValue(0);
    translateY.setValue(20);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const cambiarTab = (nuevoTab) => {
    setTab(nuevoTab);
    animateContent();
  };

  const abrirLink = (url) => Linking.openURL(url);

  ////////////////////// CONTENIDO //////////////////////
  const renderContent = () => {

    if (tab === 'home') {
      return (
        <>
          <Text style={styles.title}>Ignacio Rodriguez</Text>
          <Text style={styles.subtitle}>Mi presentación.</Text>



          <Card style={styles.card}>
            <Image
              source={require('./assets/IgnacioRodriguez.jpg')}
              style={styles.image}
            />
          </Card>

          <Card style={styles.infoBox}>
            <Text style={styles.info}>
              Este soy yo. Aquí veran información sobre mi, mis skills (habilidades), y mis redes sociales.
            </Text>
          </Card>

          <Text style={styles.footer}>
            Copyright 2026 Ignacio Rodriguez
          </Text>
        </>
      );
    }

    if (tab === 'about') {
      return (
        <>
          <Text style={styles.title}>Datos Personales</Text>

          <View>


            <Card style={styles.infoBox2}>
            <Text style={styles.info2}> Tengo 16 Años </Text>
            </Card>

            <Image
              source={require('./assets/yosobremi.jpg')}
              style={styles.image3}
            />
            <Card style={styles.infoBox3}>
            <Text style={styles.info}> Naci el 5 de mayo de 2009 en Cordoba, Capital. </Text>
            </Card>            

            <Card style={styles.infoBox2}>
            <Text style={styles.info2}> Editor de video </Text>
            </Card>   

            <Image
              source={require('./assets/fotocompu.jpeg')}
              style={styles.image3}
            />
            <Card style={styles.infoBox3}>
             <Text style={styles.info}> Me gusta editar en mi compu en Sony Vegas Pro 18.0 </Text>
            
            
            </Card>
            
            <Card style={styles.infoBox2}>
            <Text style={styles.info2}> Me interesa la IA </Text>
            </Card>

            <Image
              source={require('./assets/IA')}
              style={styles.image3}
            />
            <Card style={styles.infoBox3}>

            <Text style={styles.info}> Trabajo mucho con ChatGPT y Gemini.</Text>
            
            </Card>
           
            <Card style={styles.infoBox2}>
            <Text style={styles.info2}> Juego al fútbol </Text>
            </Card>

            <Image
              source={require('./assets/yofutbol.jpg')}
              style={styles.image3}
              />
            

            <Card style={styles.infoBox3}>
            <Text style={styles.info}> Desde pequeño juego al fútbol </Text>
            </Card>
          </View>



        </>
      );
    }

    if (tab === 'skills') {
      return (
        <>
          <Text style={styles.title}>Habilidades</Text>

          <View>
<Card style={styles.infoBox}>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
    <Image source={require('./assets/sonyvegaslogo.png')} style={styles.imagelogo2}/>
    <Text style={styles.info2}>Sony Vegas Pro 18</Text>
  </View>
</Card>

<Card style={styles.infoBox}>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
    <Image source={require('./assets/photo.png')} style={styles.imagelogo2}/>
    <Text style={styles.info}>After Effects</Text>
  </View>
</Card>

<Card style={styles.infoBox}>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Pressable 
                style={styles.boton} 
                onPress={() => abrirLink('https://drive.google.com/file/d/1BPBRtK1KYWnXqYOn9rBzrGhwDd5FA3eZ/view?usp=sharing')}
                onLongPress={() => console.log('Manteniendo Instagram')}
                onPressOut={() => console.log('Soltaste Instagram')}
                hitSlop={10}
              >
                <Image
                  source={require('./assets/Googledrivelogo.png')}
                  style={styles.imagelogo}
                />
              </Pressable>
    <Text style={styles.info}>Aqui una muestra de como edito</Text>
  </View>
</Card>
  <Text style={styles.info}>(  TOCA EL LOGO DE GOOGLE DRIVE PARA VER EL VIDEO.  )</Text>  

          </View>
        </>
      );
    }

    if (tab === 'redes') {
      return (
        <>
          <Text style={styles.title}>Redes</Text>

          <View style={styles.buttonContainer}>
            
              <Pressable 
                style={styles.boton} 
                onPress={() => abrirLink('https://instagram.com/')}
                onLongPress={() => console.log('Manteniendo Instagram')}
                onPressOut={() => console.log('Soltaste Instagram')}
                hitSlop={10}
              >
                <Image
                  source={require('./assets/logoinstagram.jpg')}
                  style={styles.imagelogo}
                />
              </Pressable>

              <Pressable 
                style={styles.boton} 
                onPress={() => abrirLink('https://tiktok.com/')}
                onLongPress={() => console.log('Manteniendo TikTok')}
                onPressOut={() => console.log('Soltaste TikTok')}
                hitSlop={10}
              >
                <Image
                  source={require('./assets/logotiktok.jpg')}
                  style={styles.imagelogo}
                />
              </Pressable>

              <Pressable 
                style={styles.boton} 
                onPress={() => abrirLink('https://github.com/')}
                onLongPress={() => console.log('Manteniendo GitHub')}
                onPressOut={() => console.log('Soltaste GitHub')}
                hitSlop={10}
              >
                <Image
                  source={require('./assets/logogithub.png')}
                  style={styles.imagelogo}
                />
              </Pressable>
          </View>
        </>
      );
    }
  };

  ////////////////////// UI //////////////////////
  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a' }}>

      {/* 🔝 TABS */}
      <View style={styles.tabBar}>
        <Pressable onPress={() => cambiarTab('home')} style={[styles.tab, tab === 'home' && styles.activeTab]}>
          <Text style={styles.tabText}>Inicio</Text>
        </Pressable>

        <Pressable onPress={() => cambiarTab('about')} style={[styles.tab, tab === 'about' && styles.activeTab]}>
          <Text style={styles.tabText}>Sobre mí</Text>
        </Pressable>

        <Pressable onPress={() => cambiarTab('skills')} style={[styles.tab, tab === 'skills' && styles.activeTab]}>
          <Text style={styles.tabText}>Skills</Text>
        </Pressable>

        <Pressable onPress={() => cambiarTab('redes')} style={[styles.tab, tab === 'redes' && styles.activeTab]}>
          <Text style={styles.tabText}>Redes</Text>
        </Pressable>
      </View>

      {/* 🔥 CONTENIDO ANIMADO */}
      <Animated.ScrollView
        contentContainerStyle={styles.container}
        style={{
          opacity: fadeAnim,
          transform: [{ translateY }],
        }}
      >
        {renderContent()}
      </Animated.ScrollView>

    </View>
  );
}

////////////////////// 🎨 ESTILOS //////////////////////
const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'IMPACT'
    
  },

  subtitle: {
    color: '#94a3b8',
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    width: '100%',

    
  },
  infoBox2: {
    backgroundColor: '#45a4f7',
    padding: 15,
    borderRadius: 20,
    marginBottom: '25px',
    width: '100%',
    marginTop: '60px',
    borderColor: '#ff0000',

    
    
  },

    infoBox3: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
    marginTop: '20px',
    borderColor: '#ff0000',
    
    
    
  },


  info: {
    color: '#e2e8f0',
    textAlign: 'center',
    fontFamily: 'Bebas'
  },

  info2: {
    color: '#e2e8f0',
    textAlign: 'center',
    fontFamily: 'Bebas',
    fontSize: 22,
    fontWeight: 'bold'
    
  },

  card: {
    borderRadius: 15,
    overflow: 'hidden',
    width: '90%',
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 300,
  },

  image2: {
    width: '200px',
    height: '200px',
    borderColor: 'red',
    borderRadius: '20px',
    marginTop: '20px',
    marginLeft: '20px',
  
    
  },

  image3: {
    width: '100%',
    height: 300,

  },

  imagelogo: {
    width: '50px',
    height: '50px',
    borderRadius: 10

  },

imagelogo2: {
  width: 40,
  height: 40,
  borderRadius: 10,
},

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  boton: {
    backgroundColor: '#4f9deb',
    padding: 12,
    borderRadius: 8,
  },

  texto: {
    color: '#fff',
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#020617',
  },

  tab: {
    padding: 10,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
  },

  tabText: {
    color: '#fff',
  },

  footer: {
    color: 'white',
    fontSize: 10,
    marginTop: 50,
  },




});