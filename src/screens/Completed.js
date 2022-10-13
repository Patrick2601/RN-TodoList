import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Completed = () => {
  const todoList = useSelector(state => state.todo.value);

  return (
    <View style={styles.main}>
      <FlatList
        data={todoList}
        renderItem={({item}) =>
          item.state && (
            <View style={styles.itemsView}>
              <Text style={styles.itemText}>{item.task}</Text>
              <Icon name="check-circle" size={20} style={styles.icon} />
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
    backgroundColor: '#619b8a',
  },

  itemsView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    borderColor: '#fff3b0',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    width: '60%',
    height: 60,
    marginLeft: 80,
    backgroundColor: '#98c1d9',
  },
  itemText: {
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
    color: 'green',
  },
});

export default Completed;
