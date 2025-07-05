// import stripe from "stripe";
// import Booking from "../models/Booking.js";

// export const stripeWebhooks = async (request, response) => {
//   const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
//   const sig = request.headers["stripe-signature"];

//   let event;

//   try {
//     event = stripeInstance.webhooks.constructEvent(
//       request.body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (error) {
//     return response.status(400).send(`Webhooks Error: ${error.message}`);
//   }
//   try {
//     switch (event.type) {
//       case "payment_intent.succeeded": {
//         const paymentIntent = event.data.object;
//         const sessionList = await stripeInstance.checkout.sessions.list({
//           payment_intent: paymentIntent.id,
//         });
//         const session = sessionList.data[0];
//         const { bookingId } = session.metadata;
//         await Booking.findByIdAndUpdate(bookingId, {
//           isPaid: true,
//           paymentLink: "",
//         });
//         break;
//       }

//       default:
//         console.log("Unhandled event type:", event.type);
//     }
//     response.json({ received: true });
//   } catch (err) {
//     console.error("Webhook processing error:", err);
//     response.status(500).send("Internal Server Error")
//   }
// };

import { buffer } from 'micro';
import stripe from 'stripe';
import Booking from '../models/Booking.js'; // Adjust path as needed

// Critical: Disable body parsing for webhooks
export const config = {
  api: {
    bodyParser: false,
  },
};

export const stripeWebhooks = async (req, res) => {
  // Temporary GET support for testing
  if (req.method === 'GET') {
    return res.status(200).json({ 
      message: 'Webhook endpoint is working!',
      timestamp: new Date().toISOString(),
      environment: {
        hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
        hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET
      }
    });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers['stripe-signature'];
  
  let event;
  
  try {
    // Get raw body buffer
    const rawBody = await buffer(req);
    
    event = stripeInstance.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    console.log('Webhook event constructed:', event.type);
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        const sessionList = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntent.id,
        });
        const session = sessionList.data[0];
        
        if (!session || !session.metadata?.bookingId) {
          console.error('No session found or missing bookingId');
          return res.status(400).send('Invalid session data');
        }
        
        const { bookingId } = session.metadata;
        await Booking.findByIdAndUpdate(bookingId, {
          isPaid: true,
          paymentLink: '',
        });
        
        console.log('Booking updated successfully:', bookingId);
        break;
      }
      default:
        console.log('Unhandled event type:', event.type);
    }
    
    res.json({ received: true });
  } catch (err) {
    console.error('Webhook processing error:', err);
    res.status(500).send('Internal Server Error');
  }
}
