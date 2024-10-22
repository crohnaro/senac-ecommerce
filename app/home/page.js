"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import { Grid, Container, Paper, Typography, Box } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import styles from './home.module.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Função para buscar produtos da API
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Erro ao carregar produtos');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(); // Chama a API ao carregar o componente
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Container className={styles.home}>
            <Head>
                <title>Lista de Produtos</title>
                <meta name="description" content="Lista de produtos para compra" />
            </Head>

            <h1 className={styles.title}>Lista de Produtos</h1>

            {/* Promoções */}
            <Container>
                <Paper elevation={3} sx={{ padding: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <LocalShippingIcon fontSize="large" />
                                <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                                    Entrega rápida a partir de R$ 70
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <MonetizationOnIcon fontSize="large" />
                                <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                                    Garantia de devolução 7 dias
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <WatchLaterIcon fontSize="large" />
                                <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
                                    60 dias para devolução
                                </Typography>
                            </Box>
                        </Grid>
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
                {products.length === 0 ? (
                    <Typography variant="h6">Nenhum produto encontrado</Typography>
                ) : (
                    products.map((product) => (
                        <Grid className={styles.product2} item xs={12} sm={6} md={4} key={product._id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default ProductPage;