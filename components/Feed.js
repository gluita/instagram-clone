import Following from "./Following";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2  md:max-w-3xl  lg:grid-cols-3 mx-auto">
      <section className=" col-span-2">
        {/* stories */}
        <Stories />
        <Posts />
      </section>
      <section className="hidden lg:inline-flex col-span-1 ">
        <div className="mt-7 pl-5  fixed">
          <MiniProfile />
          <Following />
        </div>
      </section>
    </main>
  );
}

export default Feed;
