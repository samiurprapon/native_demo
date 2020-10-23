import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const textChangeListener = (text) => {
        setText(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='text..'
                onChangeText={textChangeListener}
                value={text}
            />

            <Button color='coral'  onPress={() => {submitHandler(text) }} title='add todo' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});