// Firebase Functions email architecture.
// Install Firebase Functions + your mail provider SDK and store credentials in server-side secrets.
// Never place SMTP/API secrets in customer JavaScript.
//
// Trigger idea:
// onValueCreated({ref:"bookings/{bookingId}"}, async event => {
//   const booking = event.data.val();
//   if (booking.status === "approved") {
//      await sendMail(...);
//   }
// });
//
// For a real deployment, use an email provider such as Resend, SendGrid, Mailgun,
// or SMTP through a server-side secret. The exact provider can be swapped without
// changing the customer booking UI.
export {};
