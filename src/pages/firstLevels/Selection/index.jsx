import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export const Selection1First = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/img/2.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={{transform: [{rotate: '90deg'}], marginTop: -100}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LevelFirst1_4');
            }}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/4_1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LevelFirst1_3');
            }}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/3_1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LevelFirst1_2');
            }}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/2_1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log(1);
              navigation.navigate('LevelFirst1_1');
            }}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/1_1.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            transform: [{rotate: '90deg'}],
            marginTop: 100,
            marginLeft: -102,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LevelFirst1_5');
            }}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/5_1.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  img: {
    width: 100,
    height: 60,
    marginVertical: 40,
    transform: [{rotate: '-90deg'}],
  },
});
