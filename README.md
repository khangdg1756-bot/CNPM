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

HELLO
