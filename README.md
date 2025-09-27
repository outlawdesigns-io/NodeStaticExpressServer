# static-express-server

A lightweight, zero-config Express.js static file server, designed to run in Docker and play nicely with Traefik or other reverse proxies.

- 🪶 Minimal and fast (built with Node.js + Express)
- 🐳 Docker- and CI-friendly
- 🌐 Serve static files from any mounted directory
- 🔁 Auto-reloads when container is restarted
- 🕒 Timezone support via `TZ` environment variable
- 🔒 HTTPS and domain routing via Traefik (or other proxy)

---

## 🚀 Usage

### 📦 NPM (Global)

```bash
npm install -g @your-scope/static-express-server
static-express-server
