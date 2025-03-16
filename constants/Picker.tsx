import React, {useState} from 'react';
import {View, Text} from 'react-native';
import WheelPicker from '@quidone/react-native-wheel-picker';

const minuteOptions = [...Array(60).keys()].map((index) => ({
  value: index,
  label: index.toString().padStart(2, '0'), // Ensures 01, 02, 03...
}));

const secondOptions = [...Array(60).keys()].map((index) => ({
  value: index,
  label: index.toString().padStart(2, '0'),
}));

const DurationPicker = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Minutes Picker */}
      <WheelPicker
        data={minuteOptions}
        value={minutes}
        onValueChanged={({item: {value}}) => setMinutes(value)}
        itemHeight={77}
        visibleItemCount={5}
        width={103.5}
        contentContainerStyle={{height: 'auto', width: 103.5}}
      />

      {/* Separator */}
      <Text style={{fontSize: 32, fontWeight: 'bold', marginHorizontal: 10}}>
        :
      </Text>

      {/* Seconds Picker */}
      <WheelPicker
        data={secondOptions}
        value={seconds}
        onValueChanged={({item: {value}}) => setSeconds(value)}
        itemHeight={77}
        width={103.5}
        visibleItemCount={5}
        contentContainerStyle={{height: 'auto', width: 103.5}}
      />

      {/* Selected Time Display */}
      {/* <Text style={{ fontSize: 24, marginTop: 20 }}>
        Selected: {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </Text> */}
    </View>
  );
};

export default DurationPicker;
