// components/ProductForm/ProductForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ProductForm = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = { name, description, category, price: parseFloat(price), image };
        onProductAdded(newProduct); // Chama a função do pai para adicionar o produto

        // Limpa o formulário
        setName('');
        setDescription('');
        setCategory('');
        setPrice('');
        setImage('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <TextField
                label="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <TextField
                label="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <TextField
                label="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <TextField
                label="Preço"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <TextField
                label="Imagem URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained">Adicionar Produto</Button>
        </Box>
    );
};

export default ProductForm;
