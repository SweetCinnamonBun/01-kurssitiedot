const Header = ({ course }) => {
  return (
    <header>
      <h1 className="header-h1">{course.name}</h1>
    </header>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p className="part">
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Total = ({ parts }) => {
  const exercises = parts.map((x) => x.exercises);
  const total = exercises.reduce((x, y) => x + y);
  return (
    <div className="num-of-exercises">
      <p>Number of exercises: {total} </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((x) => (
        <Part key={x.id} part={x} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
