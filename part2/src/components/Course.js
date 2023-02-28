
const Course = ({course}) =>{
  const total = course.parts.reduce((current,sum) => current + sum.exercises , 0)
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
      {course.parts.map(part=><li key={part.id}>{part.name} {part.exercises}</li>)}
      <li>
        <b>total of {total} exercises</b>
        </li>
      </ul>
    </div>
  )
}
  export default Course