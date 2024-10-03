

# Simulação de E-commerce - Projeto Next.js

## Visão Geral - Fase 1

Este projeto é uma simulação de uma plataforma de e-commerce desenvolvida pelos alunos. O foco inicial será na construção da interface do usuário, seguida pelo desenvolvimento do back-end e da camada de dados. O projeto utiliza Next.js como framework e MUI (Material-UI) para os componentes da interface.

O projeto será dividido em diferentes funcionalidades, atribuídas a grupos de estudantes (duplas ou um trio). Cada grupo será responsável por desenvolver uma parte específica da interface front-end. Após completar a interface, avançaremos para as outras camadas da aplicação.


## Funcionalidades Atribuídas

Cada dupla/trio será responsável pela implementação de uma funcionalidade específica da interface. Abaixo estão as atribuições de funcionalidades:

- Yan & Vitor Hugo: Página de Login
- Welker & Tais: Componente de Card de Produto
- Vitor & Richard: Página de Listagem de Produtos
- Lorran & Davi Vale: Barra de Navegação
- Daniel & Erica: Página de Checkout
- Raphael & Davi: Página de Detalhes do Produto
- Augusto, Arthur & Pedro: Carrinho de Compras

## Estrutura do Projeto

O projeto é construído com Next.js e utiliza MUI para estilização e layout dos componentes. Os alunos focarão nos seguintes pontos:

- Criar componentes reutilizáveis para a interface.
- Cada funcionalidade terá sua própria branch de desenvolvimento.
- Testar componentes em páginas dedicadas antes de integrá-los ao projeto.

# Stack Tecnológico 

- Next.js (Framework React)
- MUI (Material-UI) (Biblioteca de componentes de interface)

## Branches e Pull Requests

Cada grupo trabalhará em sua funcionalidade em uma branch separada. Os nomes das branches devem corresponder à funcionalidade que estão desenvolvendo. Por exemplo:

- Yan & Vitor Hugo trabalharão na página de login na branch /login.
- Welker & Tais trabalharão no card de produto na branch /product-card.

# Fluxo de Trabalho:

1. Fork do Repositório: Cada aluno deve fazer o fork do repositório principal para sua própria conta no GitHub..

2. Criar uma Branch para Sua Funcionalidade: Após o fork, crie uma branch que corresponda à funcionalidade que está desenvolvendo (por exemplo, /login, /product-card).

3. Atualize Seu Fork: Antes de começar qualquer desenvolvimento, sempre garanta que seu fork esteja atualizado com as últimas mudanças da branch master:

```
git fetch origin
git pull origin master
```

4. Desenvolva e Teste:

- Enquanto desenvolve um componente, crie uma página de teste para garantir que tudo funcione como esperado. Esta página é apenas para testes internos e não deve ser incluída na PR final.
- Por exemplo, se você está trabalhando no card de produto, crie uma página onde você possa ver o componente renderizado na tela e testar seu comportamento.

5. Submeta Apenas o Componente: Uma vez que sua funcionalidade esteja pronta, não envie a página de teste. Envie apenas a pasta e o(s) arquivo(s) respectivo(s) à sua funcionalidade (por exemplo, components/Card.js).

6. Abra uma Pull Request: Quando estiver pronto, submeta sua funcionalidade por meio de uma pull request para a branch correspondente:

- Yan & Vitor Hugo enviarão uma PR para /login.
- Welker & Tais enviarão uma PR para /product-card.
- E assim por diante.

## Boas Práticas

- Sempre Atualize Seu Repositório: Antes de iniciar qualquer novo trabalho, sempre atualize seu repositório para a versão mais recente:

```
git fetch origin
git pull origin master

```

- Commits Pequenos: Faça commits incrementais e frequentes. Isso ajuda a evitar commits grandes e difíceis de gerenciar.

- Rebase com Master: Após o merge de uma pull request de outro grupo, garanta que você faça o rebase da sua branch com a versão mais recente da master:

```
git fetch origin
git rebase origin/master

```

- Isso evita conflitos antes de enviar sua pull request.

- Commits Claros e Objetivos: Use mensagens de commit descritivas, como "Adicionada validação do formulário de login" ou "Criado componente reutilizável de card de produto".


## Conclusão

Este projeto simula um cenário de desenvolvimento real, onde cada grupo contribui independentemente para construir uma aplicação coesa. Certifique-se de colaborar, seguir sua funcionalidade atribuída e respeitar o fluxo de trabalho para garantir uma integração suave entre todas as funcionalidades.

Boa sorte e vamos construir algo incrível juntos!