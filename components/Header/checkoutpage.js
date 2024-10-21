'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If still loading, show a loading message
  if (status === "loading") return <div>Loading...</div>;

  // If the user is not authenticated, redirect or show a message
  if (!session) {
    useEffect(() => {
      router.push('/auth/login');  // Redirect if not authenticated
    }, [router]);
    return <div>Você precisa estar autenticado para acessar esta página.</div>;
  }

  // If authenticated, show the protected checkout content
  return <div>Conteúdo protegido do Checkout</div>;
}

export default CheckoutPage;
