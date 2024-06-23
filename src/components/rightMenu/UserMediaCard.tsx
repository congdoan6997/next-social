import Link from "next/link";
import Image from "next/image";

const UserMediaCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* MEDIA */}
      <div className="flex gap-4 justify-between flex-wrap">
        {[...Array(10)].map((item) => (
          <div className="relative w-1/5 h-20" key={item}>
            <Image
              src="https://images.pexels.com/photos/18207381/pexels-photo-18207381/free-photo-of-window-in-bar.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMediaCard;
