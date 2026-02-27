# Estágio 1: Build
FROM maven:3.8.7-eclipse-temurin-8 AS build
WORKDIR /app

# Copiar os arquivos do projeto para o container
COPY pom.xml .
COPY src ./src

# Compilar empacotar a aplicação gerando o arquivo .jar (pulando os testes para ser mais rápido)
RUN mvn clean package -DskipTests

# Estágio 2: Run (Imagem menor apenas com o que é necessário para rodar)
FROM eclipse-temurin:8-jre
WORKDIR /app

# Expor a porta que o Spring Boot utiliza
EXPOSE 8080

# Copiar apenas o arquivo .jar construído no primeiro estágio
COPY --from=build /app/target/task-manager-0.0.1-SNAPSHOT.jar app.jar

# Comando de inicialização
ENTRYPOINT ["java", "-jar", "app.jar"]
