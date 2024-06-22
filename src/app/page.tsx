import Stories from "@/components/Stories";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="w-[20%] hidden xl:block">
        {/* <LeftMenu type="home"/> */}
        Left menu
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <Stories />
        Add Post Feed
      </div>
      <div className="w-[30%] hidden xl:block">Right menu</div>
    </div>
  );
};

export default Homepage;
