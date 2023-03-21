import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import { NewUserEmail } from './src/pages/NewUserEmail';

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar style="auto" />
         <NewUserEmail />      
    </NativeBaseProvider>
  );
}

