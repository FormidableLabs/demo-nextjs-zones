import type { NextPage } from "next";
import { useRouter } from "next/router";

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>route to view individual user {id}</div>;
};

export default User;
