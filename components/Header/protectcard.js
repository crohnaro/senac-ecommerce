'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ProtectCard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    useEffect(() => {
      router.push('/auth/login');
    }, [router]);
    return <div>Você precisa estar autenticado para acessar esta página.</div>;
  }

  return <div>Conteúdo protegido do Cartão</div>;
}

export default ProtectCard;
