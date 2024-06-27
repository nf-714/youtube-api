import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { IVideoSchema } from "../types/types.ts";

const schema = new Schema<IVideoSchema>(
  {
    videoFile: {
      type: String,
      required: [true, "Please provide a video name"],
    },
    thumbnail: {
      type: String,
      required: [true, "Please provide a thumbnail"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

schema.plugin(mongooseAggregatePaginate);

export const Videos = mongoose.model<IVideoSchema>("video", schema);
