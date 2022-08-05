import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Coffee Store Near You {router.query.id}</h1>
      <Link href={"/"}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
