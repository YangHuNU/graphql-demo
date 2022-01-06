import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
      <Comments />
    </QueryClientProvider>
  );
};

export default App;
