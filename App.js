//import dos componentes
import React, { useRef, useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


//https://i.pinimg.com/564x/06/0f/7d/060f7dd8866db6623783fc05cc9463a0.jpg
//https://i.pinimg.com/564x/70/9d/35/709d355f0e72f2923b9e7cacdcd03da9.jp
//import das imagens

const imagem = { uri: "https://i.pinimg.com/564x/06/0f/7d/060f7dd8866db6623783fc05cc9463a0.jpg" }
import iconCopyrth from './assets/meteorologia.png'
import clima from './assets/app-de-clima.png'

export default function Tempo() {


  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [cidade, setCidade] = useState("");
  const [climaTempo, setClimaTempo] = useState(null);


  const alterar = (e) => {
    setCidade(e.target.value)
  }

  const alterarProcura = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${cidade}&lang=pt`)
      .then((response) => {
        if (response.status == 200) {
          return response.json()
        }
      })
      .then((data) => {
        setClimaTempo(data);
        
      });
  };





  return <>
    <ImageBackground style={styles.fotoFundo} source={imagem}>
      <View style={styles.container}>
        <Image style={styles.iconCopy} source={iconCopyrth} />
        <Text style={styles.textoUnico}>Clima - Previsão</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o local que deseja saber o clima:" placeholderTextColor={'#000'}
          value={cidade}
          onChange={alterar}
        />

        <View style={styles.areaBotoes}>
          <TouchableOpacity style={styles.botao} onPress={alterarProcura}>
            <Text style={styles.botaoText}>Verificar</Text>
          </TouchableOpacity>
        </View>





        <View style={styles.daysWeeks}>

          {climaTempo &&
            <View style={styles.viewClima}>
              <Image style={styles.logoTempo} source={climaTempo.current.condition.icon}/>
              <Text style={styles.climaTemp}>Clima: {climaTempo.current.condition.text}</Text>
              <Text style={styles.climaTemp}>Temperatura: {climaTempo.current.temp_c}°C </Text>
            </View>
          }
          <Text style={styles.daysWeeksText}>Segunda-Feira: {gerarNumeroAleatorio(10, 35)}°C <Image style={styles.imgClima} source={clima} /></Text>
          <Text style={styles.daysWeeksText}>Terça-Feira: {gerarNumeroAleatorio(10, 35)}°C  <Image style={styles.imgClima} source={clima} /></Text>
          <Text style={styles.daysWeeksText}>Quarta-Feira: {gerarNumeroAleatorio(10, 35)}°C  <Image style={styles.imgClima} source={clima} /></Text>
          <Text style={styles.daysWeeksText}>Quinta-Feira: {gerarNumeroAleatorio(10, 35)}°C  <Image style={styles.imgClima} source={clima} /></Text>
          <Text style={styles.daysWeeksText}>Sexta-Feira: {gerarNumeroAleatorio(10, 35)}°C  <Image style={styles.imgClima} source={clima} /></Text>
          <Text style={styles.daysWeeksText}>Sabado: {gerarNumeroAleatorio(10, 35)}°C  <Image style={styles.imgClima} source={clima} /></Text>
          <Text style={styles.daysWeeksText}>Domingo: {gerarNumeroAleatorio(10, 35)}°C  <Image style={styles.imgClima} source={clima} /></Text>

        </View>

      </View>
    </ImageBackground>

  </>

}

const styles = StyleSheet.create({

  fotoFundo: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  iconCopy: {
    width: 70,
    height: 70,
    marginTop: 50,
  },
  textoUnico: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 3,
  },
  input: {

    marginTop: 30,
    width: '96%',
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    padding: 10, 
           //Android
           elevation: 4,
           //IOS
           shadowColor: '#000', 
           shadowOffset: {
               width: 0,
               height: 3,
           },
           shadowOpacity: 0.59,
           shadowRadius: 5.00,
  },

  areaBotoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  botao: {
    
    height: 50,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
           //Android
           elevation: 4,
           //IOS
           shadowColor: '#000', 
           shadowOffset: {
               width: 0,
               height: 3,
           },
           shadowOpacity: 0.59,
           shadowRadius: 3.82,
  },
  botaoText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '400',
  },
  daysWeeks: {
    borderWidth: 3,
    borderColor: '#c7e0ed',
    width: '90%',
    height: '47%',
    borderRadius: 30,
    marginTop: 16,
    padding: 10,
    paddingTop: 10,
    alignItems: 'center',
       //Android
       elevation: 4,
       //IOS
       shadowColor: '#000', 
       shadowOffset: {
           width: 0,
           height: 3,
       },
       shadowOpacity: 0.59,
       shadowRadius: 3.82,
  },
  daysWeeksText: {
    margin: 1,
    fontSize: 17,
    fontWeight: '500'
  },
  imgClima: {
    width: 16,
    height: 16,
    borderRadius: 6,
  },
  climaTemp: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 1,
    marginBottom: 10
  }, 
  logoTempo:{
    width: 40,
    height: 40,
  },
  viewClima:{
    marginBottom: 10
  }
});