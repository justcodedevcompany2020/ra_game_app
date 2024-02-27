import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {useState, useEffect} from 'react';
import {NumberButton} from '../../../components/NumberBuuton';

export const LevelFirst2_2 = ({navigation}) => {
  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/_LEVEL1/level2First/game2/2.png')}
      img2={require('../../../assets/img/_LEVEL1/level2First/game2/1.png')}>
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity style={{}} onPress={() => {}}>
            <Image
              style={{
                width: 110,
                height: 80,
              }}
              source={require('../../../assets/img/_LEVEL1/level2First/game2/3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={() => {}}>
            <Image
              style={{
                width: 110,
                height: 80,
              }}
              source={require('../../../assets/img/_LEVEL1/level2First/game2/4.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={() => {}}>
            <Image
              style={{
                width: 110,
                height: 80,
              }}
              source={require('../../../assets/img/_LEVEL1/level2First/game2/5.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 50,
            width: '80%',
          }}>
          <TouchableOpacity style={{top: 20, right: 10}} onPress={() => {}}>
            <Image
              style={{
                width: 110,
                height: 80,
              }}
              source={require('../../../assets/img/_LEVEL1/level2First/game2/8.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{right: -29}} onPress={() => {}}>
            <Image
              style={{
                width: 110,
                height: 80,
              }}
              source={require('../../../assets/img/_LEVEL1/level2First/game2/10.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{top: 20, right: -40}} onPress={() => {}}>
            <Image
              style={{
                width: 110,
                height: 80,
              }}
              source={require('../../../assets/img/_LEVEL1/level2First/game2/13.png')}
            />
          </TouchableOpacity>
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
