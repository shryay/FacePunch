# FacePunch

FacePunch is a secure and efficient face recognition-based attendance management system. It seamlessly combines a modern React frontend (built with Vite) and a Django REST Framework backend, leveraging computer vision for biometric authentication and robust attendance tracking. FacePunch is designed to streamline the process of registering users and marking attendance using facial recognition.

## Features

- **Face Registration:** Users can register their face and details securely using their webcam.
- **Face Recognition Attendance:** Attendance is marked via real-time webcam-based facial recognition.
- **User Management:** View, edit, and delete registered users from the admin dashboard.
- **Attendance Records:** Browse comprehensive attendance logs with user details and timestamps.
- **JWT Authentication:** Secure endpoints using JSON Web Tokens.
- **Responsive UI:** Built with React, Material-UI, and supports light/dark mode.
- **Dockerized Backend:** Easy deployment using Docker.
- **Error Handling & Notifications:** User-friendly feedback for all operations.

## Tech Stack

- **Frontend:** React, Vite, Material-UI, React Router, Axios, React Hot Toast, Framer Motion
- **Backend:** Django, Django REST Framework, Simple JWT, face_recognition (Python library), dlib
- **Database:** (Configurable, e.g., MySQL, NeonDB; see Dockerfile for dependencies)
- **Containerization:** Docker

## Directory Structure

```
FacePunch/
├── client/           # React frontend
│   ├── src/
│   │   ├── pages/    # Main app pages (Home, Registration, MarkAttendance, AttendanceRecords, etc.)
│   │   ├── components/
│   │   └── contexts/
│   ├── public/
│   └── ...           # Vite config, ESLint, etc.
├── server/           # Django backend
│   ├── features/     # Core attendance & registration features
│   ├── face_attendance_system/ # Django project config
│   └── ...           # manage.py, Dockerfile, requirements.txt, etc.
```

## Getting Started

### Prerequisites

- React.js, Django and npm/yarn
- Python 3.10+
- Docker (optional, for containerized backend)
- MySQL or NeonDB (or preferred DB, if not using Docker)

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/shryay/FacePunch.git
cd FacePunch
```

#### 2. Backend Setup (Django)

- Install dependencies (inside `server/`):

  ```bash
  cd server
  pip install -r requirements.txt
  ```

- Set up your database and environment variables as per Django standards.
- Run migrations:

  ```bash
  python manage.py migrate
  ```

- Create a superuser (optional):

  ```bash
  python manage.py createsuperuser
  ```

- Run the development server:

  ```bash
  python manage.py runserver
  ```

- **Or use Docker:**

  ```bash
  docker build -t facepunch-backend .
  docker run -p 8000:8000 facepunch-backend
  ```

#### 3. Frontend Setup (React)

- Install dependencies (inside `client/`):

  ```bash
  cd ../client
  npm install
  ```

- Create a `.env` file and set the backend API URL:

  ```
  VITE_BACKEND_API=http://localhost:8000
  ```

- Run the frontend:

  ```bash
  npm run dev
  ```

- Open [http://localhost:5173](http://localhost:5173) (or as shown in terminal).

## Usage

- **Registration:** Go to the registration page and register a new user by providing details and capturing a face image.
- **Mark Attendance:** Navigate to the attendance page, scan your face, and mark your attendance.
- **View Users & Records:** Access the dashboard for a list of registered users and detailed attendance history.

## API Overview

- `POST /api/features/register/`: Register a new user with facial data.
- `POST /api/features/mark-attendance/`: Mark attendance via face recognition.
- `GET /api/features/users/`: List all registered users.
- `GET /api/features/attendance-records/`: List attendance records.

All protected endpoints require JWT authentication.

## Security & Privacy

- No face images are stored—only facial embeddings are kept for recognition.
- All sensitive routes are protected via JWT.
- Follows best practices for password and data security.

## License

[MIT](LICENSE)

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [face_recognition](https://github.com/ageitgey/face_recognition)
- [Material-UI](https://mui.com/)

---

**FacePunch** — Fast, Secure, and Modern Face Recognition Attendance System.

Made with enthusiasm by *Shreya Upadhyay*
