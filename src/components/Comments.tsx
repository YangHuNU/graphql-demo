import { useQueryClient } from "react-query";
import { useCommentsQuery } from "../generated";

const Comments = () => {
  // const queryClient = useQueryClient();
  const { data, isLoading } = useCommentsQuery();

  return (
    <>
      {isLoading && <p>isLoading</p>}
      {data &&
        data.comments?.map((comment) => (
          <div>
            <div>{comment?.text}</div>
            <div>Published by {comment?.user?.firstname}</div>
            <hr />
          </div>
        ))}
    </>
  );
};

export default Comments;
