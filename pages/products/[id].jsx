import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>Product Detail {router.query.id}</h1>;
};

export default ProductDetail;
