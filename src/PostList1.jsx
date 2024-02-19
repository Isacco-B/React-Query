import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

export default function PostList1() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  postsQuery.fetchStatus === "fetching"

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.error) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      <h1>PostList1</h1>
      <ol>
        {postsQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}
