# MimosPet 🐾

Aplicação de checkout desenvolvida em React para simular uma compra em uma loja de produtos para pets.

O projeto foi criado como atividade avaliativa do curso de Desenvolvimento Front-End React do SENAI/SCTec.

## Links do projeto

- [Aplicação publicada](https://taissippel.github.io/mimospet-checkout/)
- [Repositório no GitHub](https://github.com/taissippel/mimospet-checkout)
- [Organização das tarefas no Trello](https://trello.com/b/EChkOBqm/mimospet)

## Objetivo

Permitir que o usuário selecione produtos, defina quantidades, confira o carrinho, preencha dados fictícios de cartão e simule o processamento de uma compra, onde será demonstrado uma tentativa de fraude e a compra realizada com sucesso.

## Funcionalidades

- Catálogo com seis produtos;
- Seleção de diferentes produtos;
- Controle de quantidade;
- Carrinho com itens, quantidades e subtotais;
- Cálculo automático do valor total;
- Navegação entre páginas com React Router;
- Formulário com React Hook Form;
- Validação com Zod;
- Máscara automática para cartão e validade;
- Limite de três dígitos para o CVV;
- Simulação assíncrona de pagamento;
- Botão desabilitado durante o processamento;
- Tela de sucesso;
- Tela de falha;
- Interface responsiva;
- Feedback acessível ao adicionar produtos;
- Identidade visual personalizada da MimosPet.

## Regra da simulação

A aplicação aceita qualquer número de cartão que tenha 16 dígitos, exceto quando todos os dígitos são iguais, que não valida a compra mostrando "Tentativa de Fraude".

### Exemplo de falha

```text
1111 1111 1111 1111
```

A aplicação abre a tela de falha e apresenta a mensagem obrigatória:

```text
tentativa de golpe
```

### Exemplo de sucesso

```text
4111 1111 1111 1111
```

## Validações do formulário

- Titular obrigatório;
- Cartão com exatamente 16 números;
- Espaçamento automático a cada quatro números;
- Validade no formato `MM/AA`;
- Mês entre `01` e `12`;
- CVV com exatamente três números;
- Espaços e hifens do cartão são desconsiderados na validação.

## Tecnologias

- React
- JavaScript
- JSX
- CSS
- Vite
- React Router
- React Hook Form
- Zod
- Git e GitHub

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Carrinho |
| `/produtos` | Catálogo de produtos |
| `/pagamento` | Formulário de pagamento |
| `/sucesso` | Compra aprovada |
| `/falha` | Compra não aprovada |

## Estrutura principal

```text
src/
├── assets/
│   └── img/
├── components/
│   ├── ItemCarrinho.jsx
│   └── ResumoCompra.jsx
├── data/
│   └── produtos.js
├── hooks/
│   └── usePagamento.js
├── pages/
│   ├── Carrinho.jsx
│   ├── Produtos.jsx
│   ├── Pagamento.jsx
│   ├── Sucesso.jsx
│   └── Falha.jsx
├── utils/
│   └── pagamento.js
├── App.jsx
├── index.css
└── main.jsx
```

## Como executar

Clone o repositório:

```bash
git clone URL-DO-REPOSITORIO
```

Entre na pasta:

```bash
cd patashop
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

Abra no navegador o endereço apresentado pelo Vite.

## Build e verificação

Gerar a versão de produção:

```bash
npm run build
```

Verificar o código:

```bash
npm run lint
```

## Melhorias futuras

- Remover produtos do carrinho;
- Diminuir quantidades diretamente no carrinho;
- Salvar o carrinho no `localStorage`;
- Carregar produtos por uma API;
- Criar filtro e busca de produtos.

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio para explicar conceitos, organizar etapas, revisar erros e sugerir melhorias de acessibilidade e responsividade.

Todos os trechos foram adaptados ao projeto, testados no navegador e validados de acordo com os requisitos da atividade.

## Autora

Taís Sippel
