# IntelliComment Engine
A smart static analysis and documentation tool for JavaScript functions. Automatically generates JSDoc comments and visualizes control flow graphs.

## Features
- **Generate JSDoc**: Analyze your JavaScript code and automatically inject perfectly formatted JSDoc comments based on your code structures.
- **Visualize CFG**: Show Control Flow Graph representations of the functions directly inside your IDE!

## How to Run & Test the Extension (Development)
If you are developing this extension, follow these steps to test it:
1. Open this project in VS Code.
2. Press **`F5`** to launch the **Extension Development Host**. A new VS Code window will open with your extension loaded.
3. In the new window, open any JavaScript file (e.g., `cfgGenerator.js`).

## Usage Guide
Once the extension is running (or installed), follow these steps to use its features:
1. **Highlight the text**: Open your JavaScript file and use your mouse to **completely highlight the function** you want to process (from the `function` keyword down to the closing `}`). *(Note: Just placing your cursor inside the function is not enough, you must select the text!)*
2. **Generate JSDoc**: With the code selected, press **`Ctrl+Alt+J`**. A comment block will be automatically added above the function.
3. **Show CFG**: With the code selected, press **`Ctrl+Alt+G`**. A new pane will open to display the Control Flow Graph.
