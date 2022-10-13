/* eslint-disable no-alert */
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icons from 'react-native-vector-icons/FontAwesome';
import {completeTodo, deleteTodo, editTodo} from '../Redux/Reducers/TodoSlice';

const All = () => {
  const todoList = useSelector(state => state.todo.value);
  const dispatch = useDispatch();

  const [itemId, setItemId] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handelChange = value => {
    setInputValue(value);
  };

  const handelSubmit = () => {
    if (inputValue !== '') {
      const todoObj = {
        id: itemId,
        task: inputValue,
      };
      dispatch(editTodo(todoObj));
      setInputValue('');
      setItemId('');
      alert('Task Edited');
    } else {
      alert('Please Enter the Task');
    }
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={todoList}
        renderItem={({item}) =>
          itemId === item.id
            ? !item.state && (
                <View style={styles.itemsView}>
                  <TextInput
                    style={styles.inputfield}
                    defaultValue={item.task}
                    placeholder="Enter your Task "
                    keyboardType="default"
                    onChangeText={value => handelChange(value)}
                  />
                  <View style={styles.iconsView}>
                    <Icons
                      name="pencil"
                      size={20}
                      color="grey"
                      style={styles.icons}
                      onPress={() => handelSubmit()}
                    />
                  </View>
                </View>
              )
            : !item.state && (
                <View style={styles.itemsView}>
                  <Text style={styles.itemText}>{item.task}</Text>
                  <View style={styles.iconsView}>
                    <Icons
                      name="pencil"
                      size={20}
                      color="grey"
                      style={styles.icons}
                      onPress={() => setItemId(item.id)}
                    />
                    <Icons
                      name="trash"
                      size={20}
                      color="red"
                      style={styles.icons}
                      onPress={() => dispatch(deleteTodo(item.id))}
                    />
                    <Icons
                      name="check"
                      size={20}
                      color="green"
                      style={styles.icons}
                      onPress={() => dispatch(completeTodo(item.id))}
                    />
                  </View>
                </View>
              )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffd166',
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
    justifyContent: 'space-between',
    marginTop: 40,
    borderColor: '#0f4921',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    width: '80%',
    height: 60,
    marginLeft: 35,
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

export default All;
