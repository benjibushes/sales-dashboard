import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  // Initialize Stripe with the secret key
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { 
    apiVersion: '2025-11-17.clover' 
  });

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    return new NextResponse('Webhook Error', { status: 400 });
  }

  // When someone completes payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // This finds the exact Airtable record using the client_reference_id you set when creating the link
    if (session.client_reference_id) {
      await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Clients/${session.client_reference_id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: { Status: 'Paid' }
        }),
      });
    }
  }

  return NextResponse.json({ received: true });
}

