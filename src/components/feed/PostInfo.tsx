import Image from "next/image";

const PostInfo = () => {
  return (
    <div className="relative">
      <Image
        src="/more.png"
        width={16}
        height={16}
        alt=""
        className="cursor-pointer"
      />
    </div>
  );
};

export default PostInfo;
