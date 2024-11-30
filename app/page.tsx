import { Posts } from "./posts";
import { getPosts } from "./get-posts";
import { HeaderBar } from "./headerbar";

export const revalidate = 60;

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <HeaderBar />
      <Posts posts={posts} />
    </>
  );
}
