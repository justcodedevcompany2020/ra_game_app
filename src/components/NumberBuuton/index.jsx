import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const NumberButton = ({
  txtcolor,
  number,
  onPress,
  disabled,
  bg = '#FF7575',
  bc = 'rgba(255, 117, 117, 0.40)',
  height,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bg,
          borderColor: bc,
          width: height ? height : 55,
          height: height ? height : 55,
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.text, {fontSize: height - 20, color: txtcolor}]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -18,
  },
});
