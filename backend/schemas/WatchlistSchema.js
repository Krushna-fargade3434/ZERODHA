const { Schema } = require("mongoose");

const WatchlistSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true, index: true },
    name: { type: String, required: true, trim: true, uppercase: true },
    price: { type: Number, required: true },
    percent: { type: String, required: true },
    isDown: { type: Boolean, default: false },
  },
  { timestamps: true }
);

WatchlistSchema.index({ userId: 1, name: 1 }, { unique: true });

module.exports = { WatchlistSchema };
