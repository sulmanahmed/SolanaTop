# Monad DAU Card
SolPadX Project

Overview

This is a React.js project built with TypeScript, Ant Design, styled-components, and integrated with both Solana and EVM wallets.

Prerequisites

Make sure you have the following installed:

Node.js (Latest LTS version recommended)

Yarn (Recommended over npm)

Installation & Setup

Follow these steps to set up and run the project:

1. Clone the repository

git clone <repository_url>
cd <repository_name>

2. Install dependencies

yarn install

3. Set up environment variables

Create a .env file in the root directory and add the required environment variables. Example:

REACT_APP_API_URL=<your_api_url>
REACT_APP_WALLET_PROVIDER=<your_wallet_provider>

4. Start the development server

yarn dev

This will start the app at http://localhost:3000/ by default.

Available Scripts

Start the development server

yarn dev

Build the project for production

yarn build

This will generate optimized files in the dist/ or build/ directory.

Run tests

yarn test

Lint the code

yarn lint

Format the code

yarn format

Folder Structure

/src
  /components    # Reusable UI components
  /modules       # Feature-specific modules
  /hooks         # Custom React hooks
  /context       # React context providers
  /utils         # Utility functions
  /styles        # Global styles and themes
  /config        # Project configurations
  /assets        # Static assets (images, icons, etc.)

Technologies Used

React.js

TypeScript

Ant Design

styled-components

wagmi (for EVM wallets)

@solana/wallet-adapter (for Solana wallets)

Contributing

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit (git commit -m 'Add new feature').

Push to your branch (git push origin feature-branch).

Create a Pull Request.