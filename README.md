# CareerMate - AI-Powered Career Platform

Nền tảng AI-powered career cho sinh viên năm cuối và fresh graduates.

## 🚀 Features

### Candidate Web App
- **CV Analysis**: Phân tích CV với AI
- **Skill Gap Identification**: Xác định kỹ năng còn thiếu
- **Career Roadmaps**: Lộ trình nghề nghiệp cá nhân hóa
- **Mock Interviews**: Phỏng vấn thử với AI
- **AI Job Matching**: Gợi ý công việc phù hợp

### Recruiter Dashboard
- Quản lý job postings
- Quản lý candidates
- Review applications

### Admin Web System
- Analytics và insights
- User management
- System monitoring

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + Vite
- **Language**: JavaScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router
- **Icons**: Lucide React
- **Charts**: Recharts
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/khangdg1756-bot/CNPM.git
cd CNPM

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🏃 Running the App

```bash
# Development mode
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
CNPM/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main app component
│   │   └── components/
│   │       ├── LandingPage.tsx     # Landing page
│   │       ├── LoginPage.tsx       # Login page
│   │       ├── candidate/          # Candidate dashboard pages
│   │       │   ├── CandidateDashboard.tsx
│   │       │   ├── Overview.tsx
│   │       │   ├── CVAnalysis.tsx
│   │       │   ├── SkillGap.tsx
│   │       │   ├── CareerRoadmap.tsx
│   │       │   ├── MockInterview.tsx
│   │       │   └── JobMatching.tsx
│   │       ├── recruiter/          # Recruiter dashboard
│   │       │   └── RecruiterDashboard.tsx
│   │       ├── admin/              # Admin dashboard
│   │       │   └── AdminDashboard.tsx
│   │       └── ui/                 # shadcn/ui components
│   ├── main.tsx                    # App entry point
│   └── styles/
│       ├── index.css               # Main styles
│       ├── tailwind.css            # Tailwind imports
│       ├── theme.css               # Theme tokens
│       └── fonts.css               # Font imports
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

## 🎨 Design System

- **UI Library**: shadcn/ui components with Tailwind CSS
- **Color Scheme**: Professional gradient design
- **Responsive**: Mobile-first approach
- **Dark Mode**: Ready (configured in theme.css)

## 🔑 Login Credentials (Demo)

### Candidate
- Email: `candidate@example.com`
- Password: `password123`

### Recruiter
- Email: `recruiter@example.com`
- Password: `password123`

### Admin
- Email: `admin@example.com`
- Password: `password123`

## 📝 Notes

- All features currently use **mock data** for demonstration
- AI functionality simulated with predefined responses
- No backend required - pure frontend application
- Uses **pnpm** workspace protocol dependencies

## 👥 Contributors

- Khang DG

## 📄 License

MIT License
II. Requirement Allocation by Team Members (Based on GitHub Commits)

  1. PhamDangKhoa273 (Khoa)

Core Candidate Web and Authentication

Representative Commits

Create new account

Change Login

Change Login.2

Please try the demo account

Update candidate notification @gmail.com

Merge PR #3, #5, #6

Corresponding Requirements
Candidate Web / Mobile App

Sign up and Login using Email

User account creation

Update login information

Email notification system

Demo account for trial usage

Mapping to Proposal Documents

Functional Requirements – Candidate Web/Mobile App

Authentication and Account Management

Task package

Task package 2: Develop Candidate Web/Mobile App (PhamDangKhoa273)

This module represents the core foundation of the system.

  2. hagiaihuy1410-netizen (Huy)

Account Recovery and Personal Notes Features

Representative Commits

feat: cap nhat chuc nang quen mat khau

feat: them ghi chu

feat: sua ghi chu

Merge PR #7

Corresponding Requirements
Candidate Web

Forgot Password and account recovery

Personal notes for candidates

Edit and update notes

Mapping to Proposal Documents

Functional Requirements – Candidate Web/Mobile App

Account Recovery

Personal Notes and Supporting Tools

These features improve user experience and support personal career tracking.

  3. quangdt0872-jado (Quang)

User Interface and AI Chatbox Bug Fixes

Representative Commits

feat: sua loi giao dien

feat: cap nhat giao dien

chinh sua loi AI chatbox

add

Merge PR #4

Corresponding Requirements
Candidate Web and AI Interaction

User interface improvements

User interface bug fixes

AI Chatbox interface and interaction flow fixes

Mapping to Proposal Documents

Non-functional Requirements

Usability

User Interface and User Experience

AI Service Integration (Frontend Side)

This work connects the user interface with AI services.

  4. datlt5199-maker (Đạt)

AI Chatbox Feature Implementation

Representative Commits

feat: them chuc nang AI chatbox

feat: them ghi chu

Corresponding Requirements
AI Services

Career Coach Chatbot

AI-based career consultation

Interactive AI chat for candidates

Mapping to Proposal Documents

Proposed Solutions

Career Coach Chatbot

Products

AI Service (Career Coach)

This component demonstrates actual AI functionality in the system.

  5. haohc3924 (Hào)

Account Creation Flow and Instruction Fixes

Representative Commits

feat: cap nhat chuc nang tao tai khoan

feat: fix instructions

Merge PR #8

Corresponding Requirements
Candidate Web

Improved account creation workflow

User instruction and onboarding fixes

Mapping to Proposal Documents

Functional Requirements – Candidate Web

User Experience and Onboarding

  6. mhhoai13084 (Hoài)

System Stability and Restore

Representative Commits

feat: fix restore

Corresponding Requirements
System and Maintenance

System restore functionality

Improve system stability and reliability

Mapping to Proposal Documents

Non-functional Requirements

Reliability

Maintainability

  7. khangdg1756-bot (Khang)

Frontend Integration and Final Product Assembly

Representative Commits

feat: CareerMate complete frontend – AI-powered career platform

Corresponding Requirements

Frontend module integration

System-wide feature integration

Final product packaging

Mapping to Proposal Documents

Task package 5: Build, Deploy, and Test the system (khangdg1756-bot)
