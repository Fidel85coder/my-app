# MyApp

This project includes both the **frontend (Angular)** and the **backend (Spring Boot)** of the ToDo List application.

---

## 🖥️ Frontend (Angular)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

### Development server

> **Note:** Ensure the backend is running before starting the frontend, otherwise the app will not load tasks.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.  
The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory.  
By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

---

## ⚙️ Backend (Spring Boot)

The backend project is located inside the `backend/` folder.

### Running the backend

1. Open the backend folder with **IntelliJ IDEA**.  
2. Locate and run the class `TodolistApplication.java`.  
   This will start the Spring Boot server on port **8080** by default.

### Database configuration

Before running the backend, make sure to configure your database credentials:

1. Open the file `.gitattributes` (or the corresponding configuration file if your credentials are stored elsewhere).  
2. Replace the placeholders with your **SQL username and password**:
   ```
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. Ensure your database server is running and accessible.

Once configured, the backend will connect to your SQL database and provide the API for the Angular frontend.

---

## 📚 Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.  
For Spring Boot documentation, see [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot).
