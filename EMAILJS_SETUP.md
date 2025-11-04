# EmailJS Setup Instructions

The contact form is now configured to send messages directly to your email using EmailJS.

## Setup Steps:

1. **Sign up for EmailJS** (free account available):
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create an Email Service**:
   - Go to Email Services in the dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account (dharmsingh0602@gmail.com)
   - **IMPORTANT**: When connecting Gmail, make sure to:
     - Click "Allow" when prompted for "Send email on your behalf" permission
     - If you see "412Gmail_API: Request had insufficient authentication scopes" error:
       1. Go to your EmailJS dashboard → Email Services
       2. Click on your Gmail service
       3. Click "Gmail Connect" or "Reconnect"
       4. Make sure to check "Allow Send email on your behalf" permission
       5. Complete the Google OAuth flow
       6. Try sending a test email again
   - Copy the **Service ID** (you have: `service_ml2425u`)

3. **Create an Email Template**:
   - Go to Email Templates → Create New
   - **Template Settings:**
     - **To Email**: `dharmsingh0602@gmail.com` ✅ (you already have this)
     - **From Name**: `{{from_name}}` (NOT {{name}} - must match exactly)
     - **From Email**: Leave empty OR use default email address ✅ (this is fine)
     - **Reply To**: `{{from_email}}` (NOT {{email}} - must match exactly)
     - **Bcc**: Leave empty (optional)
     - **Cc**: Leave empty (optional)
   
   - **Email Subject**: `New Contact Form Message from {{from_name}}`
   
   - **Email Content/Body**: Use this template:
   ```
   You have received a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio website.
   ```
   
   - Copy the **Template ID** (looks like `template_xxxxx`)

4. **Get your Public Key**:
   - Go to Account → API Keys
   - Copy your **Public Key**

5. **Create `.env.local` file**:
   - Create a file named `.env.local` in the root directory
   - Add these variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Restart your dev server**:
   ```bash
   npm run dev
   ```

## Testing:
- Fill out the contact form on your website
- Submit a test message
- Check your email inbox (dharmsingh0602@gmail.com)

## Troubleshooting:

### Gmail API Scope Error (412 Error):
If you see "412Gmail_API: Request had insufficient authentication scopes":
1. Go to EmailJS dashboard → Email Services
2. Find your Gmail service (currently `service_ml2425u`)
3. Click on it to open settings
4. Click "Gmail Connect" or "Reconnect" button
5. **Make sure to check the box**: "Allow Send email on your behalf" permission
6. Complete the Google OAuth authorization
7. Try sending a test email again

If the issue persists:
- Try disconnecting and reconnecting the Gmail service
- Make sure you're using a personal Gmail account (not a Google Workspace account with restrictions)
- Check if 2-factor authentication is enabled (recommended)

## Note:
- The `.env.local` file is already in `.gitignore` to keep your keys secure
- Never commit your EmailJS keys to version control
- Free EmailJS plan allows 200 emails per month
- Your current Service ID: `service_ml2425u`

