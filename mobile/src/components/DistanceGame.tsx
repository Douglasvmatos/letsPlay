import { Box, View, CheckIcon, Select } from 'native-base'
import React from 'react';

export const DistanceGame = () => {
    const [service, setService] = React.useState("");
    return <View marginTop={-4}>
          <Select 
          selectedValue={service} 
          minWidth="120" 
          bg='gray.800' 
          height={16}
          fontWeight='bold' 
          margin={0}
          color='white' 
          fontSize={'xl'} 
          accessibilityLabel="Raio" 
          placeholder="Raio" 
          _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />}} 
          onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="1 KM" value="1" />
            <Select.Item label="2 KM" value="2" />
            <Select.Item label="3 KM" value="3" />
            <Select.Item label="4 KM" value="4" />
            <Select.Item label="5 KM" value="5" />
            <Select.Item label="10 KM" value="10" />
            <Select.Item label="10+ KM" value="10+" />
          </Select>
          </View>;
  };


