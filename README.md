# React Counter App with Firebase

A modern React counter application built with Vite and powered by Firebase for real-time data persistence.

## Features

- **Real-time Counter**: Count values are stored and synchronized with Firebase Firestore
- **Modern UI**: Beautiful gradient design with responsive layout
- **Error Handling**: Comprehensive error handling for Firebase operations
- **Loading States**: Smooth loading indicators during Firebase operations
- **Vite Build**: Fast development server and optimized production builds

## Tech Stack

- React 18
- Vite
- Firebase (Firestore, Authentication)
- CSS-in-JS styling

## Setup Instructions

### 1. Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your Firebase configuration from Project Settings > General
4. Replace the placeholder values in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```

The application will start on `http://localhost:3000`

## Project Structure

```
src/
├── firebase.js              # Firebase configuration and initialization
├── services/
│   └── counterService.js    # Firebase Firestore operations
├── App.jsx                  # Main application component
├── App.css                  # Application styles
├── main.jsx                 # React entry point
└── index.css               # Global styles
```

## Firebase Security Rules

For proper security, add these Firestore rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /counters/{counterId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT License