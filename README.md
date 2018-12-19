# Exemplo de uso do NextJS

PoC para testar Server-side rendering (ssr) com o [nextJS](https://nextjs.org/) que visa resolver os problemas com motores de busca SEO (esses motores desabilitam o Javascript automaticamente) E como a maioria das aplicações em React buscam as informações que serão exibidas na tela de uma API externa que é dependente do Javascript acabam causado varios problemas para o SEO.


Para rodar a PoC:
-----------------
yarn dev ou npm run dev
  
Libs utilizadas nessa PoC:
-----------------
react 
react-dom 
next
isomorphic-fetch (lib para padroniza o funcionamento da [API fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API))

Iniciando um projeto novo (caso nao queira baixar esse)
-----------
1° Crie uma pasta e dentro dela execute os seguintes comandos (pode ser com o NPM caso preferir)
yarn init -y
yarn add react react-dom next isomorphic-fetch

2° Adicione os seguintes trexo no arquivo package.json (logo apos as dependencies)
"scripts": {
    "dev": "next",
    "build": "nexrt build",
    "start": "next start"
  }

3° Execute os seguintes comandos
yarn dev npm run dev 


OBS: 
-----------
Exemplo simples, sem complexidade alguma. 
Foi feito exclussivamente para testar a lib :) tks
