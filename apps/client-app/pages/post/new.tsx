import type { NextPage } from "next";
import Link from "next/link";

const NewPost: NextPage = () => {
  return (
    <div>
      <h1>route to create new pet post</h1>
      <Link href="/post/74747">
        <a>Example of a post 74747</a>
      </Link>
    </div>
  );
};

export default NewPost;
