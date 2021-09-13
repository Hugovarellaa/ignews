import {NextApiRequest, NextApiResponse} from 'next'
import { stripe } from '../../services/stripe'

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if(req.method === 'POST') {
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: "required",
      
    })
  }else {
    res.setHeader("Allow" , "POST")
    res.status(405).end("Method not Alowed")
  }
} 