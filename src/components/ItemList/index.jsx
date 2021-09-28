import Item from '../Item'


export default ({ list }) => {
  return (
    <section className="list">
      {list.map(({ sprites, name }, index) =>
        <Item {...{ sprites, name }} key={index} />)}
    </section>
  )
}