# Code Explainer

Web app yang bisa jelasin syntax code pakai model Claude AI, pilih bahasanya, dapat penjelasan per blok logika dalam bahasa Indonesia.

---

## Fitur

- Paste kode dan pilih bahasa pemrograman (JavaScript, TypeScript, Python, SQL, Other)
- AI jelasin kode per blok logika dalam bahasa Indonesia yang santai
- Input validation di backend — non-kode dan jailbreak attempt langsung ditolak sebelum nyentuh API
- Hasil penjelasan dirender pakai Markdown

---

## Tech Stack

### Backend

| Tech | Versi | Kegunaan |
|---|---|---|
| Express | ^5.2.1 | HTTP server & routing |
| TypeScript | ^6.0.3 | Type safety |
| tsx | ^4.22.4 | Dev runner (watch mode) |
| cors | ^2.8.6 | Handle CORS dari frontend |
| dotenv | ^17.4.2 | Load environment variable |

### Frontend

| Tech | Versi | Kegunaan |
|---|---|---|
| React | ^19.2.6 | UI library |
| Vite | ^8.0.12 | Build tool & dev server |
| TypeScript | ~6.0.2 | Type safety |
| Tailwind CSS | ^4.3.1 | Styling |
| Zustand | ^5.0.14 | Global state management |
| Axios | ^1.18.0 | HTTP client ke backend |
| react-markdown | ^10.1.0 | Render hasil penjelasan AI |

### External API

- **Anthropic Claude API** (`claude-sonnet-4-6`) — engine AI untuk penjelasan kode

---

## Struktur Proyek

```text
code-explainer/
├── backend/
│   └── src/
│       ├── config/         # env config & validasi
│       ├── controllers/    # handler request/response
│       ├── middlewares/    # error handler & 404
│       ├── models/         # TypeScript types/interfaces
│       ├── routes/         # definisi endpoint
│       ├── services/       # logic panggil Anthropic API
│       └── utils/          # validate input & build prompt
│
└── frontend/
    └── src/
        ├── config/         # base URL API
        ├── pages/Home/     # sections: Hero, About, Projects, Explainer
        ├── services/       # axios call ke backend
        ├── store/          # Zustand state
        └── types/          # TypeScript custom types

---
```
## Cara Jalanin Lokal

**Prerequisites:** Node.js >= 18, Anthropic API key dari [console.anthropic.com](https://console.anthropic.com)

### 1. Clone repo

```bash
git clone https://github.com/edrzvena/code-explainer.git
cd code-explainer
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
```

Isi `.env`:

```env
PORT=3000
NODE_ENV=development
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
ALLOWED_ORIGIN=http://localhost:5173
```

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
```

Isi `.env`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173)

---

## API Endpoint

### POST /api/explainer/explain

Request:
```json
{
  "code": "const x = arr.filter(n => n > 0)",
  "language": "JavaScript"
}
```

Response sukses:
```json
{
  "success": true,
  "explanation": "Kode ini bertujuan untuk...",
  "language": "JavaScript"
}
```

Response error (input bukan kode):
```json
{
  "success": false,
  "message": "Input tidak terdeteksi sebagai kode program."
}
```

### GET /health

```json
{ "status": "ok", "env": "development" }
```

---

## Security

- Input validation di backend — non-kode dan jailbreak pattern langsung ditolak `400` sebelum nyentuh Claude API
- API key Anthropic disimpan di backend (`.env`), tidak pernah di-expose ke frontend
- CORS dibatasi hanya ke origin frontend yang terdaftar

---

## Author

Pedro Widyadharta Ciady — [GitHub](https://github.com/edrzvena) · [LinkedIn](https://linkedin.com/in/pedro-widyadharta-ciady-773209350) · [Portfolio](https://portofolio-pedrowidya2.vercel.app)