# 📝 Flask To-Do List Web App

[🌐 Live Demo](https://todo-web-3-qsli.onrender.com/)

A simple and secure multi-user **To-Do List** application built with **Flask**, featuring user authentication, task management, and SQLite database integration.

---

## 🚀 Features

- 🔐 User Signup & Login (with hashed passwords)
- 📋 Create, update, and delete personal to-do tasks
- 🧠 Session-based user authentication using `Flask-Login`
- 🗃️ Persistent data storage via `SQLite` and `SQLAlchemy`
- 🎨 Clean and responsive UI with `HTML` and `Jinja2`
- 🛡️ Secure route access using login protection

---

## 📸 Screenshots

> <img width="1437" height="862" alt="Screenshot 2025-07-18 at 3 50 33 PM" src="https://github.com/user-attachments/assets/e370e9e0-789c-4857-bf2d-18ecc6b7835e" />

---

## 🛠️ Tech Stack

- **Backend:** Flask (Python), Flask-Login, Flask-SQLAlchemy
- **Database:** SQLite
- **Frontend:** HTML, CSS (Jinja2 templating)
- **Server:** Gunicorn (for deployment)
- **Hosting:** Render (or any cloud provider)

---

## 📂 Folder Structure

```
/project-root
│
├── templates/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── update.html
│   └── about.html
│
├── static/
│   └── (your CSS, images, etc.)
│
├── app.py
├── todo.db
├── requirements.txt
└── README.md
```

---

## 📦 Setup Instructions

### ✅ Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Rishu22889/todo-web
cd todo
```

2. **Create a virtual environment & activate it**
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the app**
```bash
python app.py
```

5. Visit [http://localhost:5000](http://localhost:5000) to use the app!

> 💡 On first run, the app will create a `todo.db` SQLite file automatically.

---

### 🌐 Deployment (Render)

1. Create a new **Web Service** on [Render](https://render.com/)
2. Use `gunicorn app:app` as the **Start Command**
3. Add a build command if needed (e.g. `pip install -r requirements.txt`)
4. Ensure `app.py` contains: `app = Flask(__name__)`
5. Set the environment variable `PORT` if required

---

## ✍️ Author

**Rishu Raj**  
Connect: [LinkedIn](https://www.linkedin.com/in/risu-raj-b299131aa/)
Email: rk1258106@gmail.com

---

## 📃 License

This project is licensed under the **MIT License** — feel free to use, share, and modify.
