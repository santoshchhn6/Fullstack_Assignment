import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { token } = useSelector((state) => state.user);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, []);

  const fetchPosts = async (currentPage) => {
    try {
      const data = await axios.get(
        `http://localhost:5000/posts?page=${currentPage}`,
        config
      );
      console.log(data);
      const postList = data?.data?.posts;
      setHasMore(postList?.length > 0);
      if (postList?.length > 0) {
        setPosts((prev) => [...prev, ...postList]);
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!posts?.length) return <h1>No Posts</h1>;

  return (
    <div className="min-h-screen space-y-5">
      <InfiniteScroll
        dataLength={posts.length}
        next={() => fetchPosts(currentPage)}
        hasMore={hasMore} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
        className="space-y-5"
      >
        {posts?.map((e) => (
          <Post key={e._id} data={e} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

const Post = ({ data }) => {
  return (
    <div className="bg-slate-100 border border-gray-400 p-5 space-y-5 shadow-md rounded-xl">
      <img
        src={data?.images?.thumbnailProxied}
        alt=""
        className="w-full rounded-md"
      />
      <h1 className="w-full sm:w-[500px] text-2xl text-gray-600 font-bold ">
        {data?.title}
      </h1>
    </div>
  );
};

export default Posts;
