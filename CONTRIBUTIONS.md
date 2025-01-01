# Contributing to React API Search

Thank you for considering contributing to **React API Search**! We welcome contributions from the community and appreciate your interest in improving this project.

## How to Contribute

There are several ways you can contribute to this project:

1. **Report Bugs**
2. **Suggest Features**
3. **Fix Bugs or Implement Features**
4. **Update Documentation**
5. **Improve Tests**

# Fork the repository on GitHub and clone it

```bash
git clone https://github.com/ghosnkarl/react-api-search.git
cd react-api-search
```

## Setting Up the Development Environment

1. Install dependencies:

   ```bash
   npm install
   ```

2. Since the library cannot run as a standalone app, use \`npm link\` to test it in a separate project:

   ```bash
   npm link
   ```

3. In your test project (e.g., a React app where you want to test the library), link the library:

   ```bash
   cd path-to-your-test-project
   npm link react-api-search
   ```

4. Now, import the library in your test project and test the functionality.

5. To unlink after testing:

   ```bash
   npm unlink react-api-search
   ```

6. To run tests:

   ```bash
   npm test
   ```

## Making Changes

1. **Create a new branch**:
   Always create a new branch for your changes. Use a descriptive name for the branch that reflects the feature or bug you're working on.

   ```bash
   git checkout -b feature-name
   ```

2. **Make your changes**:
   Edit the necessary files, and follow the existing code style and conventions.

3. **Write tests** (if applicable):
   If your change involves new functionality or fixes a bug, please add tests. The project uses [Jest](https://jestjs.io/) for testing.

4. **Commit your changes**:
   Commit your changes with a clear, concise message that explains the purpose of your modification.

   ```bash
   git add .
   git commit -m "Add feature XYZ"
   ```

5. **Push your changes**:
   Push your branch to your forked repository.

   ```bash
   git push origin feature-name
   ```

6. **Open a Pull Request**:
   Go to the [GitHub repository](https://github.com/ghosnkarl/react-api-search) and open a pull request (PR). Describe the changes you've made and the reason for them.

## Code Style

To ensure a consistent code style throughout the project, please follow these guidelines:

- Use **ESLint** and **Prettier** for linting and formatting (both are set up in this project).
- Use **TypeScript** for type safety.
- Follow the established pattern of functional components and hooks.
- Keep code clean and well-commented.

## Writing Tests

The project uses [Jest](https://jestjs.io/) for testing. If you are adding new features or fixing bugs, please write tests to cover those changes.

- **Unit tests**: For testing individual functions or components.
- **Integration tests**: For testing how components work together.

To run tests:

```bash
npm test
```

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention for commit messages. This makes it easier to generate changelogs and understand the history of the project.

Example commit message format:

- **feat**: Add new search result feature
- **fix**: Fix error handling in search results
- **docs**: Update documentation for new features
- **chore**: Update dependencies

## Reporting Issues

If you find a bug or issue, please report it by opening a new issue in the [Issues section](https://github.com/ghosnkarl/react-api-search/issues) of the repository. When submitting an issue, please provide:

- A clear description of the problem.
- Steps to reproduce the issue.
- Expected vs. actual behavior.
- Any relevant error messages or logs.

## License

By contributing to this project, you agree that your contributions will be licensed under the project’s [MIT License](LICENSE).

---

Thank you for contributing! Together, we can make **React API Search** even better. 🚀
