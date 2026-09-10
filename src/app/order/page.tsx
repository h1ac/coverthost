import type { Metadata } from "next";
import OrderClient from "./order-client";

export const metadata: Metadata = {
  title: "Order a Crypto VPS",
  description:
    "Configure your anonymous VPS: pick a plan, duration and location, then pay with Bitcoin, Monero or USDT. No account required.",
  alternates: {
    canonical: "/order",
  },
};

export default function OrderPage() {
  return <OrderClient />;
}
