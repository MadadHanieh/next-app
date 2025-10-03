import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";


export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24 space-y-10">
      <h1>Hello World</h1>
      <Link href="/users" className="link link-accent">Users Page</Link>
      <ProductCard />
    </main>

  );
}
