# Busca Repo App

## Aplicativo Mobile para iOS e Android. Feito com React Native.

### - Instalação

1. Clonando o repositório

```
git clone https://github.com/arthurpsribeiro/busca-repo.git
```

2. Acesse o diretório

```
cd BuscaRepo
```

2. Crie o arquivo de variáveis de ambiente na raiz do projeto

no arquivo `.env` cole a seguinte chave:

```
API_BASE_URL=https://api.github.com
```

3. instale as dependências

```
yarn
```

4. (iOS) instale as dependências utilizando cocoapods

```
cd ios && pod install && cd ..
```

4. Execute o projeto

```
yarn start
```

5. Em outro terminal, inicialize o emulador de sua preferência

```
yarn android | yarn ios
```

### - Próximas Atualizações:

1. Scrool Infinito nos resultados da busca

2. Testes e2e

3. ...
