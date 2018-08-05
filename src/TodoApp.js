import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './reducers';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const store = createStore(rootReducer, devToolsEnhancer());

class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
});

export default TodoApp;