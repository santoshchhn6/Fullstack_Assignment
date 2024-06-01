import data from "../data.json";

const Posts = () => {
  const postList = data.items;
  return (
    <div className="min-h-screen space-y-5">
      {postList.map((e, i) => (
        <Post key={i} data={e} />
      ))}
    </div>
  );
};

const Post = ({ data }) => {
  return (
    <div className="border border-gray-400 p-5 space-y-5 shadow-md rounded-xl">
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
