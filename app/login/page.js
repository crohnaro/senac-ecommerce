"use client";
import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email) {
      setEmailError('Email ou número de telefone é obrigatório.');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('A senha é obrigatória.');
    } else {
      setPasswordError('');
    }

    // Check if both fields are filled, and if not display the general login error
    if (email && password) {
      if (email !== 'valid@example.com' || password !== 'correctpassword') {
        setLoginError('Usuário ou senha incorretos');
      } else {
        setLoginError(''); // Successful login logic here
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f5',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: { xs: '90%', sm: '400px' },
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        {/* Espaço para o logo */}
        <Box mb={3}>
          <img src="/icons/bazaar-logo.png" alt="Bazaar Logo" style={{ width: 100, height: 100 }} />
        </Box>

        <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', mb: 2 }}>
          Bem-vindo ao Bazaar
        </Typography>

        <TextField
          id="email"
          fullWidth
          label="Email ou número de telefone"
          placeholder="exemplo.email.com"
          variant="outlined"
          margin="normal"
          InputProps={{
            style: { fontFamily: 'Poppins, sans-serif' },
          }}
          error={!!emailError}
          helperText={emailError}
        />

        <Box position="relative" width="100%">
          <TextField
            id="password"
            fullWidth
            label="Senha"
            placeholder="Digite sua senha"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            InputProps={{
              style: { fontFamily: 'Poppins, sans-serif' },
            }}
            error={!!passwordError}
            helperText={passwordError}
          />
          <Button
            onClick={togglePasswordVisibility}
            sx={{ position: 'absolute', right: 10, top: 15 }}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </Button>
        </Box>

        {/* Login button */}
        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{ marginTop: 2, fontFamily: 'Poppins, sans-serif' }}
          onClick={handleLogin}
        >
          Entrar
        </Button>

        {loginError && (
          <Typography variant="body2" sx={{ color: '#f44336', fontFamily: 'Poppins, sans-serif', mt: 1 }}>
            {loginError}
          </Typography>
        )}

        {/* "Esqueceu a senha?" and "Criar conta" links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <Link href="#" underline="hover" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>
            Esqueceu a senha?
          </Link>
          <Link href="#" underline="hover" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>
            Criar conta
          </Link>
        </Box>

        <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
          <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: '#777' }}>
            ou
          </Typography>
        </Box>

        {/* Botão de continuar com Google */}
        <Button
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: 1,
            borderColor: '#e0e0e0',
            color: '#333',
            padding: '10px',
            fontSize: '14px',
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
            borderRadius: '8px',
            '&:hover': {
              borderColor: '#e0e0e0',
              backgroundColor: '#f7f8fa',
            },
          }}
          startIcon={<GoogleIcon />}
        >
          continuar com google
        </Button>

        {/* Botão de continuar com Facebook */}
        <Button
          fullWidth
          variant="outlined"
          sx={{
            borderColor: '#e0e0e0',
            color: '#333',
            padding: '10px',
            fontSize: '14px',
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
            borderRadius: '8px',
            '&:hover': {
              borderColor: '#e0e0e0',
              backgroundColor: '#f7f8fa',
            },
          }}
          startIcon={<FacebookIcon />}
        >
          continuar com facebook
        </Button>
      </Box>
    </Box>
  );
}

