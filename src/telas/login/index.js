import React, {useState} from 'react';
import {Dimensions, KeyboardAvoidingView, Text} from 'react-native';
import styled from 'styled-components/native';
import {CommonActions} from '@react-navigation/native';

import Colors from '../../../assets/Colors';

const telaW = Dimensions.get('window').width;
const telaH = Dimensions.get('window').height;

const Pagina = styled.View`
    padding: 10px ${telaW * 0.05}px;
    align-items: center;
`;

const AreaImg = styled.View`
    margin: 100px 50px 100px;
`;

const ImageLogo = styled.Image`
    width: ${parseInt(telaW*0.8)}px;
    height: ${parseInt(telaW*0.20)}px;
`;

const NomeApp = styled.Text`
    text-align: center;
    font-size: ${parseInt(telaW / 12)}px;
    color: ${Colors.CorA[0]} 
    margin-top: 9px;
    margin-bottom: -9px;
`;
    
const Slogan = styled.Text`
    margin-top: 0;
    padding-top: 0;
    text-align: center;
    font-size: ${parseInt(telaW / 23)}px;
    color: ${Colors.CorC[0]} 
`;

const LoginArea = styled.View`
    align-items: center;
`;

const LoginInput = styled.TextInput`
    padding: 5px 15px;
    width: ${parseInt(telaW * 0.8)}px;
    font-size: ${parseInt(telaH/30)}px;
    background-color: rgba(0, 0, 0, 0);
    border: 1.5px solid ${Colors.CorC[3]}
    border-radius: 15px;
`;

const Button = styled.TouchableOpacity`
    width: ${parseInt(telaW * 0.5)}px;
    background-color: ${Colors.CorD[2]};
    margin: 25px 50px 50px;
    border-radius: 15px;
`;

const TextBtn = styled.Text`
    text-align: center;
    padding: 5px;
    font-size: ${parseInt(telaH/30)}px;
`;

export default function TelaLogin({navigation}){
    const [nomeUser, setNomeUser] = useState('');
    const [erroInput, setErroInput] = useState(false);
    
    function NomeInvalido(){
        
    }


    return (
        <Pagina>
            <KeyboardAvoidingView behavior="position" enabled>
            <AreaImg>
                <ImageLogo
                    source={require('./../../img/logo/logo.png')}
                    resizeMode='contain'
                />
                <NomeApp>
                    Baratinho
                </NomeApp>
                <Slogan>
                    Mais rápido do você imagina
                </Slogan>
            </AreaImg>
            <LoginArea>
                <LoginInput
                    placeholder="Digite seu nome"
                    value={nomeUser}
                    autoCorrect={false}

                    onChangeText={nomeUser => {
                        setNomeUser(nomeUser);
                        if(nomeUser.length > 1){
                            setErroInput(false);
                        }
                    }}
                />
                {erroInput && <Text
                    style={{
                        color: '#f00',
                        fontSize: 17,
                        fontWeight: 'bold', 
                    }}
                >
                    *Você deve escrever seu nome
                </Text>}
                <Button
                    onPress={() =>{
                        if(nomeUser.length > 1){
                            navigation.navigate('TelaHome', {
                                "user": nomeUser
                            });
                        }else{
                            setErroInput(true);
                        }

                        }
                    }
                >
                    <TextBtn>
                        Entrar
                    </TextBtn>
                </Button> 
            </LoginArea>
            </KeyboardAvoidingView>
        </Pagina>
    );
}

/*
    navigation.dispatch(
                          CommonActions.reset({
                            index: 1,
                            routes: [
                              {
                                name: 'TelaHome',
                                params: {user: nomeUser},
                              },
                              { name: 'TelaHome' },
                            ],
                          })
                        )
*/