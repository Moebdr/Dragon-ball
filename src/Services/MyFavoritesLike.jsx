import { useState } from "react";

function LikeButton({ likedItem }) {
  const [favorites, setFavorites] = useState([]);

  function handleLiked(fav) {
    const newFav = favorites.find((item) => item.id === fav.id);
    if (!newFav) {
      setFavorites([...favorites, newFav]);
      
    }else{
        return;
    }
  }
  return (
    <button
      onClick={() => handleLiked(likedItem)}
      className={`text-2xl m-3 block text-right hover:scale-120 
    transition cursor-pointer  ${findItemInFavorites(favorites,likedItem)}`}
    >
    Love
    </button>
  );
}
function findItemInFavorites(favorites,likedItem){
return favorites.findIndex(f=>f.id===likedItem.id) !== -1 ? 'text-white'  : 'text-red-600'
}
export { LikeButton};
