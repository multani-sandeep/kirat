# CLAUDE.md - Project Memory & Planning

> This file serves as Claude's memory and planning document for the Kirat project.
> It tracks context, decisions, progress, and future plans.

---

## Project Overview

**Project Name:** Kirat
**Repository:** https://github.com/multani-sandeep/kirat
**Local Path:** `/Users/sandeep/Documents/multani-sandeep/kirat`
**Created:** December 9, 2025
**Owner:** multani-sandeep

### Purpose
Kirat is a content browsing and engagement platform that allows users to:
- Browse a feed of diverse content (text, images, videos)
- Add their own thoughts and responses to content
- Experience a moderated community where thoughts are reviewed before being visible to other users

**Key Features:**
- **Content Feed:** Multi-format content stream (text, image, video)
- **Thought Submission:** Users can contribute thoughts and reactions
- **Content Moderation:** All thoughts are moderated before publication
- **Safe Community:** Ensures quality and appropriateness through moderation queue

### Technology Stack
- **Runtime:** Node.js
- **Hosting:** Cyclic.sh (https://cyclic.sh)
- **Database:** DynamoDB (included with Cyclic) or external database
- **Deployment:** Git-based automatic deployment
- *[Additional frameworks and tools to be defined]*

### Non-Functional Requirements

#### NFR-1: Public Deployment on Free Service
**Requirement:** The application must be deployable publicly on a free hosting service.

**Recommended Free Hosting Platforms:**

1. **Vercel** (https://vercel.com)
   - Best for: Next.js, React, Vue, static sites
   - Free tier: Unlimited projects, 100GB bandwidth/month
   - Features: Automatic HTTPS, global CDN, preview deployments
   - Deploy: Git integration (auto-deploy on push)

2. **Netlify** (https://netlify.com)
   - Best for: Static sites, JAMstack, React, Vue
   - Free tier: 100GB bandwidth/month, 300 build minutes
   - Features: Forms, serverless functions, split testing
   - Deploy: Git integration, drag-and-drop

3. **Railway** (https://railway.app)
   - Best for: Full-stack apps, Node.js, Python, Go, databases
   - Free tier: $5 credit/month, persistent storage
   - Features: PostgreSQL, MySQL, Redis included
   - Deploy: Git integration, Docker support

4. **Render** (https://render.com)
   - Best for: Web services, static sites, databases
   - Free tier: 750 hours/month, PostgreSQL included
   - Features: Auto-deploy, custom domains, HTTPS
   - Deploy: Git integration, Docker support

5. **Fly.io** (https://fly.io)
   - Best for: Docker containers, global deployment
   - Free tier: 3 VMs, 3GB storage, 160GB transfer
   - Features: Edge deployment, Postgres, Redis
   - Deploy: flyctl CLI, Dockerfile

6. **GitHub Pages** (https://pages.github.com)
   - Best for: Static sites, documentation, portfolios
   - Free tier: Unlimited sites (1 per repo)
   - Features: Custom domains, HTTPS, Jekyll support
   - Deploy: Push to gh-pages branch

7. **Cloudflare Pages** (https://pages.cloudflare.com)
   - Best for: Static sites, JAMstack
   - Free tier: Unlimited sites, unlimited bandwidth
   - Features: Cloudflare CDN, serverless functions
   - Deploy: Git integration

8. **Cyclic** (https://cyclic.sh)
   - Best for: Node.js, Express, REST APIs
   - Free tier: Unlimited apps, 10K requests/month
   - Features: DynamoDB included, cron jobs
   - Deploy: Git integration

**Selection Criteria:**
- Application type (static, dynamic, full-stack)
- Database requirements
- Expected traffic/bandwidth
- Build time requirements
- Custom domain support
- Geographic distribution needs

---

## Project Status

**Current Phase:** Initial Setup
**Last Updated:** December 9, 2025

### Quick Status
- ✅ Repository initialized
- ✅ Git configured with remote
- ✅ CLAUDE.md created
- ✅ Hosting platform selected (Cyclic.sh)
- ✅ Technology stack defined (Node.js)
- ⏳ Project structure - pending
- ⏳ Dependencies - pending
- ⏳ Initial implementation - pending

---

## Architecture & Design

### System Architecture
**Architecture Pattern:** RESTful API with modular services

**High-Level Components:**
```
┌─────────────────┐
│  User Browser   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Frontend UI   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   REST API      │
│   (Node.js)     │
└────────┬────────┘
         │
    ┌────┴─────┬─────────────┐
    ▼          ▼             ▼
┌─────────┐ ┌──────────┐ ┌──────────┐
│ Content │ │ Thoughts │ │ Moderation│
│ Service │ │ Service  │ │  Queue   │
└────┬────┘ └────┬─────┘ └────┬─────┘
     │           │            │
     └───────────┴────────────┘
                 │
                 ▼
          ┌─────────────┐
          │  Database   │
          │  (DynamoDB) │
          └─────────────┘
```

### Key Components

1. **Content Feed Service**
   - Retrieve and display content (text, image, video)
   - Content filtering and pagination
   - Multi-format content rendering

2. **Thought Management Service**
   - Thought submission and storage
   - User thought tracking
   - Thought-to-content association

3. **Moderation Service**
   - Moderation queue management
   - Approval/rejection workflow
   - Moderator dashboard
   - Publication status tracking

4. **User Service** *(if authentication required)*
   - User registration and authentication
   - User profiles
   - Permissions and roles (user, moderator, admin)

5. **API Layer**
   - RESTful endpoints
   - Request validation
   - Error handling
   - Rate limiting

6. **Database Layer**
   - Content storage
   - Thought storage with moderation status
   - User data (if applicable)
   - Relationships between entities

### Design Decisions

#### Dec 9, 2025 - Hosting Platform Selection
- **Context:** Project requires public deployment on a free hosting service (NFR-1). Need a platform that supports the application requirements with zero cost for initial deployment.
- **Decision:** Selected **Cyclic.sh** (https://cyclic.sh) as the hosting platform
- **Rationale:**
  - Free tier includes unlimited apps and 10,000 requests/month
  - Excellent for Node.js and Express applications
  - Built-in DynamoDB (serverless database) included
  - Supports cron jobs for scheduled tasks
  - Git integration for automatic deployments
  - Zero configuration deployment
  - No credit card required for free tier
- **Alternatives Considered:**
  - Vercel (better for frontend frameworks, less ideal for backend APIs)
  - Railway ($5/month credit may run out)
  - Render (limited to 750 hours/month, spins down after inactivity)
  - Fly.io (more complex setup, requires Docker knowledge)
  - Netlify (better for static sites)
- **Consequences:**
  - Must design application to work within 10K requests/month limit initially
  - Should use DynamoDB as primary database or integrate external database
  - Application must be compatible with Node.js runtime
  - Can scale to paid tier if traffic increases

---

## Development Progress

### Completed Features
- [x] Repository initialization
- [x] Planning document created
- [x] Application overview defined
- [x] System architecture designed

### In Progress
- [ ] *[Current work items]*

### Planned Features

**Phase 1: Core Content Feed**
- [ ] Content feed API endpoints
- [ ] Support for text content display
- [ ] Support for image content display
- [ ] Support for video content display
- [ ] Feed pagination
- [ ] Content filtering/sorting

**Phase 2: Thought Submission**
- [ ] Thought submission form/API
- [ ] Thought storage with pending status
- [ ] Associate thoughts with content items
- [ ] User identification for thoughts

**Phase 3: Moderation System**
- [ ] Moderation queue interface
- [ ] Approve/reject thought workflow
- [ ] Moderator authentication
- [ ] Moderation status tracking
- [ ] Publish approved thoughts to feed

**Phase 4: User Features**
- [ ] User registration/authentication
- [ ] User profiles
- [ ] User's thought history
- [ ] Role-based access (user, moderator, admin)

**Phase 5: Enhanced Features**
- [ ] Search functionality
- [ ] Content categories/tags
- [ ] Notifications for thought approval
- [ ] Rich text editing for thoughts
- [ ] Media upload for user content

### Backlog
- [ ] *[Ideas for later]*

---

## Technical Notes

### Setup Instructions
```bash
cd ~/Documents/multani-sandeep/kirat
# [Add setup commands here]
```

### Dependencies
*[List project dependencies]*

### Configuration
*[Document configuration requirements]*

### Environment Variables
*[Document required env vars]*

---

## Code Patterns & Conventions

### Coding Standards
*[Document coding conventions]*

### Naming Conventions
*[Document naming patterns]*

### File Structure
```
kirat/
├── CLAUDE.md          # This file
├── README.md          # Public documentation
└── [other files]
```

---

## Testing Strategy

### Test Approach
*[Document testing strategy]*

### Test Coverage Goals
*[Define coverage targets]*

---

## Deployment

### Deployment Strategy
**Platform:** Cyclic.sh

**Deployment Steps:**
1. Connect GitHub repository to Cyclic.sh
2. Configure environment variables (if needed)
3. Push to main branch triggers automatic deployment
4. Cyclic handles build and deployment automatically

**Cyclic.sh Features Used:**
- Automatic deployments on git push
- Built-in DynamoDB database
- Environment variable management
- Custom domain support (if needed)
- Serverless architecture
- Zero-downtime deployments

**Deployment URL:** *[To be added after first deployment]*

### Environments
- **Development:** Local machine (Node.js)
- **Production:** Cyclic.sh (https://cyclic.sh)
  - Free tier: Unlimited apps, 10K requests/month
  - Auto-scaling
  - Global CDN

---

## Known Issues & Limitations

### Current Issues
*[List known bugs or problems]*

### Technical Debt
*[Track technical debt items]*

### Limitations
*[Document current limitations]*

---

## Future Enhancements

### Short Term (Next Sprint)
*[Immediate next steps]*

### Medium Term (Next Month)
*[Features planned for next month]*

### Long Term (Future)
*[Vision for the future]*

---

## Learning & Resources

### Useful Resources
*[Links to documentation, tutorials, etc.]*

### Key Learnings
*[Document important learnings during development]*

---

## Meeting Notes & Decisions

### [Date] - Session Title
**Attendees:** [Who was involved]
**Topics Discussed:**
- Topic 1
- Topic 2

**Decisions Made:**
- Decision 1
- Decision 2

**Action Items:**
- [ ] Action 1
- [ ] Action 2

---

## Context for Claude

### Project Context
*[Important context that Claude should remember across sessions]*

### User Preferences
*[User's preferences for this project]*
- Code style preferences
- Development workflow
- Tools and frameworks preferences

### Common Commands
```bash
# [Frequently used commands for this project]
```

---

## Version History

### v0.1.0 - Initial Setup (Dec 9, 2025)
- Repository created
- Initial planning documents
- Git configuration

---

## Quick Reference

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/feature-name

# Commit changes
git add .
git commit -m "Description"

# Push to remote
git push origin feature/feature-name
```

### Repository Information
- **GitHub:** https://github.com/multani-sandeep/kirat
- **Main Branch:** main
- **Remote:** origin (SSH via github-kirat)
- **SSH Key:** ~/.ssh/id_ed25519_kirat

---

## Notes & Scratchpad

### Current Session Notes
*[Temporary notes for current work session]*

### Ideas & Thoughts
*[Capture ideas as they come]*

---

*Last Updated: December 9, 2025*
*Maintained by: Claude Code*
