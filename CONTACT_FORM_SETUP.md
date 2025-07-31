# EmailJS Setup Instructions

Follow these steps to get your contact form working with EmailJS:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Ridge Tagala's Portfolio Contact Form
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## 5. Update Your Code
Replace the placeholder values in Contact.tsx:

```typescript
const SERVICE_ID = 'your_actual_service_id';
const TEMPLATE_ID = 'your_actual_template_id';  
const PUBLIC_KEY = 'your_actual_public_key';
```

## 6. Alternative: Environment Variables (Recommended)
Create a `.env.local` file in your project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.tsx to use:
```typescript
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
```

## 7. Test Your Form
1. Deploy your changes
2. Fill out the contact form
3. Check your email for the message
4. Check EmailJS dashboard for delivery status

## Alternative Solutions

### Netlify Forms (If deploying to Netlify)
Add `netlify` attribute to your form and `data-netlify="true"`

### Formspree
Simple form handling service: https://formspree.io/

### Custom Backend
Build your own API endpoint to handle form submissions

## Security Notes
- Never expose API keys in client-side code for production
- Use environment variables for sensitive data
- Consider adding rate limiting for production use
