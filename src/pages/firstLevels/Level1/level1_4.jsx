import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {useState} from 'react';
import {NumberButton} from '../../../components/NumberBuuton';

export const LevelFirst1_4 = ({navigation}) => {
  const [firstSelect, isFirstSelect] = useState('');
  const [secondSelect, isSecondSelect] = useState('');
  const [thirdSelect, isThirdSelect] = useState('');
  // const [fourthSelect]

  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/_LEVEL1/level1First/game4/1.png')}
      img2={require('../../../assets/img/_LEVEL1/level1First/game4/2.png')}>
      <View
        style={{
          position: 'relative',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: -120,
            left: 300,
            transform: [{rotate: '-45deg'}],
          }}>
          <Image
            style={{
              width: 130,
              height: 130,
            }}
            source={require('../../../assets/img/_LEVEL1/level1First/game4/3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: -120,
            left: 50,
            transform: [{rotate: '-45deg'}],
          }}>
          <Image
            style={{
              width: 130,
              height: 130,
            }}
            source={require('../../../assets/img/_LEVEL1/level1First/game4/5.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: -250,
            left: 450,
            transform: [{rotate: '90deg'}],
          }}>
          <Image
            style={{
              width: 130,
              height: 130,
            }}
            source={require('../../../assets/img/_LEVEL1/level1First/game4/4.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: -260,
            left: 150,
            transform: [{rotate: '45deg'}],
          }}>
          <Image
            style={{
              width: 130,
              height: 130,
            }}
            source={require('../../../assets/img/_LEVEL1/level1First/game4/6.png')}
          />
        </TouchableOpacity>
      </View>
    </LevelWrapper>
  );
};

const styles = StyleSheet.create({
  blueTrash: {
    width: 70,
    height: 70,
    borderWidth: 4,
    backgroundColor: '#AADEE533',
    borderRadius: 15,
    position: 'absolute',
    bottom: -180,
    right: 0,
    borderColor: '#AADEE5',
  },
});
