const Persons = ({persons, search, handleDelete}) => {
  const filtered = persons.filter(person => person.name.includes(search))
  
  return (
    <div>
      {filtered.map(person => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default Persons