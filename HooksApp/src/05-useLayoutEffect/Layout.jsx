import { useCounter, useFetch } from "../hooks";
import { LoadingMessage, PokemonCard } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`,
  );

  const pokemon = data
    ? {
        id: data.id,
        name: data.name,
        abilities: data.abilities,
        sprites: [
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
        ],
      }
    : null;

  return (
    <>
      <h1>Pokemon Information</h1>
      <br />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        pokemon && <PokemonCard key={pokemon.id} {...pokemon} />
      )}

      <button
        className="btn btn-primary mt-2 me-3 "
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Previous
      </button>

      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Next
      </button>
    </>
  );
};
