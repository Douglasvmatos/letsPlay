import React, { useState } from 'react';
import { useCallback } from 'react';
import { StyleSheet,  TextInput, View } from 'react-native';

interface IAdress {
  cep?: string,
  logradouro?: string,
  bairro?: string,
  localidade?: string,
  uf?: string,
  number?: string,
  reference?: string, 
}
        

export function SearchCEP() {
  const [address, setAdress] = useState<IAdress>({
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: '',
    number: '',
    reference: ''
  });

  console.log(address);

  const getAdressFromApi = useCallback(() => {
    fetch(`https://viacep.com.br/ws/${address.cep}/json/`)
    .then(res => res.json())
    .then((data: IAdress) => setAdress({
      bairro: data.bairro,
      localidade: data.localidade,
      logradouro: data.logradouro,
      uf: data.uf
    })).catch(err => console.log('erro: ', err))
  }, [address.cep])

  return (
      <View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o seu CEP"
          onEndEditing={() => getAdressFromApi()}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            cep: text
          }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          value={address.logradouro}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            logradouro: text
          }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={address.bairro}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            bairro: text 
          }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={address.localidade}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            localidade: text
          }))}
        />
        <TextInput
          style={styles.input}
          placeholder="UF"
          value={address.uf}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            uf: text
          }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          value={address.number}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            number: text
          }))}
        />
        <TextInput
          style={styles.input}
          placeholder="Ponto de referência"
          value={address.reference}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            reference: text
          }))}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 30,
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 18,
    marginBottom: 12,
    borderWidth: 1,
    backgroundColor: '#D1CFBF',
    fontWeight: 'bold'
  }
});