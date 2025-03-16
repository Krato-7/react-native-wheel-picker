import React, {memo} from 'react';
import {StyleProp, TextStyle} from 'react-native';
// import {usePickerItemHeight} from '../contexts/PickerItemHeightContext';
import { ThemedText } from '../picker/ThemedText';

type PickerItemProps = {
  value: any;
  label?: string;
  itemTextStyle: StyleProp<TextStyle>;
  
};

const PickerItem = ({value, label, itemTextStyle, }: PickerItemProps) => {
  // const height = usePickerItemHeight();

  return (
    <ThemedText type='bummer' style={[itemTextStyle]}>
      {label ?? value}
    </ThemedText>
  );
};



export default memo(PickerItem);
