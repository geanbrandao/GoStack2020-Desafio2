# GoStack2020-Desafio2

### Dependências
 * yarn add express

 * antes de intalar o sequelize precisa criar a estrutura de pastas com models e controllers que para que o sequelize posso funcionar
 * yarn add sequelize

  * É preciso instalar essas dependencias para suportar o dialeto postgress
  * yarn add pg pg-hstore

#

### Dependências de desenvolvimento
  * yarn add nodemon -D

  * Essa dependência serve para mudar o padrão dos import e export
  * yarn add sucrase -D

  * yarn add eslint -D
    * yarn eslint --init
      * selecionado essas opções
      * To ckeck syantax, find problems, and enforce code style
      * JavaScript modules
      * Node of these
      * No
      * Node
      * Use a popular guider
      * Airbnb: https://github.com/airbnb/javascript
      * JavaScript
    * Um arquivo `package-lock.json` é gerado. Ele deve ser excluido, pois o eslint intala as depencencias usando npm. Por fim rode 'yarn' para que seja feito o mapeamento das novas dependências.
    * Obs.: Instalar o eslint no vscode
    * Adicionar ao arquivo `settings.json` do vscode.
      ````
        "[javascript]": {
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
          }
        },
        "[javascriptreact]": {
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
          }
        },
        ````
    * É necessário adicionar algumas regras ao arquivo `.eslintrc.js`
      ````
      rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      },

      ````

  * prettier é responsavel por deixar o código mais bonito
  * yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    * adicionar o prettier dentro do 'extends' no arquivo `.eslintrc.js`. E adicionar logo abaixo o array plugins com prettier dentro.
    * O prettier entra em conflito em algumas regras com a styleguide do airbnb. Para resolver isso precisa criar um arquivo chamado `.prettierrc` com o seguinte:
      ````
      {
        "singleQuote": "true",
        "trailingComma": "es5"
      }
      ````

  * Obs.: Caso o eslint tenha sido instalado após o projeto já ter vários arquivos criados. Para que não seja necessário entrar e salvar cada um para o eslint formatar, o seguinte comando pode ser executado:
  'yarn eslint --fix src --ext .js'
  onde src corresponde a pasta e .js a extensão do arquivo.

* yarn sequelize-cli -D
  * é uma interface de linha de comando que vai ajudar a fazer migrations e outras ações pelo terminal.
  * Após ter o sequelice intalado deve-se criar o `.sequelizerc`. Esse arquivo vai servir para exportar os caminhos da pasta config, models e database.


#

### Para executar o código
  * Definir isso no arquivo `package.json`
    ````
    ...
    "scripts": {
      "dev": "nodemon src/server.js",
      "dev:debug": "nodemon --inspect src/server.js"
    },
    ...
    ````

  * yarn dev - para executar
  * yarn dev:debug - para debugar


