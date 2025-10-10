<!-- 9dc370f0-5849-4767-9ffa-f342ff177a43 4637c43d-90f6-4321-bc90-1ee871e8e8c2 -->
# Essays Blog System Implementation

## Overview

Create a complete essays/blog system integrated into your portfolio with React Router for navigation, JSON-based content storage, and a minimal dark aesthetic matching your existing TextHero style.

## Implementation Steps

### 1. Install React Router

- Add `react-router-dom` dependency to handle routing
- Configure browser router in the app

### 2. Update Project Structure

**File: `src/constants/index.js`**

- Add new `essays` export array with structure:
  ```js
  {
    id: string,
    slug: string, // URL-friendly (e.g., "young-but-rational")
    title: string,
    date: string,
    category: string, // e.g., "reflection", "mythoughts"
    coverImage: string, // path to asset
    excerpt: string,
    content: string // full essay markdown-style text
  }
  ```


### 3. Create Essays Components

**New files to create:**

- `src/sections/Essays.jsx` - Essays listing page
  - Grid/list of essay cards
  - Filter by category (reflection, mythoughts, etc.)
  - Click navigates to individual essay
  - Styled with IBM Plex Mono font, dark bg (#0a0a0a)

- `src/sections/EssayDetail.jsx` - Individual essay page
  - Full essay content display
  - Back button to essays list
  - Optimized reading layout (max-width ~680px)
  - Same minimal aesthetic as TextHero

- `src/sections/Essays.css` - Styling
  - Match TextHero.css aesthetic
  - Responsive typography for reading
  - Hover effects on essay cards

### 4. Update Routing

**File: `src/App.jsx`**

- Import and configure `BrowserRouter`, `Routes`, `Route`
- Create routes:
  - `/` - Home (existing TextHero → sections)
  - `/essays` - Essays listing
  - `/essays/:slug` - Individual essay detail
- Preserve existing gate/scroll behavior for home

**File: `src/main.jsx`**

- Wrap app with `BrowserRouter`

### 5. Update Navigation

**File: `src/sections/TextHero.jsx`**

- Change `<a href="/essays">` to use React Router's `Link` component
- Ensure proper navigation without page reload

**File: `src/sections/Navbar.jsx`**

- Add "Essays" link to navigation if desired
- Use React Router `Link` for all nav items

### 6. Populate Sample Essay Data

**File: `src/constants/index.js`**

- Add 1-2 sample essays based on the screenshots provided
- Include "young but rational" essay (later, template)
- Use proper formatting for multi-paragraph content

## Key Design Decisions

- **Routing**: React Router with `/essays` and `/essays/:slug` paths
- **Storage**: JSON objects in `constants/index.js` alongside existing data
- **Styling**: IBM Plex Mono font, dark theme (#0a0a0a bg, #a1a1a1 text), minimal aesthetic
- **Layout**: Centered content (max-width 680px), similar to TextHero container
- **Navigation**: Clickable essay cards → individual essay pages with back button

## Files to Modify

- `package.json` - Add react-router-dom
- `src/constants/index.js` - Add essays data
- `src/App.jsx` - Add routing logic
- `src/main.jsx` - Wrap with BrowserRouter
- `src/sections/TextHero.jsx` - Update link to use Router

## Files to Create

- `src/sections/Essays.jsx`
- `src/sections/EssayDetail.jsx`
- `src/sections/Essays.css`

### To-dos

- [ ] Install react-router-dom package
- [ ] Add essays array to constants/index.js with sample content
- [ ] Create Essays.jsx listing page component
- [ ] Create EssayDetail.jsx individual essay page
- [ ] Create Essays.css with dark minimal styling
- [ ] Configure React Router in App.jsx and main.jsx
- [ ] Update TextHero.jsx and Navbar.jsx to use Router Links