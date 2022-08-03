import type { NextPage } from "next";
import Link from "next/link";

const Posts: NextPage = () => {
  return (
    <div>
      <h1>There will be tons of posts, this will be incredible</h1>

      <Link href="/posts/345">
        <a>Edit post 345</a>
      </Link>
    </div>
  );
};

export default Posts;
