import Link from "next/link";

const ProductsPage = () => {
  return (
    <main>
      <h1>Products</h1>
      <Link href="/products/123">123</Link>
      <Link href="/products/abc">abc</Link>
      <Link href="/products/456">456</Link>
    </main>
  );
};

export default ProductsPage;
