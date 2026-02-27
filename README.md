# Gerenciador de Tarefas PRO

Este é um projeto **Fullstack de Nível Júnior**, desenvolvido para demonstrar conhecimentos fundamentais de integração entre back-end e front-end utilizando tecnologias consolidadas.

## Tecnologias Utilizadas

### Back-end
- **Java 8**
- **Spring Boot 2.7.18**
- **Spring Data JPA** (Hibernate)
- **H2 Database** (Banco de dados em memória, ideal para testes e demonstrações)
- **Maven** (Gerenciamento de dependências e build)

### Front-end
- **HTML5** (Semântico)
- **CSS3** (Estilização pura - Vanilla CSS - com variáveis, Flexbox, animações e Glassmorphism)
- **JavaScript** (Vanilla JS utilizando `fetch` API para comunicação assíncrona com REST)
- **FontAwesome** (Ícones)
- **Google Fonts** (Fonte Inter)

## Estrutura e Funcionalidades
A aplicação consiste em uma API REST que fornece endpoints completos para um CRUD de um recurso `Task` (Tarefa).

- `GET /api/tasks`: Lista todas as tarefas
- `POST /api/tasks`: Cria uma nova tarefa
- `PUT /api/tasks/{id}`: Atualiza o status (concluído/não concluído)
- `DELETE /api/tasks/{id}`: Exclui a tarefa

O Front-end interage com esses endpoints, oferecendo uma experiência de usuário simples, fluida e com estilo moderno.

## Como Executar o Projeto

1. Certifique-se de ter o **Java 8** e o **Maven** instalados na sua máquina.
2. Abra o terminal na raiz do projeto (`task-manager`).
3. Execute o comando:
   ```bash
   ./mvnw clean spring-boot:run
   ```
4. Aguarde a mensagem de que o servidor iniciou na porta `8080`.
5. Abra o seu navegador e acesse: [http://localhost:8080](http://localhost:8080)

### (Acesso Opcional) Banco de Dados H2
Você pode acessar o console do banco de dados embutido enquanto a aplicação estiver rodando:
- **URL**: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- **JDBC URL**: `jdbc:h2:mem:taskdb`
- **Username**: `sa`
- **Password**: `password`

## 🐳 Como Executar com Docker
Se você tiver o Docker instalado na sua máquina, não precisa do Java e nem do Maven instalados localmente. O projeto já inclui um `Dockerfile` multi-stage que compila a aplicação na primeira fase e roda na segunda.

1. Construa a imagem Docker:
   ```bash
   docker build -t task-manager-app .
   ```
2. Rode o container:
   ```bash
   docker run -p 8080:8080 task-manager-app
   ```
3. Acesse no navegador: [http://localhost:8080](http://localhost:8080)
