# ✅ Homepage Wireframe

> **Status:** Approved - Ready for Implementation
> **Last Updated:** December 9, 2025
> **Version:** 1.0

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
│  │ 💭 What's on your mind?                                      │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ ┌───────────────────────────────────────────────────────┐   │  │
│  │ │ Share your thoughts with the community...             │   │  │
│  │ │                                                       │   │  │
│  │ └───────────────────────────────────────────────────────┘   │  │
│  │                                    [📝 Post Thought] ──────▶ │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Content Item #1                              [Text]          │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ Lorem ipsum dolor sit amet, consectetur adipiscing elit.     │  │
│  │ Sed do eiusmod tempor incididunt ut labore et dolore magna   │  │
│  │ aliqua...                                                    │  │
│  │                                                              │  │
│  │ [💭 12 thoughts] [❤️ Like] [💬 Add Thought] [🔖 Save]       │  │
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
│  │ [💭 24 thoughts] [❤️ Like] [💬 Add Thought] [🔖 Save]       │  │
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
│  │ [💭 8 thoughts] [❤️ Like] [💬 Add Thought] [🔖 Save]        │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Content Item #4                              [Text]          │  │
│  │ ──────────────────────────────────────────────────────────── │  │
│  │ Another interesting piece of content...                      │  │
│  │ [💭 5 thoughts] [❤️ Like] [💬 Add Thought] [🔖 Save]        │  │
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
│ │ 💭 What's on your    │ │
│ │    mind?             │ │
│ │ ──────────────────── │ │
│ │ Share your thoughts  │ │
│ │ ┌──────────────────┐ │ │
│ │ │ Type here...     │ │ │
│ │ └──────────────────┘ │ │
│ │      [📝 Post] ────▶ │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────────────────┐ │
│ │ Content #1    [Text] │ │
│ │ ──────────────────── │ │
│ │ Lorem ipsum dolor    │ │
│ │ sit amet...          │ │
│ │                      │ │
│ │ 💭12 ❤️ 💬 🔖        │ │
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
│ │ 💭24 ❤️ 💬 🔖        │ │
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
│ │ 💭8 ❤️ 💬 🔖         │ │
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
│  │ 💭 What's on your mind?              │  │
│  │ ──────────────────────────────────── │  │
│  │ ┌──────────────────────────────────┐ │  │
│  │ │ Share your thoughts...           │ │  │
│  │ └──────────────────────────────────┘ │  │
│  │                   [📝 Post Thought]▶ │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │ Content #1                    [Text] │  │
│  │ ──────────────────────────────────── │  │
│  │ Lorem ipsum dolor sit amet...        │  │
│  │ 💭12 ❤️ 💬 Add Thought 🔖 Save       │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │ Content #2                   [Image] │  │
│  │ ──────────────────────────────────── │  │
│  │ [Image 600x400]                      │  │
│  │ 💭24 ❤️ 💬 Add Thought 🔖 Save       │  │
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

### "What's on your mind?" Component

**Purpose:** Allow users to quickly create and share thoughts

**Appearance:**
- **Position:** Top of content feed, before first content item
- **Background:** White card with subtle border
- **Border Radius:** 8px
- **Padding:** 20px

**Components:**
- **Title:** "💭 What's on your mind?"
- **Input Field:**
  - Multi-line text area (auto-expand)
  - Placeholder: "Share your thoughts with the community..."
  - Min height: 60px
  - Max height: 200px
- **Post Button:**
  - Label: "📝 Post Thought"
  - Alignment: Bottom-right
  - Primary color button
  - Disabled until text entered

**Behavior:**
- Click to focus and expand
- Type to enable Post button
- Click Post → Submit thought → Show moderation message → Clear input
- Mobile: Full-width button

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
   - ❤️ Like button (toggle on/off)
   - 💬 Add Thought button (opens modal/form)
   - 🔖 Save button (bookmark for later, toggle on/off)

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

### 5. Post from "What's on your mind?"
```
Click/focus on input field →
  Field expands (if needed) →
  User types thought →
  Post button becomes enabled →
  Click "Post Thought" →
  Show loading state →
  Submit to API →
  Show "Thanks! Your thought is pending moderation" message →
  Clear input field →
  Button returns to disabled state
```

### 6. Save for Later
```
Click Save (🔖) button on content →
  Button fills/highlights (saved state) →
  Save to user's saved collection →
  Show brief "Saved!" toast notification →

To unsave:
  Click filled Save button →
  Button returns to outline (unsaved state) →
  Remove from saved collection →
  Show brief "Removed from saved" toast
```

### 7. Infinite Scroll
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
- `POST /api/thoughts` - Submit new standalone thought (from "What's on your mind?")
- `POST /api/thoughts/:contentId` - Submit thought for specific content
- `GET /api/thoughts/:contentId` - Get thoughts for content
- `POST /api/like/:contentId` - Like content
- `DELETE /api/like/:contentId` - Unlike content
- `POST /api/save/:contentId` - Save content for later
- `DELETE /api/save/:contentId` - Remove from saved
- `GET /api/saved` - Get user's saved content

---

## Design Decisions Made

The following design decisions were made based on user requirements and approved features:

### ✅ Features Included

1. **"What's on your mind?" Post Creation** ✓
   - Added at top of content feed
   - Allows quick standalone thought submission
   - Thoughts go through moderation before publication

2. **"Save for Later" Functionality** ✓
   - Bookmark button (🔖) on all content cards
   - Toggle on/off with visual feedback
   - Saved items accessible from user profile/saved collection
   - Optimistic UI updates for immediate feedback

### ❌ Features Excluded

1. **Author Information on Content Cards** ✗
   - Not shown on cards to keep interface clean
   - Focus on content rather than attribution
   - Reduces visual clutter

2. **Filtering Options** ✗
   - No filters by type, date, or popularity
   - Simplified experience with chronological feed
   - Reduces complexity for initial version

3. **Content Categories/Tags** ✗
   - No visible tags on content cards
   - Maintains clean, minimalist design
   - Can be added in future iteration if needed

4. **Social Sharing Buttons** ✗
   - No external social sharing
   - Keeps users within the app
   - Focus on internal engagement

5. **Video Auto-play** ✗
   - Videos do not auto-play when scrolled into view
   - User must click to play
   - Respects bandwidth and user preference
   - Better for accessibility

6. **Pagination Alternative** ✗
   - Only infinite scroll, no pagination option
   - Simpler implementation
   - More mobile-friendly experience

### Design Philosophy
- **Simplicity First:** Clean, uncluttered interface
- **Mobile-First:** Optimized for mobile usage patterns
- **User Control:** Manual actions (play video, save content)
- **Content Focus:** Minimize metadata, maximize content visibility
- **Moderation:** All user-generated content reviewed before publication

---

**Note:** This wireframe has been updated based on approved design decisions.

**Status:** Ready for Implementation
**Document Version:** 1.0
**Created:** December 9, 2025
**Last Updated:** December 9, 2025
