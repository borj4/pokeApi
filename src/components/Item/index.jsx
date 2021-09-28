export default ({ sprites, name }) => {
    return (
      <section className="item">
        <img className="image" src={sprites.front_default} alt={`${name} image`} />
        <p className="name">{name}</p>
      </section>
    )
  }