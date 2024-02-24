import { useDispatch, useSelector } from "react-redux";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_API } from "../constants";
import { json } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);


  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // console.log(searchQuery)
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();       
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  const getSearchSuggestions = async () => {
    console.log("Api call " + searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    // update cache 
    dispatch(
      cacheResults({
      [searchQuery]:json[1]
    }));
  };


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="mx-3 cursor-pointer"
          alt="menu"
          src={img2}
          height={100}
          width={100}
        />
        <a href="/">
          <img alt="Logo" src={img3} height={100} width={100} />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-950 rounded-lg"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestion(true)}
            onBlur={()=> setShowSuggestion(false)}
          />
          <button>🔍</button>
        </div>
        {showSuggestion &&<div className="fixed bg-white py-2 px-5 w-[25rem] shadow-lg rounded-lg">
          <ul>
            {
              suggestions.map((s)=>(<li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍{s}</li>))
            }
            
          </ul>
        </div>}
      </div>
      <div>
        <img className="h-8" alt="user" src={img2} height={100} width={100} />
      </div>
    </div>
  );
};

export default Header;
