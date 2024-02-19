import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POST = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

export default function App1() {
  const queryClient = useQueryClient();
  console.log(POST);
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POST]), //Promise.reject("Error Message"),
  });

  const newPostMutation = useMutation({
    mutationFn: async (title) => {
      return wait(1000).then(() =>
        POST.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.error) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={() => newPostMutation.mutate("New Post")}>
        Add New
      </button>
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
