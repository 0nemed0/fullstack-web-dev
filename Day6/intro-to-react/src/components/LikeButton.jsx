import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "♡ Like"}
    </button>
  );
}

export default LikeButton;

// Hearts
// are Unicode characters (emojis) — not images or icons from a file or library.

// Here's what they are:

// ❤️ = Red Heart (Unicode: U+2764 U+FE0F)

// ♡ = White Heart Suit (Unicode: U+2661)
