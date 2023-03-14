const Persons = ({persons,search}) =>{
    const filtered = persons.filter(person => person.name.includes(search))
    return(
        <div>
        {filtered.map(person => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
      </div>
    )
}
export default Persons