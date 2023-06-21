export const PokemonListFrame: React.FC<
  React.PropsWithChildren<{
    description?: React.ReactNode;
  }>
> = ({ description, children }) => {
  return (
    <div className="px-4 md:px-8">
      <h1 className="text-2xl font-bold text-center">The list of Pokemons</h1>
      {description && <p className="text-center">{description}</p>}
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {children}
      </div>
    </div>
  );
};
