import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt="avatar"
            width={40}
            height={40}
            className="size-10 object-cover rounded-full"
          />
          <span className="font-medium">PhDBui</span>
        </div>
        <PostInfo />
      </div>
      {/* Desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-power-cables-on-a-railway.jpeg"
            alt="post"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {/* interaction */}
      <>
        <PostInteraction />
        <Comments />
      </>
    </div>
  );
};

export default Post;
