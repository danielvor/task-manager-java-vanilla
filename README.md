# 🚀 Task Manager API - Fullstack Java Application

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)

> Uma aplicação Fullstack desenvolvida para demonstrar sólidos conhecimentos em **Desenvolvimento Back-end**, construção de **APIs RESTful**, **Containerização** e **Deploy em Nuvem**.

---

## 🎯 Sobre o Projeto

Este projeto é um Gerenciador de Tarefas (Task Manager) criado por **Daniel Rodrigues**, estudante de Desenvolvimento de Software na **FATEC Itaquera**. O principal objetivo desta aplicação é compor meu portfólio profissional, destacando minhas habilidades práticas em arquitetura de software, domínio do ecossistema Java (Spring Boot) e conhecimento em práticas fundamentais de DevOps e Cloud (Docker e Google Cloud Run).

A aplicação fornece uma API REST completa para o gerenciamento das entidades (`Tasks`), consumida por uma interface amigável desenvolvida em Vanilla JS e CSS. O projeto prioriza a separação de responsabilidades (Clean Architecture) e a escrita de um código limpo e de fácil manutenção.

🌐 **Status do Projeto:** Concluído e em produção.  
🔗 **Live Demo (Google Cloud Run):** [https://task-manager-java-vanilla-342085720840.europe-west1.run.app/]

## 🛠️ Tecnologias e Ferramentas

### Back-end (Foco Principal)
- **Java 8**
- **Spring Boot (2.7)**: Framework principal para criação ágil e robusta da API REST.
- **Spring Data JPA & Hibernate**: ORM utilizado para abstração e persistência de dados.
- **H2 Database**: Banco de dados relacional em memória para otimização do fluxo de desenvolvimento, testes e demonstrações rápidas.
- **Maven**: Gerenciamento das dependências e ciclo de vida do build da aplicação.

### DevOps & Cloud ☁️
- **Docker**: Containerização da aplicação. Foi utilizado o conceito de *Multi-stage build* no Dockerfile para garantir a separação entre o ambiente de build e o de runtime, gerando imagens mais leves e seguras.
- **Google Cloud Run**: Plataforma Serverless escolhida para o deploy do container. Demonstra a capacidade de implantar aplicações escaláveis na nuvem gerenciando a infraestrutura de forma moderna.
- **GitHub**: Controle de versão e gestão do código fonte.

### Front-end
- **HTML5, CSS3 & JavaScript (Vanilla)**
- Consumo da API de forma totalmente assíncrona utilizando a moderna `Fetch API`.
- Design responsivo e atrativo aplicando Flexbox e conceitos de Glassmorphism puro.

## ⚙️ Arquitetura e Decisões Técnicas

Para demonstrar conhecimento aplicável ao mercado de trabalho, tomei algumas decisões de design importantes neste projeto:

1. **Design de API RESTful Padrão**: Criação de endpoints semânticos e utilização adequada dos verbos HTTP (GET, POST, PUT, DELETE) e Status Codes para as operações CRUD.
2. **Containerização Eficiente (Multi-stage Build)**: O processo de build (`maven package`) acontece dentro do primeiro container. Apenas o artefato final (`.jar`) resultante é copiado para a imagem de produção (JRE). Isso resolve problemas comuns de "funciona na minha máquina" e reduz drasticamente o peso final da imagem da aplicação.
3. **Implantação Serverless**: O deploy no Google Cloud via container foca em eficiência de custos e escalabilidade automática caso o tráfego da aplicação aumente.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Docker](https://www.docker.com/) instalado em sua máquina.

1. Clone este repositório em seu ambiente local:
   ```bash
   git clone https://github.com/danielvor/task-manager-java-vanilla.git
   cd task-manager
   ```

2. Construa a imagem Docker através do comando:
   ```bash
   docker build -t task-manager-app .
   ```

3. Inicie a aplicação executando o container:
   ```bash
   docker run -p 8080:8080 task-manager-app
   ```

4. Acesse a aplicação no seu navegador: `http://localhost:8080`

*(Alternativamente, se você testar diretamente no ambiente Java com Maven instalado, pode rodar o backend com o comando `./mvnw clean spring-boot:run`)*

## 📚 Documentação da API

A API responde no Base Path `/api/tasks`. Abaixo os endpoints disponíveis:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/tasks` | Retorna um array em JSON contendo a lista de todas as tarefas cadastradas. |
| `POST` | `/api/tasks` | Persiste e cria uma nova tarefa enviada via payload JSON. |
| `PUT` | `/api/tasks/{id}` | Atualiza o status (concluído/não concluído) da tarefa referenciada pelo `id`. |
| `DELETE`| `/api/tasks/{id}` | Remove a tarefa específica em definitivo do banco de dados. |

## 👨‍💻 Sobre o Autor

**Daniel Rodrigues**  
🎓 Estudante de Desenvolvimento de Software na **FATEC Itaquera**  
💻 Desenvolvedor de Software focado no ecossistema Back-end e Fullstack.

Sou apaixonado por tecnologia, construção de sistemas web robustos e boas práticas de engenharia de software. Busco constantemente criar aplicações que resolvam problemas reais unindo performance e qualidade de código.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielvor/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/danielvor)
