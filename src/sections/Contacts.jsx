import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dragonBackground from "../assets/Dragon.jpg";
import { useEffect, useState } from "react";

function MyFavorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // جلب البيانات المحفوظة
    const FetchFav = async()=>{
    const savedFavs = await  JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(savedFavs);
}
FetchFav();
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("dragonball_favs", JSON.stringify(updated));
  };

  return (
    <main className="bg-gray-800 min-h-screen">
      <Navbar />
      <h1 className="text-center text-white text-4xl font-bold py-10">Favorites</h1>
      
      <div className="p-6 grid gap-4 grid-cols-1 justify-items-center xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
        {favorites.length === 0 ? (
          <h2 className="text-white text-2xl">Empty</h2>
        ) : (
          favorites.map((item) => (
            <div
              key={item.id}
              className="hero-box font-bold mb-8 text-right rounded-xl w-2xs bg-cover flex-col justify-center"
              style={{ backgroundImage: `url(${dragonBackground})` }}
            >
              <button
                className="cursor-pointer text-2xl p-2"
                onClick={() => removeFavorite(item.id)}
              >
                ❤️
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-[400px] transition duration-300 hover:scale-120"
              />
              <div className="capitalize font-bold text-left p-3 bg-gray-700 text-white">
                    name <p className="text-yellow-400 text-2xl">{item.name}</p>
                    affiliation
                    <p className="text-yellow-400"> {item.affiliation}</p>
                    gender <p className="text-yellow-400"> {item.gender} </p>
                    maxKi <p className="text-yellow-400">{item.maxKi}</p>
                  </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </main>
  );
}

export default MyFavorite;