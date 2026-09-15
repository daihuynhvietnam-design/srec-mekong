# SREC MEKONG

Full-stack Firebase-ready hotel booking starter:
- Customer website
- Firebase Email/Password Authentication
- Realtime Database booking/status/chat
- Admin dashboard
- Hotel CRUD
- Up to 15 hotel images (Firebase Storage)
- Reviews restricted to completed/check-in bookings
- VN/EN + light/dark UI
- Responsive Booking/Agoda-inspired experience
- Realtime admin approval and chat

## 1. Run
Use a local server (do not double-click index.html):
```bash
npm install
npm run dev
```
Then open http://localhost:5173

Alternative:
```bash
npx serve .
```

## 2. Firebase
The supplied Firebase web configuration is already in `js/firebase-config.js`.

Enable in Firebase Console:
- Authentication > Email/Password
- Realtime Database
- Storage

Deploy `database.rules.json` as Realtime Database rules.
Deploy `storage.rules` as Storage rules.

## 3. Create the first admin
For security, do NOT let the browser promote itself to admin.
1. Register a normal account.
2. In Realtime Database, manually set:
   `users/<UID>/role = "admin"`
3. Refresh/re-login.
The admin dashboard will then appear.

## 4. Email / bills
The browser never contains an email provider secret. `functions/` contains a Firebase Cloud Function example. Configure your mail provider secret on the server and deploy it before enabling automated email.

## 5. Important
This is a production-oriented foundation, not a payment gateway. Add VNPay/Stripe only after merchant credentials and legal/business settings are ready.
