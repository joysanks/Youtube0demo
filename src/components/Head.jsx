import {  useState } from "react";


const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (                                                                                                                                                                                                                                                                                                     
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
        <img className="h-9 cursor-pointer" onClick={()=>setIsMenuOpen(!isMenuOpen)} alt = "menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMID-oOiTo_D0iyQBZjcGFXvYUCWCaBHnWp-8tiHEdA&s=10"/>
        <img className="h-10 cursor-pointer mx-2" alt = "logo"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aZEbWHAWuYsHcn3Mvk7fYCmOps4cnwDru6jbRYaPmA&s=10q"/>
        </div>
        <div className="col-span-10 px-10">
          <input
          className="p-2 w-1/2 border border-gray-400 rounded-l-full" type="text"/>
          <button className="py-2 px-5 bg-gray-100 border border-gray-400 rounded-r-full cursor-pointer">🔍</button>
        </div>
        <div className="col-span-1">
          <img className="h-8" alt = "user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>

      </div>
    </>
  )
};

export default Head;
