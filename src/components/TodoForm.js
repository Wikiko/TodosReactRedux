import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        if (todo.id) {
            this.props.dispatchUpdateTodo(todo);
        } else {
            this.props.dispatchAddTodo(todo.text);
        }
    }

    render() {

        const { id, text } = this.props.todo;
        const buttonTitle = id ? 'UPDATE' : 'ADD';

        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={this.onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPress}
                        title={buttonTitle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});

const mapStateToProps = state => ({
    todo: state.editingTodo
});

const mapDispatchToProps = {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);