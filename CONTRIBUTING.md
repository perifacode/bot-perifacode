# Como contribuir para este projeto

Existem diversas formas nas quais você pode contribuir para o perifaCode BOT. É muito importante que todos participem e se envolvam com o projeto, então por favor, sinta-se a vontade para contribuir de qualquer forma que puder.

## Código de conduta

Temos nosso [código de conduta](https://perifacode.com/COC), é importante que siga ele em qualquer discussão que ocorra neste fórum.

Em linhas gerais, para evitar ser mal interpretado, mantenha o tom polido e profissional, sempre sendo respeitoso com os demais.
Pense também a respeito da linguagem utilizada, por exemplo, utilize "Ei pessoal" ao invés de "Ei caras" para evitar de ser exclusivo em seus posts, usar uma linguagem neutra em relação a gênero ajuda a evitar este tipo de situação.

## Discussões (Issues)

Para solicitar novas funcionalidades (feature requests), reportar bugs (bug reports) e outros tipos de problemas/discussões utilize as [issues](https://github.com/perifacode/bot-perifacode/issues) do projeto aqui no Github.

Algumas dicas de como reportar a issue de maneira mais relevante:

* Quando estiver descrevendo um problema tente descreve-lo de maneira a relatar o comportamento esperado ao invés de propor como o código deveria ser alterado.
* Faça uma busca pelas issues já existentes, tanto as abertas ([open issues](https://github.com/perifacode/bot-perifacode/issues?q=is%3Aopen+is%3Aissue)) quanto as já resolvidas ([closed issues](https://github.com/perifacode/bot-perifacode/issues?q=is%3Aissue+is%3Aclosed)), para evitar duplicar conteúdo.
* Se estiver reportando um bug tente ser o mais descritivo possível em relação ao problema relatado, tenha em mãos provas de ocorrência do bug que possam ajudar a indentificá-lo mais rapidamente (logs, projetos replicando o bug, versões utilizadas)

## Desenvolvimento (Como fazer o setup inicial e começar a colaborar com código)

Sugerimos este fluxo de trabalho (workflow) para quem quiser colaborar com o projeto.

Para começar, faça um fork do projeto, clicando no botão Fork na página inicial do projeto aqui no Github, para a conta desejada. Este fork sera sua cópia do projeto, será um repositório seu, atrelado a sua conta escolhida aqui do Github, nesta cópia você pode fazer alterações à vontade sem que isto afete o repositório principal do perifaCode BOT.

### Faça o clone do seu fork para sua máquina local

```
git clone git@github.com:<SEU USUÁRIO GITHUB>/bot-perifacode.git
```

Neste exemplo estamos utilizando o comando SSH para clonar o repositório localmente, caso queira saber mais acesse [este documento](https://help.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh).

### Configure o repositório principal do perifaCode BOT

Dentro do seu repositório local:

```bash
cd bot-perifacode
```

Configure o remote `upstream` com o repositório principal do perifaCode BOT:

```
git remote add upstream git@github.com:perifacode/bot-perifacode.git
```

Agora seu repositório deve ter um remote `upstream` configurado, para testar rode o seguinte comando:

```
> git remote
origin
upstream
```

Se você teve este mesmo resultado o remote já está configurado.

### Crie uma branch para as alterações que deseja fazer

Reserve a branch `master` para estar sincronizada com a `master` principal.

Para atualizar sua `master` local com a `master` principal rode os comandos:

```
git checkout master
git pull upstream master
```

Com isto alteramos para a branch `master` local e fizemos um pull da branch `master` principal.
Importante salientar que caso você tenha alterações não commitadas você não conseguirá trocar de branch, lide com suas alterações primeiro (faça os commits ou apague as mudanças).

A partir da `master` atualizada crie sua branch nova:

```
git checkout -b <NOME DA MINHA BRANCH>
```

A partir de sua nova branch faça as suas alterações.

### Faça um pull request com as suas alterações

Com suas alterações finalizadas faça um push delas para seu repositório:

```
git push origin <NOME DA MINHA BRANCH>
```

No Github, crie um pull request da suas alterações apontado para o repositório principal.

Crie um título descritivo para seu pull request.

Na descrição do pull request detalhe bem suas modificações, citando decisões tomadas, padrões introduzidos ou qualquer informações que achar relevante a respeito das suas modificações. Cite a issue relacionada, caso se aplique.

Espere por comentários em seu pull request de outros membros sobre suas alterações, eles serão imporantes para a aprovação de suas modificações.
Responda os comentários e faça as alterações solicitadas, caso seja necessário.

Quando seu pull request receber as aprovações necessárias ele será mergeado por alguém da organização.

## Boas práticas do pull request

É uma boa ideia abrir um pull request o quando antes for possível pois um pull request representa o inicio de uma discussão, o quando antes você obtiver feedbacks a respeito de suas modificações menos alterações serão necessárias no futuro.

Um pull request não necessariamente representa a solução final e não precisa estar completo para ser submetido.

Mantenha sempre sua branch sincronizada com a `master` principal, para evitar conflitos na hora do pull request, os conflitos precisam necessariamente serem resolvidos antes do approve dos organizadores.
