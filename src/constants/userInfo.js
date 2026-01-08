// User Information for AI Assistant - Single environment variable
const getUserInfo = () => {
  // Single environment variable containing all user info
  return import.meta.env.VITE_USER_INFO || `Kishan Singh – Frontend Developer. 
Email: aktkishansingh@gmail.com. 
Phone: +91 7068813260. 
Portfolio: https://kishan-singh.vercel.app/. 
LinkedIn: https://www.linkedin.com/in/kishan-singh-50a963201/. 
GitHub: https://github.com/kishan189. 

Professional Summary: Frontend Developer with 1 years of experience in React, Redux Toolkit, and scalable real-time applications. Skilled in AI-driven features, performance tuning, and crafting impactful UIs using Tailwind CSS, Material UI, and modern design systems. 

Technical Skills: 
Languages: JavaScript, TypeScript. 
Frameworks & Libraries: React, Redux Toolkit, Pusher, Socket.io, 
Databases: MongoDB. 
Styling & UI: Tailwind CSS, Material UI, Chakra UI, HTML, CSS. 

Experience: 
Frontend Developer – Developed widget-based analytics dashboards, implemented real-time notifications (Pusher) and role-based access control, refactored complex UI components for better scalability & performance.

Education: 
B.Tech Mechanical Engineering – AKTU (2016–2020). 

Projects: 
SaaS Analytics Dashboard – Full-stack SaaS dashboard with React/TypeScript frontend and Node.js/Express backend featuring real-time KPIs, interactive
charts, Redux Toolkit state management, JWT authentication, and MongoDB`;
};

// Export the user info
export const USER_INFO = getUserInfo();
