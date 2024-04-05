import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RoundedButton } from '../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/MainAppStack';
import { styles } from '../styles/LoginStyle';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { }

export const LoginScreen = ({ navigation, route }: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password);
    }


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
                    {/* Email Input */}
                    <View>
                        <View style={styles.formInput}>
                            <Image
                                style={styles.formIcon}
                                source={require('../../../assets/user-email-2.png')}
                            />

                            <TextInput
                                style={styles.formTextInput}
                                placeholder="correo@correo.com"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={text => setEmail(text)}
                                secureTextEntry={false}
                            />
                        </View>
                    </View>

                    {/* Password Input */}
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
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton
                            text='Ingresar'
                            onPress={() => handleLogin()}
                            isDisabled={false}
                        />
                        <View style={styles.formLogin}>
                            <Text style={{ fontWeight: '500' }}>No tienes cuenta?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('RegisterScreen')}
                            >
                                <Text style={styles.formRegisterText}>Registrate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
