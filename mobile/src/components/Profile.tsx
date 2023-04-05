import React from 'react';
import { View, Text, Alert } from 'native-base';
import { Avatar } from './Avatar';



export function Profile() {
  return (
    <View flexDirection='row'>
        <View marginX={2}>
          <Avatar urlImage='https://github.com/douglasvmatos.png'/>
        </View>
        <View >
          <View flexDirection='row' >
            <Text fontSize={24} color='black'>Olá, </Text>
            <Text fontSize={24} color='black' fontWeight='bold'>Douglas Matos</Text>
          </View>
        <Text fontSize={18} color='black'> Hoje é dia de vitória</Text>
        </View>

    </View>
  )

}