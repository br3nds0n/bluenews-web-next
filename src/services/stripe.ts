import Stripe from "stripe";
import { version } from "../../package.json";

const key: string | any = process.env.STRIPE_API_KEY

export const stripe = new Stripe(
    key,
    {
        apiVersion: "2022-11-15",
        appInfo: {
            name: "bluenews",
            version
        }
    }
);