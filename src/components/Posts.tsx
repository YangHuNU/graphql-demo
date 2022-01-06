import { useDeletePostMutation, usePostsQuery } from "../generated";
import { useQueryClient } from "react-query";

const Posts = () => {
  const queryClient = useQueryClient();
  const { data: postData, isLoading } = usePostsQuery();
  const { mutate } = useDeletePostMutation({
    onSuccess: () => queryClient.invalidateQueries("Posts"),
  });

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {postData &&
        postData.posts?.map((post) => (
          <div key={post?.id}>
            <p>{post?.title}</p>
            <button onClick={() => post && mutate({ id: post.id })}>
              Delete
            </button>
            <hr />
          </div>
        ))}
    </>
  );
};

export default Posts;
