# BlogBytes

**BlogBytes** is a full-stack blogging platform designed for modern writers and readers. It allows users to create, read, update, and delete blog posts with a seamless UI and secure backend. The platform supports user authentication, rich text editing, categories, and more.

---

## Features

- **User Authentication** – Secure login/signup with JWT  
- **Create & Edit Posts** – Rich text editor for writing beautiful articles  
- **Category & Tag Support** – Organize posts by topic  
- **Comments System** – Engage with readers  
- **Responsive Design** – Mobile-first, clean UI  

---

## Tech Stack

**Frontend**  
- React + Vite  
- Tailwind CSS / SCSS  
- Axios  

**Backend**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT Authentication  
- Cloudinary (for image uploads)  

---

## 📁 Project Structure

```
BlogBytes/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── prisma/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm installed  
- MongoDB running locally or cloud URI  
- Prisma

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Talish1234/BlogBytes.git
   cd BlogBytes
   ```

2. **Install frontend & backend dependencies**
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Add environment variables**

   Create a `.env` file in `/backend` with:

   ```
   BASE_URL= frontend_base_url
   DATABASE_URL=mongodb+srv://<USERNAME>:<PASSWORD>@cluster.mongodb.net/BlogBytes
   SECRET=yourJWTSecret
   ```
   Image Upload Configuration (Cloudinary)

   This project uses **Cloudinary** for handling image uploads in the following pages:

   - `frontend/pages/CreatePost.jsx`
   - `frontend/pages/Register.jsx`
   - `frontend/pages/Profile.jsx`

   To enable image uploads, configure your Cloudinary credentials in these files.

   **How to Set It Up**

   Replace the placeholders with your actual Cloudinary values:

    ```js
    cloud_name: {/* Your Cloudinary cloud name */},
    uploadPreset: {/* Your upload preset */}
    ```
    You can find these in your Cloudinary Dashboard:
    Settings → Upload → Upload Presets

4. **Run the development servers**

   - Backend: `npm run dev` (in `/backend`)  
   - Frontend: `npm run dev` (in `/frontend`)  

---

## Future Scope

- Bookmark & like functionality  
- Newsletter subscription  
- Markdown support  
- WYSIWYG editor  
- Draft autosaving  
- Analytics for authors  

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.
