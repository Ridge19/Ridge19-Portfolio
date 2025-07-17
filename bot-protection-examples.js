// Additional bot protection methods you could implement:

// METHOD 2: Simple Math CAPTCHA
const generateMathCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { question: `${num1} + ${num2}`, answer: num1 + num2 };
};

// METHOD 3: Mouse Movement Detection
const [mouseMovements, setMouseMovements] = useState(0);
useEffect(() => {
  const handleMouseMove = () => {
    setMouseMovements(prev => prev + 1);
  };
  document.addEventListener('mousemove', handleMouseMove);
  return () => document.removeEventListener('mousemove', handleMouseMove);
}, []);

// METHOD 4: Time-based Token
const generateTimeToken = () => {
  const now = Date.now();
  return btoa(now.toString()).slice(0, 8);
};

// METHOD 5: Server-side Protection (if you add a backend)
const requestDownloadToken = async () => {
  const response = await fetch('/api/request-download-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      userAgent: navigator.userAgent,
      timestamp: Date.now() 
    })
  });
  return response.json();
};

// METHOD 6: Rate Limiting with Local Storage
const checkRateLimit = () => {
  const lastDownload = localStorage.getItem('lastResumeDownload');
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  
  if (lastDownload && (now - parseInt(lastDownload)) < oneHour) {
    return false; // Rate limited
  }
  
  localStorage.setItem('lastResumeDownload', now.toString());
  return true;
};

// METHOD 7: Obfuscated File Path
const obfuscatedDownload = () => {
  const paths = [
    '/assets/docs/resume_v2.pdf',
    '/files/Ridge_Resume_2025.pdf',
    '/documents/professional_summary.pdf'
  ];
  const randomPath = paths[Math.floor(Math.random() * paths.length)];
  return randomPath;
};

// METHOD 8: Contact Form Requirement
const requireContactFirst = () => {
  const hasContacted = sessionStorage.getItem('hasContacted');
  if (!hasContacted) {
    alert('Please fill out the contact form first to download the resume.');
    document.getElementById('contact').scrollIntoView();
    return false;
  }
  return true;
};
