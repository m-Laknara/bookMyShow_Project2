import React,{useContext} from "react";
import { MovieContext } from "../../context/movie.context";
import MovieInfo from "./MovieInfo.component";


const MovieHero = () =>{
    const {movie} = useContext(MovieContext);
    return(
        <>
        <div>
            {/*mobile*/}
            <div
            className="relative md:hidden w-full" 
            style={{height:"calc(180vw)"}}>

                <div className="absolute z-20 bottom-4 left-4">
                    <MovieInfo />
                </div>
                <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Posting" className="w-full h-full" />
                </div>
            {/*Medium*/}
            <div
             className="hidden md:block w-full lg:hidden"
             style={{height:"calc(100vw)"}}>
            <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
            <div className="absolute z-20 bottom-4">
                    <MovieInfo />
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Posting" className="w-full h-full" />
            </div>
            <div>

            </div>
            {/*Large*/}
            <div className="relative hidden w-full lg:block" style={{height:"30rem"}}>
                <div 
                className="absolute z-10 w-full h-full" 
                style={{backgroundImage: ""}}/>
                <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                    <div className=" w-64 h-96">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Posting" className="w-full h-full rounded-xl" />
                        
                    </div>
                    <div>
                        <MovieInfo/>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Posting" className="w-full h-full" />
            </div>
            </div>
        </>
    );
};

export default MovieHero;