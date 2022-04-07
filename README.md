<h1 align="center">
    <a href="https://github.com/augustojs1/leet-banking-api">🏦  Leet Banking Web Client</a>
    
</h1>
<p align="center">💸 Gerencie seus gastos, renda, saldo, transações e recupere seu controle financeiro em tempo real.</p>

<!--ts-->

- [Tabela de Conteudo](#tabela-de-conteudo)
- [Features](#features)
- [Funcionamento e solução](#funcionamento-e-solução)
- [Como usar](#como-usar)
  - [Pré Requisitos](#pré-requisitos)
  - [Rodando o Leet Banking Web Client](#🔥rodando-o-leet-banking-web-client)
- [Tecnologias](#🛠tecnologias)
- [Avaliação](#avaliação)
- [Próximas Features](#próximas-features)
- [Autor](#autor)
<!--te-->

<h4 align="center"> 
	🚧  Leet Banking Web Client 💸 Em aprimoramento...  🚧
</h4>

### Features

- [x] Cadastro de usuário
- [x] Login de usuário
- [x] Cadastro de transações do tipo renda
- [x] Cadastro de transações do tipo gastos
- [x] Visualização de saldo em tempo real
- [x] Visualização do total de gastos e renda em tempo real

### Funcionamento e solução

Desenvolvi um SPA com duas rotas: A primeira é a tela para autenticação com um formulário para preencher os dados de email e senha para o login. Caso não tenha uma conta cadastrada há um botão no header que abre um modal para o cadastro de um novo usuário. A segunda tela é o dashboard que poderá ser acessado apenas para usuários autenticados. No header há um botão para a criação de uma nova transação de gasto ou de renda que irá atualizar a tabela no dashboard com o extrato e também irá atualizar em tempo real todas as informações de saldo, gastos totais e renda total. Para o layout da dashboard segui um layout já existente no Figma de uma aplicação desenvolvida em um bootcamp e criei a página de login do zero me inspirando no mesmo layout.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Para visualizar e editar o código pode também utilizar um editor de código [VSCode](https://code.visualstudio.com/).

### 🔥 Rodando o Leet Banking Web Client

```bash
# Clone este repositório
$ git clone https://github.com/augustojs1/leet-banking-app

# Acesse a pasta do projeto utilizando a linha de comando
$ cd leet-banking-app

# Instale as dependências
$ npm install

# Instale e configure o servidor seguindo a documentação deste repositório
https://github.com/augustojs1/leet-banking-api

# Com o servidor configurado e rodando execute a aplicação em modo de desenvolvimento
$ npm run start

# Acesse a aplicação em seu browser http://localhost:3000

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React.js](https://pt-br.reactjs.org/)
  - Por ser meu foco de estudos atual e uma das principais bibliotecas para o desenvolvimento de SPA's.
- [TypeScript](https://www.typescriptlang.org/)
  - Para trabalhar com tipagem e uma melhor padronização de código e experiência de desenvolvimento.
- [Axios](https://axios-http.com/ptbr/docs/intro)
  - Pela vantagem, produtividade e features adicionais do que o fetch nativo do JavaScript para chamadas HTTP.
- [React Router](https://reactrouter.com/)
  - Para navegação entre telas.
- [Styled Components](https://styled-components.com/)
  - Para trabalhar com CSS-In-JS e ter a vantagem de trabalhar com a lógica de uma linguagem de programação juntamente com o CSS.
- [React Tostify](https://fkhadra.github.io/react-toastify/introduction)
  - Para dar feedback ao usuário de forma rápida sem precisar configurar e desenvolver os componentes e lógica do zero o que poupa tempo.
- [Git Commit Message Linter](https://github.com/legend80s/commit-msg-linter)
  - Para padronizar e forçar boas práticas de commit.

### Avaliação

Gostaria de ser avaliado pela modularidade das funcionalidades, arquitetura do projeto, pela separação de responsabilidade dos componentes, pela fidelidade ao [layout](<https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1>) original, pelo cumprimento de todos os requisitos do projeto, pela atenção a acessibilidade e feedback para o usuário e pela facilidade de se utilizar e entender a aplicação.

Apesar da descrição do desafio conter o prazo de 7 dias para a entrega do projeto, recebi com o tempo de 3-4 dias para finalizar. Assim, me atentei em cumprir e seguir todos os requisitos funcionais do projeto. Portanto, gostaria aqui de excluir da avaliação a implementação de testes, um novo layout responsivo ao invés de apenas adaptar o atual, implementação de novas funcionalidades e a utilização de Yup e React Hook Form para acessibilidade total do usuário nos formulários. Devido a gerencia de tempo que precisei fazer resolvi controlar os inputs com algumas ferramentas já nativas do React.

### Próximas Features

- [ ] Testes Unitários e Testes de Integração
- [ ] React Hook Form e Yup para controlar os formulários
- [ ] Páginação dos extratos e área para usuários
- [ ] Deploy da aplicação em produção

### Autor

---

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56443909?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Augusto Souza 👨‍💻 </b></sub></a>

Coded with ❤️ by Augusto Souza 👋🏽 Get in contact!

[![Linkedin Badge](https://img.shields.io/badge/-Augusto_Souza-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/augustojs1/)
[![Gmail Badge](https://img.shields.io/badge/-augustojsouza1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:augustojsouza1@gmail.com)](mailto:augustojsouza1@gmail.com)
