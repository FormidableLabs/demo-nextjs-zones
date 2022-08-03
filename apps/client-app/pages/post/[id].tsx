import type { NextPage } from "next";
import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>route to view individual post {id}</div>;
};

export default Post;
