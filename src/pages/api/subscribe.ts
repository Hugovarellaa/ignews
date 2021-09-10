import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,

      //metadata
    });

    //Criando sessão com o stripe
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [
        { price: "price_1J1gsKAZhJCoN0MQyHVkGvL3", quantity: 1 }
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: 'http://localhost:3000/post',
      cancel_url: 'http://localhost:3000/'
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("method not allowed");
  }
}
