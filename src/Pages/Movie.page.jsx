import React,{useContext,useState,useEffect} from "react";
import { FaCcVisa,FaCcApplePay } from "react-icons/fa"
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";
import { MovieContext } from "../context/movie.context";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";
const Movie = () => {
  const { id } = useParams;
  const { movie } = useContext(MovieContext);
  const [cast, setCast] =useState([]);
  const [similarMovies, setSimilarMovies] =useState([]);
  const [recommended, setRecommendedMovies] =useState([]);

  useEffect(() => {
    const requestCast = async() =>{
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    //async
    const requestSimilarMovies = async () => {
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    //async
    const requestrecommendedMovies = async () => {
        const getrecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
        setRecommendedMovies(getrecommendedMovies.data.results);
    };
    requestrecommendedMovies();
  }, [id]);


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };




    return (
    <>
    <MovieHero/>
    <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
        <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
        <p>{movie.overview}
        </p>
        </div>
        <div className="my-8">
            <hr/>
        </div>

        <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
            <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-200 px-3 py-3 border-yellow-100 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                    <p className="text-gray-600">Get 50% off up to INR 150 on all Visa Cards* on BookMyShow Stream</p>
                </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-200 px-3 py-3 border-yellow-100 border-dashed border-2 rounded-md">
                <div classname="w-8 h-8">
                <FaCcApplePay className="w-full h-full"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                    <p className="text-gray-600">Get 50% off up to INR 150 on all Visa Cards* on BookMyShow Stream</p>
                </div>
            </div>
            </div>
        </div>
    <div className="my-8">
    <div className="my-8">
            <hr/>
        </div>
    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & crew</h2>
    

      <Slider {...settingsCast}>
      {cast.map((castdata) => (
      <Cast 
      image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
        castName={castdata.original_name}
         role={castdata.character} />
      ))}
      </Slider>
        
    </div>
    <div className="my-8">
    <PosterSlider
     config={settings}
     images={similarMovies}
     title="You Might Also Like"
      isDark={false}/>
    </div>
    <div className="my-8">
            <hr/>
        </div>
    <div className="my-8">
    <PosterSlider
     config={settings}
     images={recommended}
     title="BMS XCLUSV"
      isDark={false}/>
    </div>
    </div>
    </>
    );
};

export default Movie;