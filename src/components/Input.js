import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText }) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value} />
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 7,
        paddingBottom: 7
    }
});

export default Input;