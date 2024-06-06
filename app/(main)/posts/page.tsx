import BackButton from "@/components/back-btn";
import PaginationPost from "@/components/pagination-post";
import PostTable from "@/components/table";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" href="/" />
      <PostTable />
      <PaginationPost />
    </>
  );
};

export default PostsPage;
