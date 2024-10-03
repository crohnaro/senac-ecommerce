// pages/index.js
import React from 'react';
import ProductCard from '/components/ProductCard';
import { Grid } from '@mui/material';

const products = [
    {
        id: 1,
        name: 'Kit 5 Camisas Polo',
        description: 'Kit 5 Camisa Polo Envoy Tecido Piquet Básica Masculina',
        price: 189.99,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIfcuxE-4ExeGfUSDBE4PmGWfHeXyvp95jfOLic-xHpVIWRwLaTYkPLC86F8iZC6Rfv9UqSLd1Gpx9xDIJbr9lbHpha04xgd7trr1bhlDNXbVHiz40jn118g&usqp=CAE'
    },
    {
        id: 2,
        name: 'Camisa Camiseta Masculina Blusa Basica Streetwear 100% Algodão',
        description: 'HM.Premium: produtos direto da fábrica * Costura reforçada acabamento de ombro a ombro * Pronta entrega * Malha 100% algodão gramatura',
        price: 23.89,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkVwwRSwwOgvBzC8BQHcx5-YC1gwRo0JLa4Gs00zMig8fIaagRkqJK2DShnjfy-n944MpgVfg-poYksCigmW2adrTWhM65UOCK3tGddsBO&usqp=CAE'
    },

    {
      id: 3,
      name: 'Camiseta Streetwear',
      description: 'Camiseta Masculina Streetwear Algodão Com Estampa - Happinnes',
      price: 42.66,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQtOhof3k6Emhsv2I3NV25vvLe4nWWE4oh3BP1s4BrZeYVWNX2i8flcoykRXdAKU7jC3ayTvcnAbx6KmNX6SiWLrmqDY0o3e7b9uPRP8p5&usqp=CAE'
  },

  {
    id: 4,
    name: '2 Calças Cargo',
    description: 'Kit 2 Calças Cargo Masculina Sem Punho',
    price: 35.99,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9lOJR7_8YfWqI_84eO8N7zaeJGdbqsey0E2YQxwVpLNIxxFLrT63ynYYOgLEaDukyhIjoFnJBrhIepQ-m3maFeQwo7REJhPUiAyQuPV1mwDmDl1Vo03BHbg&usqp=CAE'
},

{
  id: 5,
  name: 'Calça Sarja',
  description: 'Calça Sarja Masculina Tradicional 100% Algodão Corte Reto',
  price: 29.99,
  image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXqEXeP7ttWkr9KbIb9wchYFVQz-Bne-OCgg6UHuOt3uA4mHhvEhjxtNVHX-38EfN_frozRNBDmfJbTqLjCBuWViX6JRtYieGCoK7tpS5K3xyE_qaWXgZ-RQ&usqp=CAE'
},

{
  id: 6,
  name: '	Calça Masculina Sarja Slim - Elastano - Esporte Fino Fusion Modas',
  description: 'MODELAGEM SLIM ** VERIFIQUE SEU TAMANHO ** * FOTO REAL DO PRODUTO *',
  price: 19.99,
  image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzveRbhNLd21P9l-VgOrbN21MiWOeYIeEIaFB538NeYfHWj5cGrhEweV68MVgBc14R0A2gGbyp_sLmAobTg7WBU-YHFCSZv6f-cDSbcSY&usqp=CAE'
},
{
  id: 7,
  name: 'Tênis Everlast Star - Preto',
  description: 'Aposte em versatilidade com o Tênis Everlast Star. Escolha que combina conforto e estilo em um calçado único.',
  price: 45.99,
  image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLJlPgkTAuG3VW4oedIQmyJEc6_PN-Bnqr4SJ1tIa7_Z2I4ebtEf0FVE7eAHKJVBOiuF3k6nBvzsrO4IOl9deIbahuzGK2cpRi3Qgt8Rkd1PE-PfY_wkMA&usqp=CAE'
},

{
  id: 8,
  name: 'Scarpin Colorido Salto Alto Elegância Sofisticação Salto Bloco Médio',
  description: 'Descubra a elegância e a sofisticação do Scarpin Salto Alto Colorido, uma peça que une estilo e conforto.',
  price: 39.99,
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7W2Os9O3ehy253jDPmcEFcYFqQJNThkgN2ss5p6uSBTBEPNDYECO1V4yAGaH1H6-mxODSo_zxk25NzEGiz6Kdcg8hCpyF63Rt-p3vIOI&usqp=CAE'
},

{
  id: 9,
  name: 'Sapato Sapatenis Casual Social Masculino Tenis 100% Couro',
  description: 'apato Sapatenis Casual Social Masculino Tenis 100% Couro Legitimo Parra Boots Encontre o equilíbrio perfeitos entre estilo, conforto e qualidade com nosso sapatenis masculino.',
  price: 31.59,
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTIZ5hRIBUDNhK3sTxO-i-kuP9im6KBlsLamK618ItHmHboxOBgnjF4lpJJW0Rv37vdx2vmLp4eH-9PWDI2JT4rAGfJI2lJuVuY8y5eS3tv0JPEgYyDqzD&usqp=CAE'
},



    
    // Adicione mais produtos conforme necessário
];

const HomePage = () => {
    return (
        <Grid container spacing={2}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default HomePage;
