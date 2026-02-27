# Guia de Deploy: GitHub e Google Cloud Run

Este guia cobre o passo-a-passo detalhado para você salvar a sua aplicação Java (Spring Boot) no GitHub e, em seguida, fazer o deploy dela na internet utilizando o Google Cloud Run.

---

## 🚀 Parte 1: Salvando o Projeto no GitHub

### Pré-requisitos
1. Uma conta no [GitHub](https://github.com/).
2. O [Git](https://git-scm.com/downloads) instalado na sua máquina.

### Passo-a-Passo

1. **Crie o `.gitignore`**
   Antes de subir o código, não podemos enviar arquivos compilados para o repositório. O projeto Spring Boot deve ter um `.gitignore`. Certifique-se de que ele exista na pasta do seu projeto contendo no mínimo os seguintes ignorados:
   ```text
   target/
   !.mvn/wrapper/maven-wrapper.jar
   !**/src/main/**/target/
   !**/src/test/**/target/
   ```

2. **Inicie o Repositório Local**
   Abra o terminal na pasta do seu projeto (`task-manager`) e execute:
   ```bash
   git init
   git add .
   git commit -m "Commit inicial: Projeto Gerenciador de Tarefas PRO"
   ```

3. **Crie um Repositório no GitHub**
   - Acesse o GitHub e clique em **"New"** para criar um novo repositório.
   - Dê um nome (ex: `task-manager-pro`).
   - Deixe-o como Public ou Private e **NÃO** marque a opção para adicionar um README (já temos um).
   - Clique em **"Create repository"**.

4. **Vincule e Envie seu Código**
   Copie os comandos que o GitHub mostrará na segunda seção ("…or push an existing repository from the command line") e cole no seu terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```
   *Pronto! Seu código estará seguro no GitHub.*

---

## ☁️ Parte 2: Deploy no Google Cloud Run

O **Cloud Run** é um serviço gerenciado do Google que roda containers sem que você precise se preocupar com a infraestrutura. O Google possui uma ferramenta chamada **Google Cloud Buildpacks** que transforma seu código Spring automaticamente numa imagem de container, sem precisar criar um `Dockerfile`.

### Pré-requisitos
1. Uma conta no [Google Cloud Platform (GCP)](https://console.cloud.google.com/).
2. Um projeto criado no console do GCP com o Faturamento (Billing) ativo (o Cloud Run tem uma camada gratuita bem generosa).
3. A API do Cloud Run e a API do Cloud Build ativadas no seu projeto.
4. O [Google Cloud CLI (gcloud)](https://cloud.google.com/sdk/docs/install) instalado na sua máquina.

### Passo-a-Passo de Deploy

1. **Autentique-se no Google Cloud**
   Abra o seu terminal na pasta do projeto e faça login:
   ```bash
   gcloud auth login
   ```
   *Isso abrirá uma janela no navegador para você logar na sua conta Google.*

2. **Defina seu Projeto Ativo**
   Vincule seu terminal ao projeto que você criou no Google Cloud:
   ```bash
   gcloud config set project SEU_ID_DO_PROJETO
   ```

3. **Publique a Aplicação**
   O comando mágico! Esse comando lerá o seu código fonte, descobrirá que é um projeto Java/Maven, empacotará e criará um serviço no Cloud Run:
   ```bash
   gcloud run deploy task-manager-api --source .
   ```

4. **Responda às perguntas do terminal**:
   Durante o `gcloud run deploy`, ele fará algumas perguntas:
   - *Region*: Selecione uma região próxima a você (ex: `us-central1` ou `southamerica-east1` em SP).
   - *Allow unauthenticated invocations to [task-manager-api] (y/N)?*: Digite **`y`** (sim), pois queremos que qualquer pessoa na internet possa acessar o front-end e a API da sua aplicação.

5. **Acesse sua Aplicação!**
   Após alguns minutos de "build", o terminal exibirá uma mensagem de sucesso junto com o **URL** da sua aplicação na nuvem.
   Exemplo: `https://task-manager-api-xxxxxxx-uc.a.run.app`

   Clique nesse link e veja o seu projeto rodando mundialmente! 🎉
