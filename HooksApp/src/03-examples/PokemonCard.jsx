export const PokemonCard = ({ id, name, abilities, sprites = [] }) => {
  return (
    <section style={{}}>
      <h2>
        {" "}
        #{id} - {name}
      </h2>

      {sprites.map((sprite) => (
        <img style={{ width: "15%" }} key={sprite} src={sprite} alt={name} />
      ))}
    </section>
  );
};
