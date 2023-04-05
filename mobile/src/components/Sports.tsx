import { Box, Center, CheckIcon, Select } from 'native-base'
import React from 'react';

export const Sports = () => {
    const [service, setService] = React.useState("");
    return <Center>
        <Box w='full' px={7}>
          <Select 
          selectedValue={service} 
          minWidth="200" 
          h={10} 
          bg='gray.800' 
          fontWeight='bold' 
          color='white' 
          fontSize={'xl'} 
          accessibilityLabel="Escolha o esporte" 
          placeholder="Escolha o esporte" 
          _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Futebol" value="soccer" />
            <Select.Item label="Futebol Americano" value="American soccer" />
            <Select.Item label="CrossFit" value="crossfit" />
            <Select.Item label="Kickboxing" value="kickboxing" />
            <Select.Item label="Kitesurfe" value="kitesurfe" />
            <Select.Item label="Mountain Biking" value="mountainBiking" />
            <Select.Item label="Slackline" value="slackline" />
          </Select>
        </Box>
      </Center>;
  };


