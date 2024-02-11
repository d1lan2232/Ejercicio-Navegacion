import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { BotonComponent } from '../Components/BotonComponent'
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

const navigation=useNavigation();

interface Props extends StackScreenProps<any, any>{};


export const Home = ({navigation}: Props) => {
    
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Bienvenido</Text>
        <View style={styles.container2}>
            <Text style={styles.texto2}>Imagen apps moviles:</Text>
            <Image
            source={{uri: 'https://www.solbyte.com/blog/wp-content/uploads/Black-Friday-Cyber-Monday-4.png'
            }} style={styles.imagen}/>
             <BotonComponent title='Acceder' onPress={()=>navigation.navigate('Formulario')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#dcedc8'
    },
    texto:{
        top: 12,
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    },
    container2:{
        padding: 15,
        backgroundColor: '#66bb6a',
        height: '100%',
        borderColor: 'blakc',
        borderTopEndRadius: 50,
        top: 25,
    },
    texto2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    imagen:{
        width: '100%',
        height: '50%',
        alignSelf: 'center',
        borderRadius: 30,
        top: 20
    }
})
