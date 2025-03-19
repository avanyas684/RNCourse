import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [formValues, setFormValues] = useState([]);

  function handleChange(enteredText) {
    setInputValue(enteredText)
  }
  function handleSubmit() {
    setFormValues((pre) => [...pre, inputValue])
    setInputValue('')
  }

  function handleDelete(item) {
    // setFormValues((pre) => { return pre.filter((ele) =>  ele != item)})
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.textContainer}>
        <TextInput style={styles.inputText} placeholder='your course goal!' onChangeText={handleChange} value={inputValue} />
        <Button title='Add Goal' onPress={handleSubmit} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList alwaysBounceVertical={false} data={formValues} renderItem={(itemData) => {
          return (
            <View style={styles.gloalItem}>
               <Pressable onPress={() => handleDelete(itemData.item)} android_ripple={{color:"#dddddd"}}>
              <Text style={styles.textColor}>{itemData.item}</Text>
              </Pressable>
            </View>
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 18
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 15,
    padding: 8
  },
  goalContainer: {
    flex: 4,
    marginTop: 20,
  },
  gloalItem: {
    margin: 6,
  
    backgroundColor: "purple",
    borderRadius: 5
  },
  textColor: {
    color: "white",
    padding: 6,
  }

});
