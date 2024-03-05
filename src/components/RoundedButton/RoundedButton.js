import React from 'react';
import {TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text> 
    </TouchableOpacity>
  )
}
