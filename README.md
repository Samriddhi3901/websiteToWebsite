# ✨ Magic Prompt - AI Website Generator

<div align="center">
  <h3>Transform ideas into fully functional websites with the power of Claude AI</h3>
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![Claude AI](https://img.shields.io/badge/Claude_AI-FF6B35?style=for-the-badge&logo=anthropic&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
</div>

---

## 🚀 About Magic Prompt

Magic Prompt is a revolutionary AI-powered SaaS platform that transforms the complex process of website development into simple conversations. Built with cutting-edge technology, it leverages Claude AI and advanced Large Language Models to generate complete, production-ready websites from natural language descriptions.

**From idea to implementation in minutes, not days.**

## ✨ Features

- **🤖 AI-Powered Generation** - Harnesses Claude AI's advanced reasoning for intelligent code generation
- **💬 Conversational Interface** - Describe your vision in plain English and watch it come to life
- **⚡ Instant Prototyping** - From concept to clickable prototype in minutes
- **🎨 Modern Design** - Generates responsive, beautiful websites using latest design principles
- **🔧 Full-Stack Creation** - Complete websites with frontend, backend, and database configurations
- **📱 Mobile-First** - All generated websites are fully responsive and mobile-optimized
- **🚀 Production Ready** - Clean, maintainable code following industry best practices
- **🔄 Iterative Development** - Refine and modify your website through natural conversation

## 🛠️ Tech Stack

**Frontend:**
- React 18+ with modern hooks
- Tailwind CSS for styling
- Responsive design components
- Interactive UI elements

**Backend:**
- Node.js with Express
- RESTful API architecture
- Database integration support
- Authentication & authorization

**AI Integration:**
- Claude AI API integration
- Advanced prompt engineering
- Context-aware code generation
- Intelligent error handling

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Claude AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Samriddhi3901/websiteToWebsite.git
   cd websiteToWebsite
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend (.env)
   cp .env.example .env
   ```
   
   Add your configuration:
   ```env
   CLAUDE_API_KEY=your_claude_api_key_here
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the application**
   ```bash
   # Start backend server
   cd backend
   npm run dev
   
   # Start frontend (in new terminal)
   cd frontend
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

1. **Describe Your Website**
   - Enter a natural language description of your desired website
   - Specify features, design preferences, and functionality

2. **AI Generation**
   - Magic Prot processes your request using Claude AI
   - Generates complete code structure and components

3. **Review & Refine**
   - Preview your generated website
   - Request modifications through conversation

4. **Deploy**
   - Download your generated code
   - Deploy to your preferred hosting platform

### Example Prompts

```
"Create a modern portfolio website for a photographer with a gallery, contact form, and about page"

"Build an e-commerce site for handmade jewelry with product catalog, shopping cart, and payment integration"

"Generate a landing page for a SaaS product with pricing tiers, testimonials, and signup form"
```

## 📁 Project Structure

```
websiteToWebsite/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── config/
│   └── package.json
└── README.md
```

## 🔧 Configuration

### Claude AI Setup

1. Get your API key from [Anthropic Console](https://console.anthropic.com/)
2. Add it to your `.env` file
3. Configure rate limits and model preferences in `config/claude.js`

### Customization

- **Styling**: Modify Tailwind configuration in `tailwind.config.js`
- **AI Prompts**: Update prompt templates in `src/prompts/`
- **Components**: Extend component library in `src/components/`

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
cd frontend
npm run build
vercel --prod
```

### Backend Deployment (Railway/Heroku)
```bash
cd backend
# Add your environment variables
git push origin main
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


  
  [⭐ Star this repo](https://github.com/Samriddhi3901/websiteToWebsite) if you found it helpful!
</div>
