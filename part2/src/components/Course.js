
const Course = ({course}) =>{
  return (
    
    <div>
      <h1>Web development curriculum</h1>
    {course.map(course => <div key ={course.id}>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map(parts=> <li key = {parts.id}>
          {parts.name} {parts.exercises}
        </li>)}
      </ul>
      <b> total of {course.parts.reduce((current,sum)=>current + sum.exercises ,0 )} exercises</b>
      </div>)}
    </div>
  )
}
  export default Course