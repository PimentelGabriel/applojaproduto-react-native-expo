import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Colors from './../../../assets/Colors';


const telaW = Dimensions.get('window').width;
const telaH = Dimensions.get('window').height;


// width: ${telaW * 0.9}px;

const Pagina = styled.View`
    flex: 1;
    align-items: center;
`;

const UserName = styled.Text`
    width: 100%;
    font-size: ${parseInt(telaW/23)}px;
    text-align: right;
    padding: 7px ${parseInt(telaW*0.05)}px;
    background-color: ${Colors.CorA[1]};
`;

const ProdsCtn = styled.View`
    flex: 1;
    width: ${parseInt(telaW)}px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;    
    
    justify-content: flex-start;
    padding: 10px ${telaW * 0.02}px;
`;


const CardProdCtn = styled.TouchableOpacity`
    width: ${parseInt(telaW * 0.442)}px;
    minHeight: ${parseInt(telaH * 0.285)}px;
    padding: 3px 0px;
    background-color: ${Colors.CorB[1]};
    border-radius:  ${parseInt(telaH * 0.01)}px;
    border: 1.5px solid ${Colors.CorB[3]};
    margin: ${parseInt(telaW * 0.02)}px;
`;

const ImgProdCtn = styled.View`
    align-items: center;
`;

const ImgProd = styled.Image`
    background-color: #fff;
    width: ${parseInt(telaW * 0.39)}px;
    height: ${parseInt(telaH * 0.20)}px;
`;

const InfoProdCtn = styled.View`
    align-items: flex-start;
    padding: 5px ${parseInt(telaW * 0.0169)}px;
`;

const ProdNome = styled.Text`
    font-size: ${parseInt(telaW / 23)}px;
`;

const ValorProd = styled.Text`
    font-weight: bold;
`;

const Produto = [
    {
        "key": 1,
        "nome": "Goiabada Predilecta",
        "image": {
            "data": require("./../../img/produtos/goiabada-529.png"),
            "path": "./../../img/produtos/goiabada-529.png",
            "nameFile":  "goiabada-529.png"
        },
        "valor": 15,
        "qtd": 25,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 2,
        "nome": "Arroz Tio João",
        "image": {
            "data": require("./../../img/produtos/arroz-tio-joao-branco-1kg-288.jpg"),
            "path": "./../../img/produtos/arroz-tio-joao-branco-1kg-288.jpg",
            "nameFile":  "arroz-tio-joao-branco-1kg-288.jpg"
        },
        "valor": 20,
        "qtd": 50,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 3,
        "nome": "Azeitona Cepera",
        "image": {
            "data": require("./../../img/produtos/azeitona-verde-fatiada-651.png"),
            "path": "./../../img/produtos/azeitona-verde-fatiada-651.png",
            "nameFile":  "azeitona-verde-fatiada-651.png"
        },
        "valor": 7,
        "qtd": 10,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 4,
        "nome": "Bolacha Salgada Isabela",
        "image": {
            "data": require("./../../img/produtos/bolacha.png"),
            "path": "./../../img/produtos/bolacha.png",
            "nameFile":  "bolacha.png"
        },
        "valor": 4,
        "qtd": 39,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 5,
        "nome": "Bolacha Parati",
        "image": {
            "data": require("./../../img/produtos/bolacha-agua-e-sal-404.png"),
            "path": "./../../img/produtos/bolacha-agua-e-sal-404.png",
            "nameFile":  "bolacha-agua-e-sal-404.png"
        },
        "valor": 9,
        "qtd": 500,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 6,
        "nome": "Óleo de Gira Sol Liza",
        "image": {
            "data": require("./../../img/produtos/oleo-liza-girassol-900ml-232.jpg"),
            "path": "./../../img/produtos/oleo-liza-girassol-900ml-232.jpg",
            "nameFile":  "oleo-liza-girassol-900ml-232.jpg"
        },
        "valor": 39,
        "qtd": 25,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 7,
        "nome": "Fafora de Banana Mãe Terra",
        "image": {
            "data": require("./../../img/produtos/farofa-mae-terra-banana-200g-134.png"),
            "path": "./../../img/produtos/farofa-mae-terra-banana-200g-134.png",
            "nameFile":  "farofa-mae-terra-banana-200g-134.png"
        },
        "valor": 27.5,
        "qtd": 25,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    },
    {
        "key": 8,
        "nome": "Polenta Polentina Quaker",
        "image": {
            "data": require("./../../img/produtos/polentina-quaker-500g-856.jpg"),
            "path": "./../../img/produtos/polentina-quaker-500g-856.jpg",
            "nameFile":  "polentina-quaker-500g-856.jpg"
        },
        "valor": 1,
        "qtd": 25,
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra et nisi ac sodales. Suspendisse ullamcorper gravida sapien, at pharetra magna maximus in. Etiam ultricies nisi ut ultrices tempus. Donec."
    }

];


export default function ({route, navigation}){
    
    var Cards = new Array();
    
    function CardMaker(Produto){
        return(
            <CardProdCtn key={Produto.key.toString()}
                onPress={()=>{
                    navigation.navigate('TelaDetalheProduto', [Produto, route.params.user])
                }}
            >
                <ImgProdCtn>
                    <ImgProd
                        source={Produto.image.data}
                        resizeMode="stretch"
                    />
                </ImgProdCtn>
                <InfoProdCtn>
                    <ProdNome numberOfLines={1}>
                        {Produto.nome}
                    </ProdNome>
                    <ValorProd>
                        R$ {Produto.valor.toFixed(2)}
                    </ValorProd>
                </InfoProdCtn>
            </CardProdCtn>
        );
    }

    for(let i=0; i<Produto.length;i++){
        Cards.push(CardMaker(Produto[i]));
    }
    
    return (
        <Pagina>
            <UserName>
                Usuário: {route.params.user}
            </UserName>
            <ScrollView>
                <ProdsCtn>
                    {Cards}
                </ProdsCtn>
            </ScrollView>
        </Pagina>
    );
}