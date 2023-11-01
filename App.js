import { StyleSheet, Text, View } from 'react-native';
import Servicos from './src/screens/Servicos';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import Cart from './src/screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import ServiceRoute from './src/routes/ServiceRoute';

export default function App() {
  // return <Servicos />
  return <NavigationContainer>
    <ServiceRoute />
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
