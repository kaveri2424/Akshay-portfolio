# TechEvents Pro - Event Technology Portfolio

A professional portfolio website for event technicians with integrated email quote request system using EmailJS.

## 🚀 Features

- **Professional Portfolio Website** - Showcase services, skills, and past projects
- **Email Quote Requests** - Instant email notifications via EmailJS
- **Responsive Design** - Works perfectly on all devices
- **Modern Tech Stack** - React, TypeScript, Tailwind CSS

## 📧 EmailJS Integration

This project uses EmailJS to send quote requests directly to the technician's email without needing a backend server.

### Setup EmailJS (10 minutes):

1. **Create EmailJS Account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create Email Service:**
   - Go to Email Services
   - Add your email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template:**
   - Go to Email Templates
   - Create a new template with these variables:
     ```
     Subject: New Quote Request from {{from_name}}
     
     New quote request received:
     
     Client Details:
     - Name: {{from_name}}
     - Email: {{from_email}}
     - Phone: {{phone}}
     
     Event Information:
     - Date: {{event_date}}
     - Type: {{event_type}}
     
     Requirements:
     {{message}}
     
     Reply to: {{from_email}}
     ```
   - Note your Template ID

4. **Get Public Key:**
   - Go to Account > General
   - Copy your Public Key

5. **Configure Environment:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your EmailJS credentials

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure EmailJS:**
   - Follow the EmailJS setup steps above
   - Update your `.env` file with your credentials

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Frontend: http://localhost:5173

## 📋 How It Works

1. **Client fills out quote form** on the website
2. **Form data is sent** via EmailJS directly from the browser
3. **EmailJS sends formatted email** to technician
4. **Technician receives instant notification** with all client details
5. **No backend server required** - everything runs client-side

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_TECHNICIAN_EMAIL=hello@techevents.pro
```

## 📧 Email Template Variables

When setting up your EmailJS template, use these variables:

- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{phone}}` - Client's phone number
- `{{event_date}}` - Event date
- `{{event_type}}` - Type of event
- `{{message}}` - Event details and requirements
- `{{to_email}}` - Technician's email

## 🚀 Deployment

### Frontend (Netlify/Vercel):
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder
3. Set environment variables in your hosting platform

### Environment Variables for Production:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_TECHNICIAN_EMAIL`

## 🆘 Troubleshooting

**Emails not sending?**
- Check your EmailJS credentials in `.env`
- Verify your email service is properly connected in EmailJS dashboard
- Check browser console for error messages
- Ensure your EmailJS template uses the correct variable names

**Form submission errors?**
- Check that all required fields are filled
- Verify EmailJS public key is correct
- Check network connectivity

## 🔒 Privacy & Security

- No backend server required
- All data sent directly through EmailJS
- Client-side form validation
- Secure HTTPS transmission
- No sensitive data stored locally

## 📞 Support

For technical support or questions about the EmailJS integration:
- Check the browser console for error messages
- Verify EmailJS dashboard configuration
- Test with EmailJS's test feature first

## ✨ Benefits of EmailJS

- **No Backend Required** - Pure frontend solution
- **Reliable Delivery** - Uses established email services
- **Free Tier Available** - 200 emails/month free
- **Easy Setup** - No server configuration needed
- **Secure** - Direct browser-to-email service communication