const Course = (props) => {
  const total = props.course.parts.reduce((s, p) => s + p.exercises, 0);
  console.log("props are", props);
  const Header = (props) => {
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    );
  };
  return (
    <>
      <Header course={props.course} />
      {props.course.parts.map((parts) => (
        <p key={parts.id}>
          {parts.name} {parts.exercises}
        </p>
      ))}
      <h3>
        total of {props.course.parts.reduce((s, p) => s + p.exercises, 0)}{" "}
        exercises
      </h3>
      <Header course={props.course2} />
      {props.course2.parts.map((parts) => (
        <p key={parts.id}>
          {parts.name} {parts.exercises}
        </p>
      ))}
      <h3>
        total of {props.course2.parts.reduce((s, p) => s + p.exercises, 0)}{" "}
        exercises
      </h3>
    </>
  );
};
export default Course;
