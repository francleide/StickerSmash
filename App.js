import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const Image1 = require('./assets/imagens/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
    } else{
      alert('Você não selecionou nenhuma imagem.');
    }
  };
  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
         < ImageViewer 
         placeholderImageSource={Image1}
         selectedImage={selectedImage} //URI da imagem selecionada para a função imageviewer
         />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
          <Button label="Use essa foto"/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
 /* image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },*/
});
