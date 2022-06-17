import faker from "@faker-js/faker";
import {useState , useEffect} from 'react'
import FollowSuggestion from "./FollowSuggestion";

function Following() {
  const [followSuggestions,setFollowSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setFollowSuggestions(suggestions);
    console.log(suggestions);
  }, [])
  
  
  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4">
      <p className=" text-center font-semibold">Discover People</p>
      {followSuggestions.map((person) => (
        <FollowSuggestion
          key={person.id}
          username={person.username}
          img={person.avatar}
        />
      ))}
    </div>
  );
}

export default Following;
