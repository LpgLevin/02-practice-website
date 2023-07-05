function Concept( conceptProps ) {

    return (

      <li className="concept">
        <img src={ conceptProps.image } alt={ conceptProps.title } />
        <h2>{ conceptProps.title }</h2>
        <p>{ conceptProps.description }</p>
      </li>

    );

};

export default Concept;