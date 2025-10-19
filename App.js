import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import SearchInput from './components/SearchInput';
 
export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
      <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
 
      <SearchInput placeholder="Search any city" />
    </KeyboardAvoidingView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aaff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    color: 'white',
  },
  largeText: {
    fontSize: 44,
    marginVertical: 4,
  },
  smallText: {
    fontSize: 18,
  },
});

