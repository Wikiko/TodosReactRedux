import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from '../actions';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [], toggleTodo, setEditingTodo}) => (
    <View>
        {todos.map(todo => <TodoListItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onPress={() => toggleTodo(todo.id)}
            onLongPress={() => setEditingTodo(todo)}
        />)}
    </View>
);

const styles = StyleSheet.create({

});

const mapStateToProps = ({ todos }) => ({
    todos
});

const mapDispatchToProps = {
    toggleTodo,
    setEditingTodo
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);