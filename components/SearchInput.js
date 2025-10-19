import { StyleSheet, TextInput, View } from 'react-native';
 
export default function SearchInput({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    backgroundColor: '#666',
    marginTop: 20,
    borderRadius: 6,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
  },
});
