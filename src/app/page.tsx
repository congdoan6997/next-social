import AddPost from "@/components/AddPost";
import Stories from "@/components/Stories";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="w-[20%] hidden xl:block">
        {/* <LeftMenu type="home"/> */}
        Left menu
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          Feed
        </div>
      </div>
      <div className="w-[30%] hidden xl:block">Right menu</div>
    </div>
  );
};

export default Homepage;
