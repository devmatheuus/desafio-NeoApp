# MARVEL COMICS

_Bem vindo ao **MARVEL COMICS**!!!_

O projeto tinha como principais objetivos tornar a interface do usuário (UI) mais declarativa e simples, além de utilizar conceitos de responsividade e desempenho para garantir uma boa experiência ao usuário final.

Para atingir esses objetivos, me concentrei em criar uma interface intuitiva e fácil de usar, com elementos visuais claros e bem organizados. Foi utilizado um design responsivo para garantir que a interface se adaptasse perfeitamente a diferentes dispositivos, tamanhos de tela e orientações.

Outra preocupação foi com o desempenho da aplicação. Para isso, adotei boas práticas de programação, como o uso de estruturas de dados eficientes e otimização de código, com o objetivo de evitar cálculos e re-renderizações desnecessárias.

No geral, o projeto foi desenvolvido com foco no usuário final, priorizando uma interface simples, responsiva e com alta performance.

### Formas de execução do projeto

_Existem duas formas para executar a API:_

- _Url do deploy_
- _Executando o projeto localmente_

### Url do deploy

_A forma mais rápida para executar a aplicação, basta usar a seguinte url:_

```
https://brilliant-elf-63ffa7.netlify.app/
```

**_Executando o projeto localmente:_**

A partir da pasta do projeto, execute os seguintes comandos em seu terminal para executar as dependências necessárias:

```bash
  yarn install
```

Logo após, execute o seguinte comando para executar o projeto:

```
yarn dev
```

**A aplicação será iniciada na porta local 5173.**

## Funcionalidades

- Listagem paginada dos quadrinhos
- Visualização de um quadrinho
- Carrinho com listagem dos itens, cálculo do valor total, edição e deleção dos itens
- Cupom de desconto
- Itens do carrinho salvos no localStorage
- Busca de quadrinho pelo título
- Responsividade

## Desafios

Durante a construção do projeto, enfrentei o desafio de trabalhar com a API de quadrinhos da Marvel que retornava dados duplicados. Isso me causou alguns problemas na hora de exibir as informações para o usuário final, além de afetar o desempenho da aplicação.

Para solucionar esse problema, decidi utilizar a estrutura de dados MAP do JavaScript. Com ela, pude armazenar as chaves (no caso, os IDs dos quadrinhos) sem repetição, evitando assim os dados duplicados.

A utilização do MAP se mostrou eficiente e simplificou bastante a minha lógica de programação. Além disso, pude garantir que o usuário final teria acesso apenas a informações relevantes e não seria confundido com informações repetidas. A experiência me ensinou que é importante conhecer e explorar diferentes estruturas de dados para otimizar o desempenho da aplicação e oferecer uma melhor experiência ao usuário.

## Cupons de desconto

Seguem abaixo os dois cupons de desconto:
- COMMON25
- RARE15

**Observação:** Quadrinhos com títulos coloridos indicam que são raros. Fique de olho neles!
