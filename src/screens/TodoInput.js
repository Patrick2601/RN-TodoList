/* eslint-disable no-alert */
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import Buttons from '../components/Buttons';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from '../Redux/Reducers/TodoSlice';
import uuid from 'react-native-uuid';

const TodoInput = () => {
  const todoList = useSelector(state => state.todo.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleChange = value => {
    setInputValue(value);
  };
  const handleSubmit = () => {
    if (inputValue !== '') {
      const todoObj = {
        id: uuid.v4(),
        task: inputValue,
        state: false,
      };
      dispatch(addTodo(todoObj));
      alert('Task Added');
      setInputValue('');
    } else {
      alert('Please enter a task');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.textview}>
        <Text style={styles.text}>Todo List</Text>
      </View>
      <View style={styles.inputAdd}>
        <TextInput
          style={styles.testInput}
          placeholder="Enter task"
          value={inputValue}
          onChangeText={value => handleChange(value)}
        />
        <Buttons name="Add task" onPress={handleSubmit} />
      </View>
      <FlatList
        data={todoList}
        renderItem={({item}) => (
          <View style={styles.itemsView}>
            <Text style={styles.itemText}>{item.task}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#d9ed92',
  },
  text: {
    fontSize: 50,
  },
  textview: {
    alignItems: 'center',
  },
  testInput: {borderWidth: 2, borderRadius: 3, width: '60%', height: 50},
  inputAdd: {
    alignItems: 'center',
    marginTop: 40,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  itemsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderColor: '#a1c181',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    width: '80%',
    height: 60,
    marginLeft: 35,
    backgroundColor:'#98c1d9'
  },
  itemText: {
    fontSize: 20,
  },
  iconsView: {
    flexDirection: 'row',
  },
  icons: {
    marginHorizontal: 3,
  },
});

export default TodoInput;
