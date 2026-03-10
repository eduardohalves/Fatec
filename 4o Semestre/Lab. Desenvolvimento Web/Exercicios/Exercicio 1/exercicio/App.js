import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [info, setInfo] = useState({ texto: '', cor: '#000' });

  const calcular = () => {
    let p = parseFloat(peso.replace(',', '.'));
    let a = parseFloat(altura.replace(',', '.'));

    if (p > 0 && a > 0) {
      if (a > 3) a = a / 100;

      const valor = (p / (a * a)).toFixed(2);
      setImc(valor);
      
      let res = { texto: '', cor: '' };

      if (valor < 18.5) res = { texto: 'Abaixo do Peso', cor: '#FFD700' };
      else if (valor <= 24.9) res = { texto: 'Peso Normal (Eutrofia)', cor: 'green' };
      else if (valor <= 29.9) res = { texto: 'Sobrepeso', cor: '#DAA520' };
      else if (valor <= 34.9) res = { texto: 'Obesidade Grau I', cor: '#FF4500' };
      else if (valor <= 39.9) res = { texto: 'Obesidade Grau II (Severa)', cor: 'red' };
      else res = { texto: 'Obesidade Grau III (Mórbida)', cor: '#8B0000' };

      setInfo(res);
    }
  };

  const limpar = () => {
    setPeso('');
    setAltura('');
    setImc(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m ou cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcular} />
      <View style={{ marginTop: 10 }}>
        <Button title="Limpar" onPress={limpar} color="gray" />
      </View>

      {imc && (
        <View style={styles.res}>
          <Text>IMC: {imc}</Text>
          <Text style={{ color: info.cor, fontWeight: 'bold' }}>{info.texto}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  res: {
    marginTop: 20,
    alignItems: 'center'
  }
});