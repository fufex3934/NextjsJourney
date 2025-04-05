import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=eng">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  );
}
