import Navbar from "../components/Navbar";
import dragonBackground from "../assets/Dragon.jpg";
import getDragonball from "../Services/Api services";
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [dragonball, setDragonBall] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  const inputSearch = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const DragonResponse = await getDragonball();
        setDragonBall(DragonResponse);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => setIsloading(false), 2000);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  const filteredData =
    dragonball?.filter((item) =>
      item.name.toLowerCase().startsWith(searchWord.toLowerCase()),
    ) || [];

  return (
    <main className="bg-gray-800 relative">
      <Navbar />
      <div className="flex justify-center  bg-gray-900 p-6">
        <input
          ref={inputSearch}
          type="text"
          onChange={(e) => setSearchWord(e.target.value)}
          className="outline-0 border-1 w-xs p-2 bg-gray-300"
          placeholder="Search for Hero"
        />
      </div>
      <div className="mt-10 p-6 grid gap-4 grid-cols-1 justify-items-center xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div className="fixed z-100 top-25 flex flex-col justify-center items-center h-full w-full">
            <div className="flex justify-center items-center loader w-20 h-20 rounded-full border-t-4 border-amber-600 animate-spin "><span className="animate-pulse text-amber-700 font-bold text-2xl">★</span></div>
            <h2 className="font-bold p-3">Loading...</h2>
          </div>
        ) : error ? ( // 2. Then check for Error
          <p className="bg-white text-red-600 font-semibold">
            Error: {error.message}
          </p>
        ) : // 3. Finally, show the
        filteredData.length === 0 ? (
          <h2 className="bg-white text-4xl">Not Found</h2>
        ) : (
          filteredData.map((item) => {
            return (
              <div
                key={item.id}
                className={`hero-box font-bold mb-8 text-center  rounded-xl w-2xs bg-[image:var(--hero-bg)] bg-cover flex-col justify-center`}
                style={{ "--hero-bg": `url(${dragonBackground})` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" mx-auto h-[400px]  hero-box transition duration-300 hover:scale-120 cursor-pointer "
                />
                {
                  <div className="capitalize font-bold text-left p-3 bg-gray-700 text-white">
                    name <p className="text-yellow-400 text-2xl">{item.name}</p>
                    affiliation
                    <p className="text-yellow-400"> {item.affiliation}</p>
                    gender <p className="text-yellow-400"> {item.gender} </p>
                    maxKi <p className="text-yellow-400">{item.maxKi}</p>
                  </div>
                }
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
