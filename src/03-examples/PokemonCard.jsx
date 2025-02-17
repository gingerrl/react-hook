import { useLayoutEffect, useRef, useState } from "react";


export const PokemonCard = ({ id, name, sprites = [] }) => {

  const h2ref = useRef();
  const [boxSize, setBoxsize] = useState()
  
  useLayoutEffect(() => {
    const {height, width}= h2ref.current.getBoundingClientRect()
    console.log({height, width})
    setBoxsize({height, width})
  }, [name])

  return (
    <section style={{ height: 200 , display: 'flex', flexDirection:'row'}}>
      <h2 className="text-capitalize">
        {id} - {name}
      </h2>

      <div>
        {sprites.map((img) => (
          <img key={img} src={img} alt={name} />
        ))}
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};
