// import Stripe from "stripe";
// import dotenv from "dotenv";

// dotenv.config();

// // Use your Stripe secret key here (or from environment variables)
// const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
// });

// export const payment = async (req, res) => {
//   try {
//     const { products } = req.body;

//     if (!products || products.length === 0) {
//       return res.status(400).json({ error: "No products provided" });
//     }

//     const amount = products.reduce((sum, p) => sum + p.price, 0) * 100; // in paise

//     const paymentIntent = await stripeInstance.paymentIntents.create({
//       amount,
//       currency: "inr",
//       payment_method_types: ["card"],
//     });

//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Payment creation failed" });
//   }
// };
