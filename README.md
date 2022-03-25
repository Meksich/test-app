# Test-app
 
## Description

This is simple web-application to manage football teams and players. It was build with Spring Boot and Angular.

## Before Start
- [Install](https://angular.io/guide/setup-local#install-the-angular-cli) Angular Cli 
- [Install](www.java.com/en/download/help/download_options.html) Java (at least 8 version)
- [Install](https://maven.apache.org/install.html) Maven

## Instalation guide
- Open terminal in folder you want to store this project
- Clone project with command ``git clone https://github.com/Meksich/test-app``
- Proceed to folder with project ``cd test-app/test-project``
- Build necessary `jar` by running command ``mvn clean package``
- After build is finished, start another terminal in project fonder and run ``ng serve --open``
- Then go into folder ``cd Backend/target``
- Run command ``java -jar Backend-0.1-SNAPSHOT.jar``
- Server is working, now you can start exploring [http://localhost:4200/](http://localhost:4200/)
- To stop servers press ``Ctrl+C`` in terminals or just close them
