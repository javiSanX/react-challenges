import { useState, useEffect, useRef, useCallback } from "react";
import "./Demo.css";
import { useMovies } from "./hooks/useMovies.js";
import { Movies } from "./components/Movies.js";
import debounce from "just-debounce-it";

function useSearch() {
   const [search, updateSearch] = useState("");
   const [error, setError] = useState(null);
   const isFirstInput = useRef(true);

   useEffect(() => {
      if (isFirstInput.current) {
         isFirstInput.current = search === "";
         return;
      }

      if (search === "") {
         setError("No se puede buscar una película vacía");
         return;
      }

      if (search.match(/^\d+$/)) {
         setError("No se puede buscar una película con un número");
         return;
      }

      if (search.length < 3) {
         setError("La búsqueda debe tener al menos 3 caracteres");
         return;
      }

      setError(null);
   }, [search]);

   return { search, updateSearch, error };
}

export default function Demo() {
   const [sort, setSort] = useState(false);

   const { search, updateSearch, error } = useSearch();
   const { movies, loading, getMovies } = useMovies({ search, sort });

   const debouncedGetMovies = useCallback(
      debounce((search) => {
         console.log("search", search);
         getMovies({ search });
      }, 300),
      [getMovies],
   );

   const handleSubmit = (event) => {
      event.preventDefault();
      getMovies({ search });
   };

   const handleSort = () => {
      setSort(!sort);
   };

   const handleChange = (event) => {
      const newSearch = event.target.value;
      updateSearch(newSearch);
      debouncedGetMovies(newSearch);
   };

   return (
      <div className="text-sm text-center border-solid border border-neutral-800 text-white bg-black rounded-xl p-8 h-[calc(100vh-250px)] w-[100%] overflow-scroll grid justify-items-center">
    
         <header>
            <h1>Buscador de películas</h1>
            <form className="form" onSubmit={handleSubmit}>
               <input
                  className="inputFilms"
                  onChange={handleChange}
                  value={search}
                  name="query"
                  placeholder="Avengers, Star Wars, The Matrix..."
               />
               <input type="checkbox" onChange={handleSort} checked={sort} />
               <button className="button" type="submit">Buscar</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
         </header>

         <main className="mainContent">
            {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
         </main>
      </div>
   );
}
