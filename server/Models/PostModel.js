import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    thumbnailProxied: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Post", postSchema);
