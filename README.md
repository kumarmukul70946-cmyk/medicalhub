# MedicalHub Website & Chatbot

This is a fullstack Next.js application for MedicalHub , featuring a responsive landing page and an integrated AI-powered chatbot.

**Live Demo:** [https://medicalhub-kappa.vercel.app/](https://medicalhub-kappa.vercel.app/)

## Features

- **Premium Design**: Modern, clean, and professional medical service interface.
- **Chatbot**: Built-in chatbot for handling patient queries (Emergency, Appointments, Services).
- **Responsive**: Fully optimized for mobile and desktop.
- **Backend API**: `/api/chat` endpoint to process chat messages.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000)

## Structure

- `src/app/page.tsx`: Main Landing Page.
- `src/components/Chatbot.tsx`: Chatbot UI and Logic.
- `src/app/api/chat/route.ts`: Chatbot Backend Handler.
- `src/app/globals.css` & `page.module.css`: Styling.
