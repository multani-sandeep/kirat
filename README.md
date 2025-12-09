# Kirat

A content browsing and engagement platform with a clean, responsive UI and PWA capabilities.

## Features

- 📱 Responsive design (mobile, tablet, desktop)
- 🔄 Infinite scroll content feed
- 📝 Support for text, image, and video content
- ⚡ PWA-enabled (installable, offline support)
- 🎨 Clean UI with Tailwind CSS
- 🗄️ PostgreSQL data storage (Render.com)

## Tech Stack

- **Backend:** Node.js + Express.js
- **Frontend:** HTML5 + Tailwind CSS + Vanilla JavaScript
- **Database:** PostgreSQL (with in-memory fallback for local dev)
- **Hosting:** Render.com
- **PWA:** Service Worker + Web App Manifest

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/multani-sandeep/kirat.git
cd kirat
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Seed the database with mock content:
```bash
npm run seed
```

### Running Locally

Start the development server:
```bash
npm run dev
```

Or start in production mode:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with nodemon (auto-restart on changes)
- `npm run seed` - Seed the database with mock content

## Project Structure

```
kirat/
├── public/                  # Static frontend files
│   ├── index.html          # Main homepage
│   ├── css/
│   │   └── styles.css      # Custom styles
│   ├── js/
│   │   ├── app.js          # Main application logic
│   │   └── infinite-scroll.js  # Infinite scroll
│   ├── icons/              # PWA icons
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # PWA service worker
├── src/
│   ├── config/
│   │   └── database.js     # DynamoDB configuration
│   ├── routes/
│   │   └── content.js      # Content API routes
│   ├── services/
│   │   └── contentService.js   # Business logic
│   └── data/
│       └── seedData.js     # Mock data and seeding
├── scripts/
│   └── generate-icons.js   # PWA icon generator
├── server.js               # Express server
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## API Endpoints

### GET /api/content

Get paginated content.

**Query Parameters:**
- `page` (default: 1) - Page number
- `limit` (default: 10) - Items per page (max: 50)

**Response:**
```json
{
  "data": [...content items],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 20,
    "hasMore": true
  }
}
```

### GET /api/content/:id

Get a single content item by ID.

**Response:**
```json
{
  "id": "text-001",
  "type": "text",
  "content": "...",
  "thoughtCount": 12,
  "createdAt": "2025-12-09T10:00:00Z"
}
```

### GET /health

Health check endpoint.

## Deployment

### Deploy to Render.com

#### Option 1: Blueprint Deployment (Recommended)

1. Push your code to GitHub
2. Go to [Render.com](https://render.com) and sign up
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically:
   - Create a web service
   - Create a PostgreSQL database
   - Connect them together
   - Deploy your app

The `render.yaml` file contains all the configuration.

#### Option 2: Manual Deployment

1. **Create PostgreSQL Database:**
   - In Render dashboard, click "New" → "PostgreSQL"
   - Name: `kirat-db`
   - Plan: Free (90 days free, then $7/month)
   - Click "Create Database"
   - Copy the "Internal Database URL"

2. **Create Web Service:**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Settings:
     - Name: `kirat`
     - Runtime: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Plan: Free
   - Add Environment Variable:
     - `DATABASE_URL` = [paste the internal database URL]
     - `NODE_ENV` = `production`
   - Click "Create Web Service"

3. **First Deployment:**
   - Render will automatically deploy
   - Database will be automatically seeded on first startup (no shell access needed!)
   - Your app will be live at `https://kirat.onrender.com` (or your chosen name)

4. **Manual Seeding (Optional):**
   If you need to reseed the database, you can use the API endpoint:
   ```bash
   curl -X POST https://your-app.onrender.com/api/seed \
     -H "Authorization: Bearer kirat-seed-2025"
   ```
   Change `SEED_TOKEN` in Render environment variables for production security.

### Environment Variables

Required for Render deployment:
- `DATABASE_URL` - Automatically set by Render when you connect PostgreSQL
- `NODE_ENV=production` - Set to production mode

Optional:
- `ITEMS_PER_PAGE=10` - Pagination size

## Development Notes

### Local Development

The application uses an in-memory store when PostgreSQL is not configured. This allows you to develop locally without setting up a database.

To use PostgreSQL locally (optional):
1. Install PostgreSQL
2. Create a database: `createdb kirat`
3. Set environment variables in `.env`:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=kirat
   DB_USER=postgres
   DB_PASSWORD=your_password
   ```
4. Run `npm run seed` to populate data
5. Run `npm start`

### PWA Features

The app includes:
- Web App Manifest for installability
- Service Worker for offline support
- Cache-first strategy for static assets
- Network-first strategy for API calls

### Mock Data

The seed script (`npm run seed`) populates the database with 20 diverse content items:
- 8 text posts (quotes, thoughts, educational content)
- 7 images (Lorem Picsum placeholders with captions)
- 5 videos (YouTube embeds with titles and durations)

## Future Features

The following features are planned but not yet implemented:
- User authentication and profiles
- Thought submission and moderation
- Like and save functionality
- Search and filtering
- Content categories and tags

## License

MIT

## Author

multani-sandeep