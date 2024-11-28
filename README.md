# Organizador de Cartas

**Descrição:**  
Aplicação web desenvolvida para o cadastro de cartas de TCG (Trading Card Game), permitindo ao usuário armazenar e visualizar suas cartas de forma simples e prática. A aplicação utiliza **Next.js** para o frontend, com uma interface moderna e fluída utilizando **ShadCN** para o design de UI/UX. Os dados são armazenados localmente no navegador usando **localStorage** (não há backend ou API, o que facilita a utilização sem necessidade de configuração adicional).

Acesse o site ao vivo: [Organizador de Cartas](https://organizador-de-cartas.vercel.app/)

---

### Desenvolvido para o Projeto de Mentoria

Esta aplicação foi desenvolvida como parte do projeto de mentoria com o mentor **Leandro Ribeiro**. O objetivo foi criar uma ferramenta simples e eficiente para gerenciar cartas de TCG, sem complicações e com foco em uma boa experiência do usuário.

---

### Funcionalidades

- **Cadastro de Cartas:** Adicione informações de suas cartas de TCG como nome, tipo, raridade e outros atributos.
- **Armazenamento Local:** As informações inseridas são salvas no **localStorage** do navegador, garantindo que seus dados fiquem disponíveis mesmo após o fechamento do navegador.
- **Interface Simples e Intuitiva:** Desenvolvida com o **ShadCN** para proporcionar uma experiência de usuário moderna e responsiva.
- **Sem API (Frontend-only):** O projeto não possui backend, com todos os dados sendo gerenciados diretamente no frontend, sem necessidade de servidores ou APIs externas.

---

### Tecnologias Usadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e lado do cliente (CSR).
- **ShadCN**: Biblioteca de componentes de UI/UX, que garante uma interface simples, moderna e acessível.
- **localStorage**: Utilizado para persistir dados no navegador do usuário, sem necessidade de API ou banco de dados.
- **React**: Utilizado no frontend para construir a UI interativa e dinâmica.

---

### Como Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/LeonamOliveira/organizador-de-cartas

2. **Entre no diretório do projeto**:
   ```bash
   cd organizador-de-cartas

3. **Instale as dependências**: 
    Com o Node.js já instalado, execute:
   ```bash
    npm install

4. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
A aplicação estará disponível em http://localhost:3000.

### Estrutura do Projeto

- **components/**
  - Contém componentes reutilizáveis, como o formulário de cadastro de cartas e outros elementos da interface.
  
- **cards/**
  - Diretório que pode conter dados ou funções específicas para manipulação das cartas de TCG.
  
- **lib/**
  - Funções utilitárias e bibliotecas para manipulação de dados.

---

### Contribuições

Contribuições são bem-vindas! Se você gostaria de ajudar no desenvolvimento deste projeto, siga os passos abaixo:

1. **Fork o repositório**.
2. **Crie uma branch** para sua contribuição:
   ```bash
   git checkout -b minha-contribuicao
3. **Faça suas alterações e commit:**
   ```bash
   git commit -m "Descrição do que foi feito"
4. **Push para sua branch**:
   ```bash
   git push origin minha-contribuicao
5. **Abra um pull request explicando o que foi feito e por que a alteração é necessária.

### Autores

- **Mentoria com Leandro**  
  **Desenvolvedor:** [Leonam Oliveira]((https://github.com/LeonamOliveira))

### Screenshots

Aqui estão algumas capturas de tela da aplicação em funcionamento:

1. **Tela Inicial com o Formulário de Cadastro de Cartas**  

2. **Lista Inicial Sem Cartas Cadastradas**  

3. **Deleção de Cartas Cadastradas**  

4. **Edição de Cartas Cadastradas**  


