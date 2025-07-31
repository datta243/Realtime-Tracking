# 🛰️ Real-Time Tracking App

A simple yet powerful real-time location tracking system built with **Node.js**, **Express.js**, **Socket.IO**, and **Leaflet.js**. Ideal for Swiggy-like delivery tracking or live user tracking dashboards.

---

## 🚀 Features

- 📡 Real-time geolocation tracking
- 🌍 Interactive map powered by [Leaflet.js](https://leafletjs.com/)
- 🔄 Live marker updates using WebSockets
- 🧼 Automatic cleanup when users disconnect

---

## 📁 Project Structure

```
/public
  └── js/
      └── script.js         # Frontend logic for geolocation & map
  └── css/
      └── style.css         # Custom map/page styles (not included here)

views/
  └── index.ejs             # Main page rendering the map UI

app.js                      # Main server file (Express + Socket.IO)
README.md                   # This file
```

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/realtime-tracking-app.git
   cd realtime-tracking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   node app.js
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Dependencies

- [Express.js](https://expressjs.com/) — Web framework
- [Socket.IO](https://socket.io/) — Real-time communication
- [EJS](https://ejs.co/) — Templating engine
- [Leaflet.js](https://leafletjs.com/) — Map rendering
---

## 🧠 How It Works

- The frontend (`script.js`) uses the **Geolocation API** to track user position.
- Each location update is sent to the backend via **Socket.IO**.
- The server broadcasts that location to all connected clients.
- Each client updates the marker position on the **Leaflet map**.
- When a user disconnects, their marker is removed automatically.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Leaflet.js](https://leafletjs.com/)
- [Socket.IO](https://socket.io/)
