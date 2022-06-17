import faker from "@faker-js/faker"
import {useEffect} from "react"
import { useState } from "react"
import Story from "./Story"

function Stories() {
  const [suggestions,setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_,i) => {
      return {
      ...faker.helpers.contextualCard(),
      id: i,
    }})
    setSuggestions(suggestions)
    // console.log(suggestions)
  }, [])
  return (
    <div className="flex space-x-2 mt-2 rounded-sm p-3  overflow-x-scroll scrollbar-thin ">
      {suggestions.map(profile => (
        <Story key={profile.id} img={profile.avatar} username={profile.username}/>
      ))}
    </div>
  )
}

export default Stories