"use client";
import Carrinho from './Carrinho';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const addToCart = (item) => {
    const existingItem = itemsInCart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setItemsInCart([...itemsInCart]);
    } else {
      setItemsInCart([...itemsInCart, { ...item, quantity: 1 }]);
    }
  };

  const handleCartClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ position: 'relative' }}>
      <IconButton style={{ position: 'absolute', top: 16, right: 16 }} onClick={handleCartClick}>
        <Badge badgeContent={itemsInCart.reduce((total, item) => total + item.quantity, 0)} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>
          Camiseta Nike
        </Typography>
        <Image
          src="/camiseta.webp"
          alt="Camiseta Nike"
          width={300}
          height={300}
        />
        <Typography variant="h6" gutterBottom>
          R$ 149,99
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart({ id: 'produto1', name: 'Camiseta Nike', price: 149.99, imageUrl: '/camiseta.webp' })}>
          Adicionar ao Carrinho
        </Button>
      </Box>

      <Carrinho itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} addToCart={addToCart} open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
}
