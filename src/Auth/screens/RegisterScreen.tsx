import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/MainAppStack';
import { styles } from '../styles/RegisterStyle';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> { }

export const RegisterScreen = ({ navigation, route }: Props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    const handleRegister = () => {
        console.log(password);
    }

    const handleTextChange = (password:string, confirmPassword:string):void => {

        setPassword(password);
        setConfirmPassword(confirmPassword);

        const areSamePassword = (password === confirmPassword);
        setIsDisabled(areSamePassword ? false : true);
    };


    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../assets/background.webp')}
            />
            <View style={{ ...styles.form, height: '55%' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >

                    {/*Input usuario */}
                    <View>
                        <View style={styles.formInput}>
                            <Image
                                style={styles.formIcon}
                                source={require('../../../assets/user-email-2.png')}
                            />

                            <TextInput
                                style={styles.formTextInput}
                                placeholder="Fernando Herrera"
                                keyboardType="default"
                                value={username}
                                onChangeText={text => setUsername(text)}
                                secureTextEntry={false}
                            />
                        </View>
                    </View>

                    {/*Input Password*/}
                    <View>
                        <View style={styles.formInput}>
                            <Image
                                style={styles.formIcon}
                                source={require('../../../assets/password-2.png')}
                            />

                            <TextInput
                                style={styles.formTextInput}
                                placeholder="******"
                                keyboardType="default"
                                value={password}
                                onChangeText={password=>handleTextChange(password,confirmPassword)}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    {/* Input Confirm Password */}
                    <View>
                        <View style={styles.formInput}>
                            <Image
                                style={styles.formIcon}
                                source={require('../../../assets/password-2.png')}
                            />

                            <TextInput
                                style={styles.formTextInput}
                                placeholder="******"
                                keyboardType="default"
                                value={confirmPassword}
                                onChangeText={confirmPassword=>handleTextChange(password,confirmPassword)}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton
                            text='Registrar'
                            isDisabled={isDisabled}
                            onPress={() => handleRegister()}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
