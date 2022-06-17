import Post from "./Post";

function Posts() {
  const posts = [
    {
      userid: 1,
      username: "peekapo",
      userimage: "https://links.papareact.com/3ke",
      usercaption: "Loosey-Goosey its time to change hahahhahahaha",
    },
    {
      userid: 1,
      username: "peekapo",
      userimage: "https://links.papareact.com/3ke",
      usercaption: "Loosey-Goosey its time to change hahahhahahaha",
    },
  ];
  return (
    <div className="p-3">
      {posts.map((post) => (
        <Post key={post.userid} id={post.userid} image={post.userimage} caption={post.usercaption}name={post.username}/>
      ))}
    </div>
  )
}

export default Posts