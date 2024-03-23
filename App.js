import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const Image1 = require('./assets/images/background-image.png');

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else{
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  const onReset = () =>{
    setShowAppOptions(false);
  };

  const onAddSticker = () =>{
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () =>{
    
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style ={styles.imageContainer}>
         < ImageViewer 
         placeholderImageSource={Image1}
         selectedImage={selectedImage} //URI da imagem selecionada para a função imageviewer
         />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
           <View style={styles.optionsRow}>
             <IconButton icon="refresh" label="Reset" onPress={onReset} />
             <CircleButton onPress={onAddSticker} />
             <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
           </View>
         </View>
        ) : ( 
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
          <Button label="Use essa foto"  onPress={() => setShowAppOptions(true)}  />
        </View>
        )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    slignItems: 'center',
    flexDirection: 'row',
  },
});
