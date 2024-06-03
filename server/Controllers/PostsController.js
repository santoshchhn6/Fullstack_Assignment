import Post from "../Models/PostModel.js";

export const getPosts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const posts = await Post.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Post.countDocuments();

    if (posts.length === 0) {
      res.status(200).json({ message: "no posts" });
    } else {
      res.status(200).json({
        success: true,
        posts,
        totalPage: Math.ceil(count / limit),
        currentPage: page,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
    // res.status(500).json(err);
  }
};
