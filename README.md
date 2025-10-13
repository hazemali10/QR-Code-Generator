  # 🚀 QR Code Generator

  > 🧠 A simple Node.js CLI app that generates a **QR code** from any URL you provide.  
  > Built for learning **Node.js**, **Inquirer**, and **qr-image**.

  ---

  ## ⚙️ Installation & Setup

  ### 1️⃣ Initialize a Node project
      npm init 

  ### 2️⃣ Install dependencies
      npm install qr-image inquirer

  ### 3️⃣ Enable ES Modules  
  In your `package.json`, add the following line:
      {
        "type": "module"
      }
        <img width="684" alt="QR Code Generator Demo" src="https://github.com/user-attachments/assets/6c9d5fb6-b3a0-4470-ac72-8abc52461bb1" />

  ### 4️⃣ Run the project
      node index.js

  ### 5️⃣ Follow the prompt  
  Enter the URL you want to generate a QR code for — and voilà 🎉

  ---

  ## 🧠 How It Works
  1. Prompts the user for a URL using **Inquirer**  
  2. Generates a QR code using **qr-image**  
  3. Saves the PNG to your project folder (alongside a txt file containing your input)
  4. Displays a success message ✅  

  ---

  ## 📚 Learning Focus
  This mini-project helped practice:
  - Using **npm** and managing dependencies  
  - Handling **file streams** in Node.js  
  - Creating a **Command-Line Interface (CLI)** tool  

Wady🔥

