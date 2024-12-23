import Count from "@/components/Count";
import Hero from "@/components/Hero";
import Product from "@/components/product";
import Reviews from "@/components/Reviews";
import { MessageSquareShare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Count />
      <hr />
      <Product />
      <hr />
      <Reviews />

      <Link href="https://api.whatsapp.com/send?phone=6281241933754&text=Hi Aurielle Jewelry, I'm want to ask something" target="_blank">
        <div className="fixed bottom-5 right-5 w-14 h-14 bg-black rounded-full flex items-center justify-center">
          <MessageSquareShare fill="#ffffff" stroke="#ffffff" />
        </div>
      </Link>
    </main>
  );
}
