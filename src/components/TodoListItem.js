import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoListItem = ({ id, text, done = false, onPress, onLongPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.line}>
                <Text style={[
                    styles.lineText,
                    done ? styles.lineThough : null
                ]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    },
    lineThough: {
        textDecorationLine: 'line-through'
    }
});

export default TodoListItem;