import React, {useState, useEffect} from "react";
import axios from "axios";

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";


const HomePage =() => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    //async
    const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
}, []);


useEffect(() => {
  //async
  const requestToRatedMovies = async () => {
      const getToRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getToRatedMovies.data.results);
  };
  requestToRatedMovies();
}, []);


useEffect(() => {
  //async
  const requestUpComingMovies = async () => {
      const getUpComingMovies = await axios.get("/movie/upcoming");
      setUpComingMovies(getUpComingMovies.data.results);
  };
  requestUpComingMovies();
}, []);

    return (
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-16">
    <h1 className="text-2xl font-bold text-gray-800 my-3">
        The best of Entertainment
    </h1>
    <EntertainmentCardSlider/>
    </div>
    <div className="bg-bms-800 py-12 ">
        
        <div className="container mx-auto px-16 flex-col gap-3">
        <div className="hidden md:flex">
        <div>
        <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
        </div>
        </div>
        <PosterSlider images={popularMovies}
        title="Premiers" subtitle="Brand new relases every friday"
        isDark={true}/>
        </div>
    </div>
    </div>

    <div className="container mx-auto px-12 my-8">
    <PosterSlider images={topRatedMovies}
     title="Online Streaming events"
      isDark={false}/>
    </div>

    <div className="container mx-auto px-12 my-8">
    <PosterSlider images={upComingMovies}
     title="Outdoor Events"
      isDark={false}/>
    </div>
    </>
    );
};
export default HomePage;