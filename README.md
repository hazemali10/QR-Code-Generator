  # 🚀 QR Code Generator

  ![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
  ![License](https://img.shields.io/badge/license-MIT-blue)
  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

  > 🧠 A simple Node.js CLI app that generates a **QR code** from any URL you provide.  
  > Built for learning **Node.js**, **Inquirer**, and **qr-image**.

  ---

  ## 🧰 Tech Stack
  - ⚡ **Node.js**
  - 💬 **Inquirer**
  - 🖼️ **qr-image**
  - 📁 **fs (File System)**

  ---

  ## ⚙️ Installation & Setup

  ### 1️⃣ Initialize a Node project
      npm init -y

  ### 2️⃣ Install dependencies
      npm install qr-image inquirer

  ### 3️⃣ Enable ES Modules  
  In your `package.json`, add the following line:
      {
        "type": "module"
      }

  ### 4️⃣ Run the project
      node index.js

  ### 5️⃣ Follow the prompt  
  Enter the URL you want to generate a QR code for — and voilà 🎉

  ---

  ## 📸 Example
  <img width="684" alt="QR Code Generator Demo" src="https://github.com/user-attachments/assets/6c9d5fb6-b3a0-4470-ac72-8abc52461bb1" />

  ---

  ## 🧠 How It Works
  1. Prompts the user for a URL using **Inquirer**  
  2. Generates a QR code using **qr-image**  
  3. Saves the PNG to your project folder  
  4. Displays a success message ✅  

  Example output:
      ✅ QR code saved as myqr.png

  ---

  ## 💡 Future Improvements
  - 🎨 Add color or size customization  
  - 🖨️ Export to SVG / PDF formats  
  - 🌐 Build a simple web interface version  

  ---

  ## 📚 Learning Focus
  This mini-project helped practice:
  - Using **npm** and managing dependencies  
  - Handling **file streams** in Node.js  
  - Creating a **Command-Line Interface (CLI)** tool  

  ---

  ## 🧑‍💻 Author
  **Hazem Ali**  
  📦 GitHub: [@yourusername](https://github.com/yourusername)

  ---

  ## 🪪 License
  This project is licensed under the **MIT License** — feel free to use and modify it.

  ---

  > ⭐ If you found this project helpful, consider giving it a star!

