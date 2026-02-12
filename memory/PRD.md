# KANJAK Website - Product Requirements Document

## Project Overview
**Project Name:** KANJAK - Girl Child Empowerment Website  
**Domain:** kanjak.com  
**Project Type:** Social Impact / Non-Profit Initiative  
**Date Created:** December 13, 2024

## Original Problem Statement
Build a compassionate, dignified, and culturally rooted website for KANJAK - a social impact initiative focused on empowering underprivileged girls in North India. The website should bridge the gap between the sacred tradition of Kanjak (worshipping girls as forms of Maa Durga) and the modern responsibility of providing them dignity, education, and opportunity every single day.

## User Personas
1. **Underprivileged Girls (Ages 10-19)**
   - Seeking educational support, mentorship, and guidance
   - Need: Confidence, skills, and opportunities to grow

2. **Parents/Guardians**
   - Concerned about daughter's education and future
   - Need: Information about free support services and eligibility

3. **Potential Volunteers/Mentors**
   - Working professionals wanting to give back
   - Need: Clear information on how to contribute and make impact

4. **Partners/Donors**
   - Organizations/individuals wanting to support the mission
   - Need: Understanding of impact and partnership opportunities

## Core Requirements

### Design Requirements
- **Tone:** Compassionate, dignified, culturally rooted, hopeful, professional
- **Color Palette:** Warm culturally appropriate colors (saffron #FF9933, terracotta #E67E50, coral #FF7F6A, cream/ivory, gold #D4AF37)
- **Visual Style:** 
  - Mix of symbolic illustrations and real photographs
  - Respectful imagery (no victim-focused content)
  - Clean, minimal, trustworthy design
  - Mobile-friendly and accessible

### Technical Stack
- **Frontend:** React 19, Tailwind CSS, shadcn/ui components
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **Deployment:** Emergent Preview Environment

## What's Been Implemented (December 13, 2024)

### ✅ Phase 1: Frontend with Mock Data (COMPLETED)

#### Components Created:
1. **Header Component**
   - Fixed navigation with smooth scroll
   - Mobile responsive menu
   - Logo and branding
   - CTA button

2. **Hero Section**
   - Powerful headline and vision statement
   - Image grid with 3 empowering photos
   - Floating stats card
   - Dual CTAs (Get Involved, Learn More)

3. **About Section**
   - KANJAK acronym breakdown (6 values)
   - Letter badges with icons
   - Mission statement card
   - Hover animations

4. **Reality Section**
   - 6 challenges faced by underprivileged girls
   - Sensitive, informative presentation
   - Icon-based cards
   - Encouraging message

5. **Eligibility Section**
   - 5 criteria cards
   - Partnership message
   - Clear, accessible information

6. **Services Section**
   - 6 service cards with images
   - Academic mentoring, digital literacy, career guidance
   - Interview prep, communication skills, personal development
   - Features checklist (Free, Volunteer-Driven, Dignity-Focused)

7. **Vision Section**
   - Future impact messaging
   - 3 impact areas (Communities, Independence, Leadership)
   - Powerful quote card
   - Decorative background patterns

8. **Impact Metrics Section**
   - Animated counter for 4 metrics
   - Girls Supported: 250+
   - Active Mentors: 45+
   - Learning Hours: 5000+
   - Success Stories: 89+

9. **Success Stories Section**
   - 3 testimonial cards with images
   - Achievement badges
   - Real stories from Priya, Anita, and Meera

10. **Blog/News Section**
    - 3 blog post cards
    - Categories, dates, authors
    - Featured images
    - "View All" CTA

11. **Contact Form**
    - Full name, email, phone fields
    - Relation selector (girl/parent/volunteer/partner/other)
    - Message textarea
    - Toast notification on submit
    - Information cards for different audiences

12. **Footer**
    - Brand information
    - Quick links and resources
    - Contact information
    - Social media links
    - Privacy policy links

#### Mock Data Structure:
- All data stored in `/app/frontend/src/data/mock.js`
- Includes: hero data, KANJAK values, challenges, eligibility criteria, services, impact metrics, success stories, blog posts, cultural images

#### Design Implementation:
- Warm orange/amber color scheme (#ea580c, #f97316)
- Smooth scroll navigation
- Hover effects and micro-animations
- Responsive grid layouts
- Custom scrollbar styling
- Glass-morphism effects with backdrop blur
- Shadow depth and layering

## Prioritized Backlog

### P0 Features (Backend Development - Next Phase)
1. **Contact Form Backend**
   - POST endpoint `/api/contact/submit`
   - Store submissions in MongoDB
   - Email notification system
   - Form validation

2. **Success Stories Backend**
   - GET endpoint `/api/stories`
   - POST endpoint for admin to add stories
   - Image upload handling

3. **Impact Metrics Backend**
   - GET endpoint `/api/metrics`
   - Real-time counter updates
   - Admin dashboard for updating metrics

4. **Blog/News Backend**
   - GET endpoint `/api/blog/posts`
   - POST endpoint for creating posts
   - Category filtering
   - Pagination

### P1 Features (Future Enhancements)
1. **Volunteer Registration System**
   - Registration form
   - Profile creation
   - Skill matching

2. **Girl/Family Registration Portal**
   - Secure registration
   - Application tracking
   - Document upload

3. **Admin Dashboard**
   - Content management
   - Application review
   - Metrics tracking
   - User management

4. **Mentorship Matching System**
   - Algorithm for mentor-mentee pairing
   - Communication platform
   - Progress tracking

### P2 Features (Long-term Vision)
1. **Multi-language Support** (Hindi, English)
2. **Success Story Submission Portal**
3. **Event Calendar & Registration**
4. **Newsletter Subscription**
5. **Donation Integration**
6. **Analytics Dashboard**
7. **SEO Optimization**
8. **Accessibility Audit & Improvements**

## API Contracts (For Backend Implementation)

### Contact Form API
```
POST /api/contact/submit
Request Body:
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "relation": "girl|parent|volunteer|partner|other",
  "message": "string"
}
Response: { "success": true, "message": "Thank you for reaching out!" }
```

### Success Stories API
```
GET /api/stories
Query Params: ?limit=3&offset=0
Response: Array of story objects
```

### Impact Metrics API
```
GET /api/metrics
Response: {
  "girlsSupported": 250,
  "activeMentors": 45,
  "learningHours": 5000,
  "successStories": 89
}
```

### Blog Posts API
```
GET /api/blog/posts
Query Params: ?category=all&limit=3
Response: Array of blog post objects
```

## Next Action Items
1. ✅ Frontend with mock data - COMPLETED
2. 🔄 Backend development - UP NEXT
   - Implement contact form submission
   - Set up MongoDB models
   - Create API endpoints
   - Integrate frontend with backend
3. Testing & QA
4. Content population with real data
5. Performance optimization
6. Launch preparation

## Success Metrics
- User engagement (form submissions, time on page)
- Contact form conversion rate
- Mobile vs desktop usage
- Page load performance
- Accessibility score

## Notes
- All imagery is respectful and empowerment-focused
- Design avoids victim imagery or pity-based approach
- KANJAK is about empowerment with dignity, not charity
- Cultural elements incorporated without religious overtones
