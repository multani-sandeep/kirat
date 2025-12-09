# 🚧 DRAFT - Homepage Wireframe

> **Status:** DRAFT - Pending Approval
> **Last Updated:** December 9, 2025
> **Version:** 0.1

---

## Homepage Layout

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────┐
│                           HEADER                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────┐    ┌────────────────────────────────────┐    ┌────────┐ │
│  │ LOGO │    │   🔍  Search thoughts, content...  │    │  👤   │ │
│  │ Kirat│    │                                    │    │ Account│ │
│  └──────┘    └────────────────────────────────────┘    └────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                       CONTENT FEED                                  │
│                    (Infinite Scroll)                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Content Item #1                              [Text]          │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ Lorem ipsum dolor sit amet, consectetur adipiscing elit.     │  │
│  │ Sed do eiusmod tempor incididunt ut labore et dolore magna   │  │
│  │ aliqua...                                                    │  │
│  │                                                              │  │
│  │ [💭 12 thoughts] [❤️ Like] [💬 Add Thought]                 │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Content Item #2                              [Image]         │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ ┌───────────────────────────────────────────────────────┐   │  │
│  │ │                                                       │   │  │
│  │ │              [Image Placeholder]                     │   │  │
│  │ │                   800 x 600                          │   │  │
│  │ │                                                       │   │  │
│  │ └───────────────────────────────────────────────────────┘   │  │
│  │ Caption: Beautiful sunset over the mountains                │  │
│  │                                                              │  │
│  │ [💭 24 thoughts] [❤️ Like] [💬 Add Thought]                 │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Content Item #3                              [Video]         │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ ┌───────────────────────────────────────────────────────┐   │  │
│  │ │                                                       │   │  │
│  │ │                 ▶️  [Video Player]                   │   │  │
│  │ │                     16:9 ratio                       │   │  │
│  │ │                                                       │   │  │
│  │ └───────────────────────────────────────────────────────┘   │  │
│  │ Title: Tutorial on modern web development                   │  │
│  │ Duration: 12:35                                             │  │
│  │                                                              │  │
│  │ [💭 8 thoughts] [❤️ Like] [💬 Add Thought]                  │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Content Item #4                              [Text]          │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ Another interesting piece of content...                      │  │
│  │ [💭 5 thoughts] [❤️ Like] [💬 Add Thought]                  │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│                         ⬇️ Scroll for more ⬇️                       │
│                      (Infinite scroll continues)                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile View (320px - 767px)

```
┌──────────────────────────┐
│        HEADER            │
├──────────────────────────┤
│ ┌────┐          ┌─────┐  │
│ │Logo│          │ 👤  │  │
│ └────┘          └─────┘  │
│                          │
│ ┌──────────────────────┐ │
│ │ 🔍 Search...         │ │
│ └──────────────────────┘ │
└──────────────────────────┘

┌──────────────────────────┐
│     CONTENT FEED         │
│   (Infinite Scroll)      │
├──────────────────────────┤
│                          │
│ ┌──────────────────────┐ │
│ │ Content #1    [Text] │ │
│ │ ──────────────────── │ │
│ │ Lorem ipsum dolor    │ │
│ │ sit amet...          │ │
│ │                      │ │
│ │ 💭12 ❤️ 💬           │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────────────────┐ │
│ │ Content #2   [Image] │ │
│ │ ──────────────────── │ │
│ │ ┌──────────────────┐ │ │
│ │ │     [Image]      │ │ │
│ │ │                  │ │ │
│ │ └──────────────────┘ │ │
│ │ Caption text...      │ │
│ │                      │ │
│ │ 💭24 ❤️ 💬           │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────────────────┐ │
│ │ Content #3   [Video] │ │
│ │ ──────────────────── │ │
│ │ ┌──────────────────┐ │ │
│ │ │  ▶️  [Video]     │ │ │
│ │ │    12:35         │ │ │
│ │ └──────────────────┘ │ │
│ │ Tutorial title...    │ │
│ │                      │ │
│ │ 💭8 ❤️ 💬            │ │
│ └──────────────────────┘ │
│                          │
│      ⬇️ Scroll more      │
│                          │
└──────────────────────────┘
```

### Tablet View (768px - 1023px)

```
┌────────────────────────────────────────────┐
│                 HEADER                     │
├────────────────────────────────────────────┤
│  ┌─────┐  ┌──────────────────┐  ┌──────┐  │
│  │Logo │  │ 🔍 Search...     │  │ 👤  │  │
│  └─────┘  └──────────────────┘  └──────┘  │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│          CONTENT FEED (Infinite)           │
├────────────────────────────────────────────┤
│  ┌──────────────────────────────────────┐  │
│  │ Content #1                    [Text] │  │
│  │ ──────────────────────────────────── │  │
│  │ Lorem ipsum dolor sit amet...        │  │
│  │ 💭12 ❤️ 💬 Add Thought               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │ Content #2                   [Image] │  │
│  │ ──────────────────────────────────── │  │
│  │ [Image 600x400]                      │  │
│  │ 💭24 ❤️ 💬 Add Thought               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│             ⬇️ Scroll for more              │
└────────────────────────────────────────────┘
```

---

## Component Specifications

### Header

**Desktop & Tablet:**
- **Height:** 70px
- **Background:** White with subtle shadow
- **Layout:** Flexbox (space-between)
- **Components:**
  - Logo (left): 120px width, clickable to homepage
  - Search Bar (center): 400-600px width, expandable
  - Account Icon (right): 40px circle, dropdown menu

**Mobile:**
- **Height:** 110px (stacked layout)
- **Layout:**
  - Row 1: Logo (left) + Account Icon (right)
  - Row 2: Full-width search bar

