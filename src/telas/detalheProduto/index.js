import React from 'react';
import {ScrollView, Dimensions, View, Text} from 'react-native';
import styled from 'styled-components/native';
import {CommonActions} from '@react-navigation/native';

import Colors from './../../../assets/Colors';

const telaW = Dimensions.get('window').width;
const telaH = Dimensions.get('window').height;

const Pagina = styled.View`
    padding: 10px ${telaW * 0.05}px;
    align-items: center;
`;

const ImageProd = styled.Image`
    background-color: #fff;
    width: ${telaW}px;
    height: ${telaH * 0.5}px;
`;

const TextCtn = styled.View`
`;

const ProdNome = styled.Text`
    margin: 15px 0px 5px;
    font-size: ${parseInt(telaW / 15)}px;
`;

const ValorQtdCtn = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
`;

const ValorProd = styled.Text`
    font-weight: bold;
    font-size: ${telaW / 25}px;
`;
    
const Qtd = styled.Text`
    font-size: ${telaW / 25}px;
`;

const Descricao = styled.Text`
    text-align: justify;
    margin-bottom: 30px;
`;

const PayWayTxt = styled.Text`
    text-align: center;
    font-size: ${telaW/20}px;
`;

const PayWayCtn = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0px;
    `;
    
const PayWayBtn = styled.TouchableOpacity`
    height: ${telaW/5}px;
    background-color: rgba(255,162,162,0.3);
    padding: 10px 15px ;
`;
    
const PayWay = styled.Image`
    width: ${telaW/2.9}px;
    height: ${telaW/6.9}px;
`;

export default function ({route, navigation}){
  
    return (
        <ScrollView>
        <Pagina>
            <ImageProd
                source={route.params[0].image.data}
                resizeMode='stretch'
            />
            <TextCtn>
                <ProdNome>
                    {route.params[0].nome}
                </ProdNome>
                <ValorQtdCtn>
                    <ValorProd>
                        R$ {route.params[0].valor.toFixed(2)}
                    </ValorProd>
                    <Qtd>
                        Qtd. Estoque: {route.params[0].qtd}
                    </Qtd>
                </ValorQtdCtn>
                <Text>
                    Descrição:
                </Text>
                <Descricao>{'\t'} {route.params[0].desc}
                </Descricao>
                <PayWayTxt>
                    Encerrar Compra usando:
                </PayWayTxt>
                <PayWayCtn>
                    <PayWayBtn
                        onPress={()=>{
                            navigation.navigate('TelaHome');
                        }}
                        >
                        <PayWay
                            source={require('./../../img/logo/picpay.png')}
                            resizeMode='cover'
                            />
                    </PayWayBtn>
                    <PayWayBtn
                            onPress={()=>{
                                navigation.navigate('TelaHome');
                            }}
                    >
                        <PayWay
                            source={require('./../../img/logo/pix.png')}
                            resizeMode='cover'
                        />
                    </PayWayBtn>
                </PayWayCtn>
            </TextCtn>
        </Pagina>
        </ScrollView>
    );
}