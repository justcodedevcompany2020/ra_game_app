import {View} from 'react-native';
// import {Input} from '../../components/Input';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {NumberButton} from '../../../components/NumberBuuton';
import {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
// Sound.setCategory('Playback');

export const LevelFirst1_1 = ({navigation}) => {
  const [disable, setDisable] = useState(false);
  const buuton = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/level1First/game1/bglv1.png')}
      img2={require('../../../assets/img/level1First/game1/33.png')}>
      {/* <View style={{flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 30,
              justifyContent: 'space-around',
              width: '80%',
            }}>
            {activeGame[0]?.icone.map((elm, i) => {
              return elm;
            })}
          </View>
          {value1 == '' ? (
            <Input value={value1} setValue={e => setValue1(e)} />
          ) : (
            <NumberButton disabled={true} number={value1} />
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 30,
              justifyContent: 'space-around',
              width: '80%',
            }}>
            {activeGame[1]?.icone.map((elm, i) => {
              return elm;
            })}
          </View>
          {value2 == '' ? (
            <Input value={value2} setValue={e => setValue2(e)} />
          ) : (
            <NumberButton disabled={true} number={value2} />
          )}
        </View>
      </View>
     */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {buuton.map((elm, i) => {
          // if (elm != value1 && elm != value2)
          return (
            <NumberButton
              disabled={disable}
              key={i}
              onPress={() => Answer(elm)}
              number={elm}
              bc={'#A0CDD466'}
              bg={'#FFFFFF'}
              txtcolor={'#A0CDD4'}
            />
          );
        })}
      </View>
    </LevelWrapper>
  );
};
