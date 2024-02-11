import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export const Formulario = () => {
  const [numerador, setNumerador] = useState('');
  const [denominador, setDenominador] = useState('');
  const [resultado, setResultado] = useState('');

  const handleDivision = () => {
    const num = parseFloat(numerador);
    const denom = parseFloat(denominador);

    if (isNaN(num) || isNaN(denom)) {
        setResultado('Por favor, ingresa números válidos.');
    } else {
      if (denom === 0 && num === 0) {
        setResultado('La división 0/0 es una indeterminación.');
      } else if (denom === 0) {
        setResultado('La división por cero no está definida.');
      } else {
        const divisionResult = num / denom;
        setResultado(`El resultado de la división es: ${divisionResult}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Formulario</Text>
      <TextInput
        style={styles.formulario}
        placeholder="Ingrese el numerador"
        keyboardType="numeric"
        value={numerador}
        onChangeText={setNumerador}
      />
      <TextInput
        style={styles.formulario2}
        placeholder="Ingrese el denominador"
        keyboardType="numeric"
        value={denominador}
        onChangeText={setDenominador}
      />
      <TouchableOpacity onPress={handleDivision} style={styles.boton}>
        <Text style={styles.textoC}>Calcular</Text>
      </TouchableOpacity>
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcedc8',
    height: '100%',
  },
  texto: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 12,
  },
  formulario: {
    width: '80%',
    borderWidth: 1,
    padding: 15,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 16,
  },
  formulario2: {
    width: '80%',
    borderWidth: 1,
    padding: 15,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 16,
  },
  boton: {
    borderWidth: 1,
    width: '20%',
    height: 40,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 20,
  },
  textoC: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
  },
  resultado: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
});

