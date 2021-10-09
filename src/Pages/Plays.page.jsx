import React from "react"
import Poster from "../components/Poster/poster.component";
import PlayesFilters from "../components/PlayesFilters/PlayesFilters.component";
const Plays = () => {
    return(
        <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Plays in Sri Lanka</h2>
                <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://bestsimilar.com/img/movie/thumb/cd/24027.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://bestsimilar.com/img/movie/thumb/cd/24027.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://bestsimilar.com/img/movie/thumb/cd/24027.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://bestsimilar.com/img/movie/thumb/cd/24027.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
            </div>
          </div>

        <div className="lg:w-3/12">
        <h2 className="text-2xl font-bold md-4">Filters</h2>
        <div>
        <PlayesFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlayesFilters
                title="Language"
                tags={["Tamil", "Telegu", "English"]}
              />
        </div>
        </div>
         
          </div>
          </div>

          

        </>
    );
    
};
 export default Plays;