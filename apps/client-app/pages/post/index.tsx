import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

const NewPost: NextPage = () => {
  return (
    <div>
      <Link href="/post/new">
        <a>Create New Post</a>
      </Link>
    </div>
  );
};

export default NewPost;
