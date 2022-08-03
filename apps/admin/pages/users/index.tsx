import type { NextPage } from "next";
import Link from "next/link";

const Users: NextPage = () => {
  return (
    <div>
      <h1>There will be tons of users, this will be huge</h1>

      <Link href="/users/123">
        <a>Edit user 123</a>
      </Link>
    </div>
  );
};

export default Users;
