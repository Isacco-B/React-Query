const POST = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
];

export const getPosts = () => {
  return new Promise((resolve) => resolve([...POST]));
};
