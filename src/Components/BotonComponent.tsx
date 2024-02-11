import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';


interface ButtonProps{
    title: string,
    onPress:()=>void;
}

export const BotonComponent = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    buttonContainer:{
        width: '30%',
        alignSelf: 'center',
        paddingVertical: 15,
        backgroundColor: 'black',
        top: 62,
        bottom: 20,
        borderRadius: 20,
    },
    texto:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
})