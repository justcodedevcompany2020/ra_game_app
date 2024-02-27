import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {useState, useEffect} from 'react';
import {NumberButton} from '../../../components/NumberBuuton';

export const LevelFirst2_1 = ({navigation}) => {
  const [disable, setDisable] = useState(false);
  const [number, setNumber] = useState('');
  const button = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [count, setCount] = useState(0);
  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/_LEVEL1/level2First/game1/2.png')}
      img2={require('../../../assets/img/_LEVEL1/level2First/game1/1.png')}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 30,
          }}>
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 10,
            backgroundColor: '#99CC33',
            marginTop: 20,
            borderRadius: 5,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            width: '100%',
          }}>
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
          <NumberButton
            disabled={disable}
            number={''}
            bc={'#99CC3366'}
            bg={'#FFFFFF'}
            txtcolor={'#99CC3366'}
            height={65}
          />
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberOne: {
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -18,
    fontSize: 40,
    color: '#AADEE5',
  },
});
