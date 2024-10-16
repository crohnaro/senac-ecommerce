"use client"
 
import Head from 'next/head';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { Grid, Container, Paper, Typography, Box } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import styles from '../home/home.module.css'; // Importando o CSS Module
 
 
const products = [
    {
        id: 1,
        name: 'Moletom new york',
        description: 'moletom super confrotavel feito com um dos melhores tecidos, como algodão alem disso atendemos nosso publico alergico a algodão temos o Poliéster alem do fato de possuirmos varias númerações e cores se caso não tenha a que você queira pode mandar mensagem no nosso contato',
        price: 120.99,
        image: '/item.jfif',
    },
    {
        id: 2,
        name: 'moletom',
        description: 'este produto possue duas camadas de tecido por dentro tem o tecido flanelado que mantem a temperatura do corpo e esquenta e por fora um dos melhores tecidos por ter maciez que seria algodão',
        price: 49.99,
        image: '/item1.jfif',
    },
    {
        id: 3,
        name: 'moletom feninino de pelos',
        description: 'este produto possue varias cores e tamanhos possue pelo sintetico alem do fato de ser confortavel não deixe para depois e adquira já o produto.',
        price: 140.00,
        image: '/item2.jfif',
    },
    {
        id: 4,
        name: 'all star cano alto',
        description: 'o famoso sapato que todos gostam e o queridinho do grupo ele pode ser usado com qualquer look afinal combina com tudo possui varias cores e tamanhos oque o torna sua fama nas vendas por sua versatilidade',
        price: 199.99,
        image: '/images.jfif',
    },
    {
        id: 5,
        name: 'calça',
        description: 'possui varias cores e o tecido de qualidade é uma das mais vendidas do mercado pela sua alta qualidade e baixo custo.',
        price: 89.99,
        image: '/item4.jfif',
    },
    {
        id: 6,
        name: 'Calça jeans',
        description: 'possui varias cores tamnahos para todos os publicos amantes de jeans além de ser muito confortavel.',
        price: 79.99,
        image: '/item5.jfif',
    },
    {
        id: 7,
        name: 'moletom',
        description: 'feito para agradar todos os publicos alem de possuir uma qualidade alta e diversas cores o moletom é composto por um tecido que mistura poliester e algodão tornando o confortavel e elastico',
        price: 35.99,
        image: '/item6.jfif',
    },
    {
        id: 8,
        name: 'calça legin',
        description: 'Varias cores e alem de ter varios tamanhos alem de ser anti arlegica e termica mantendo a temperatura do corpo ideal para o publico feminino que faz academia e tarde ou acabou de se aquecer.',
        price: 49.99,
        image: '/item3.jfif',
    },
    {
        id: 9,
        name: 'tenis jordan',
        description: 'o design chama atenção por onde passa estamos falando de pessoas com bom gosto e quem tem bom gosto usa esse tenis possui varios modelos e varias cores alem de ser extremamente confortavel o melhor para quem pratica esporte e quem tem estilo.',
        price: 299.99,
        image: '/item8.jfif',
    },
    // Adicione mais produtos conforme necessário
];
 
const ads = [
    'propaganda.jfif',
    '/propaganda2.jfif'
];
 
const ProductPage = () => {
    const [currentAd] = useState(0); // Simplesmente para testar
 
    return (
        <Container className={styles.home}>
            <Head>
                <title>Lista de Produtos</title>
                <meta name="description" content="Lista de produtos para compra" />
            </Head>
 
            {/* Carrossel Estático para Teste */}
            <Box sx={{ width: '100%', mb: 4 }}>
                <Paper elevation={3} sx={{ height: '300px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${ads[currentAd]})` }} />
            </Box>
 
            <h1 className={styles.title}>Lista de Produtos</h1>
 
            {/* Promoções */}
            <Container>
              
                    <Grid container spacing={4}>
                        {/* Ícones de Promoções */}
                        {/*...*/}
                    </Grid>
                
            </Container>
            <Container>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Grid container spacing={4}>
          {/* Entrega rápida */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <LocalShippingIcon fontSize="large" />
              <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                Entrega rápida a partir de R$ 10
              </Typography>
            </Box>
           
          </Grid>
 
          {/* Garantia de dinheiro */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <MonetizationOnIcon fontSize="large" />
              <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                Garantia de devolução 7 dias
              </Typography>
            </Box>
           
          </Grid>
 
          {/* 365 dias para devolução */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <WatchLaterIcon fontSize="large" />
              <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                365 dias para devolução
              </Typography>
            </Box>
           
          </Grid>
 
          {/* Pagamento */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <PaymentIcon fontSize="large" />
              <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                Pagamento sistema seguro
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Paper>
      </Container>
            {/* Lista de Produtos */}
            <Grid className={styles.product} container spacing={2}>
                {products.map((product) => (
                    <Grid className={styles.product2} item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
 
export default ProductPage;