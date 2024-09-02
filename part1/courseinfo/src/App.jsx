import React from "react";

// Header component
function Header(props) {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
}

//parts of content conponent
function Part1(props) {
  return (
    <p>
      {props.course.parts[0].name} {props.course.parts[0].exercises}
    </p>
  );
}
function Part2(props) {
  return (
    <p>
      {props.course.parts[1].name} {props.course.parts[1].exercises}
    </p>
  );
}
function Part3(props) {
  return (
    <p>
      {props.course.parts[2].name} {props.course.parts[2].exercises}
    </p>
  );
}

// constent component
function Content(props) {
  return (
    <div>
      <Part1 course={props.course} />
      <Part2 course={props.course} />
      <Part3 course={props.course} />
    </div>
  );
}

// Footer component
function Footer(props) {
  return (
    <div>
      <p>
        Number of exercise{" "}
        {props.course.parts[0].exercises +
          props.course.parts[0].exercises +
          props.course.parts[0].exercises}
      </p>
    </div>
  );
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course} />
    </div>
  );
};
export default App;