### Search Bar

- **Placeholder:** "Search thoughts, content..."
- **Icon:** 🔍 magnifying glass (left side)
- **Behavior:**
  - Focus: Expand slightly, show recent searches
  - Type: Live search suggestions
  - Enter: Navigate to search results page
- **Responsive:** Full width on mobile, fixed width on desktop

### Account Icon

- **Appearance:** User avatar or default profile icon
- **Behavior:** Click opens dropdown menu
- **Menu Items:**
  - Profile
  - My Thoughts
  - Settings
  - Logout (if logged in)
  - Login/Signup (if not logged in)

### Content Feed

**Layout:**
- **Desktop:** Single column, 800px max-width, centered
- **Tablet:** Single column, 90% width
- **Mobile:** Full width with 16px padding

**Content Card:**
- **Spacing:** 24px between cards
- **Background:** White card with border/shadow
- **Border Radius:** 8px
- **Padding:** 20px

**Card Components:**
1. **Content Type Badge:** Top-right corner ([Text], [Image], [Video])
2. **Content Area:**
   - Text: Typography with max 300 chars preview
   - Image: Responsive image with aspect ratio preserved
   - Video: Embedded player with thumbnail
3. **Metadata:** Author, timestamp (if applicable)
4. **Actions Bar:**
   - 💭 Thought count (clickable to view thoughts)
   - ❤️ Like button
   - 💬 Add Thought button (opens modal/form)

### Infinite Scroll

**Behavior:**
- Load 10 items initially
- Trigger: When user scrolls to 80% of page height
- Load: Next 10 items
- Indicator: Loading spinner during fetch
- Error Handling: Retry button if load fails
- End: "You've reached the end" message

**Performance:**
- Lazy load images/videos
- Virtual scrolling for very long feeds
- Debounce scroll event (100ms)

---

## Interaction Flows

### 1. Homepage Load
```
User opens app →
  Load header instantly →
  Fetch first 10 content items →
  Display with fade-in animation →
  Enable scroll listener
```

### 2. Search
```
Click search bar →
  Expand/focus →
  Type query →
  Show live suggestions →
  Press Enter/Click suggestion →
  Navigate to search results
```

### 3. Add Thought
```
Click "Add Thought" button →
  Open modal/overlay →
  Show thought input form →
  User types thought →
  Submit →
  Show "Pending moderation" message →
  Close modal
```

### 4. View Thoughts
```
Click thought count →
  Expand/navigate to thought detail view →
  Show approved thoughts for this content →
  Allow scrolling through thoughts
```

### 5. Infinite Scroll
```
User scrolls down →
  Reaches 80% of page →
  Show loading indicator →
  Fetch next batch →
  Append to feed →
  Continue scroll
```

---

## Visual Design Notes

### Colors (Suggested)
- **Primary:** Modern blue (#2563eb)
- **Secondary:** Soft gray (#6b7280)
- **Background:** Light gray (#f9fafb)
- **Cards:** White (#ffffff)
- **Text:** Dark gray (#1f2937)
- **Border:** Light gray (#e5e7eb)

### Typography
- **Logo:** Bold, 24px
- **Search:** Regular, 16px
- **Content Title:** Semi-bold, 18px
- **Content Body:** Regular, 16px, line-height 1.6
- **Metadata:** Regular, 14px, gray

### Spacing
- **Card Padding:** 20px
- **Card Gap:** 24px
- **Section Padding:** 32px
- **Mobile Padding:** 16px

### Animations
- **Page Load:** Fade-in (300ms)
- **Card Hover:** Subtle lift + shadow (200ms)
- **Button Hover:** Scale 1.05 (150ms)
- **Scroll Load:** Fade-in from bottom (250ms)

---

## Accessibility Considerations

- **Keyboard Navigation:** All interactive elements accessible via Tab
- **Screen Reader:** Proper ARIA labels for all icons and actions
- **Focus Indicators:** Visible focus rings on all interactive elements
- **Alt Text:** All images must have descriptive alt text
- **Color Contrast:** WCAG AA compliance (4.5:1 for text)
- **Touch Targets:** Minimum 44x44px on mobile

---

## Technical Implementation Notes

### PWA Requirements
- Service worker caches header and feed structure
- Offline mode shows cached content
- "Offline" indicator in header when disconnected
- Background sync for thought submissions

### Performance Optimizations
- Lazy load images (Intersection Observer API)
- Virtual scrolling for long feeds
- Debounced scroll events
- Optimistic UI updates for interactions
- Request batching for analytics

### API Endpoints Needed
- `GET /api/content?page=1&limit=10` - Fetch content feed
- `GET /api/search?q=query` - Search content
- `POST /api/thoughts` - Submit new thought
- `GET /api/thoughts/:contentId` - Get thoughts for content
- `POST /api/like/:contentId` - Like content

---

## Open Questions / To Be Decided

1. Should we show author information on content cards?
2. Do we need filtering options (by type, date, popularity)?
3. Should there be a "What's on your mind?" post creation at the top?
4. Do we need content categories/tags visible on cards?
5. Should we implement "Save for later" functionality?
6. Do we need social sharing buttons?
7. Should video auto-play when scrolled into view?
8. Do we need pagination as an alternative to infinite scroll?

---

**Note:** This wireframe is a DRAFT and requires approval before implementation. Please review and provide feedback on:
- Layout and component placement
- Interaction patterns
- Visual hierarchy
- Missing features or functionality
- Technical feasibility

---

*Status: DRAFT - Awaiting Approval*
*Document Version: 0.1*
*Created: December 9, 2025*
