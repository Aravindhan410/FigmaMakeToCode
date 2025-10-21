# Campus Management System - Login Credentials

## Demo Credentials

For testing and demonstration purposes, use the following credentials to log in to the Campus Management System:

### Administrator Account
- **Username:** `admin` or `admin@campus.edu`
- **Password:** `admin123`

### Demo Account
- **Username:** `demo` or `demo@campus.edu`  
- **Password:** `demo123`

## Features

### Login Page Features
- ✅ Username/Email input with validation
- ✅ Password input with show/hide toggle
- ✅ Remember Me checkbox (saves username to localStorage)
- ✅ Forgot Password functionality
- ✅ Create Account link
- ✅ Form validation with error messages
- ✅ Loading state during authentication
- ✅ Professional UI with blurred background

### Authentication Flow
1. **Initial Load:** Login page is the first screen shown
2. **Successful Login:** Redirects to Dashboard with full access to all modules
3. **Session Management:** Uses sessionStorage to maintain login state
4. **Logout:** Click the Logout button in the sidebar to return to login page

### Security Notes
⚠️ **Important:** These are demo credentials for development and testing purposes only.

- In production, implement proper authentication with:
  - Encrypted password storage
  - JWT or session tokens
  - Backend API validation
  - Rate limiting
  - Account lockout after failed attempts
  - Two-factor authentication (optional)

## User Interface

The login page includes:
- Centered login card with glassmorphism effect
- OneFlow branding with logo
- Professional gradient background
- Real-time form validation
- Accessible form controls
- Responsive design

## Session Management

- **Session Storage:** Active login session stored in `sessionStorage`
- **Remember Me:** Username saved to `localStorage` when checkbox is checked
- **Auto-logout:** Session cleared when user clicks Logout
- **Session Persistence:** Login state maintained across page refreshes

## Troubleshooting

If you encounter login issues:

1. **Clear browser cache and localStorage:**
   ```javascript
   localStorage.clear();
   sessionStorage.clear();
   ```

2. **Verify credentials match exactly** (case-sensitive)

3. **Check browser console** for any error messages

4. **Try different browser** if issues persist

## Development

To modify authentication logic, edit:
- `/components/LoginPage.tsx` - Login UI and validation
- `/App.tsx` - Authentication state management and routing

---

**Version:** 1.0.0  
**Last Updated:** October 16, 2024
