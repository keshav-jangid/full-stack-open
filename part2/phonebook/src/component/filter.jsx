const Filter = (props) => {
  const { persons, filtered, setfiltered } = props;
  const handlefiterchange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value.toLowerCase();
    if (filter === "") {
      setfiltered([]);
    } else {
      const filteredvalue = persons.filter((persons) =>
        persons.name.toLowerCase().includes(filter)
      );
      setfiltered(filteredvalue);
    }
  };
  return (
    <div>
      filter list by <input onChange={handlefiterchange} type="text" />
      <h4>filtered list </h4>
      <ul>
        {filtered.length > 0 ? (
          filtered.map((filtered) => (
            <li key={filtered.id}>
              {filtered.name} {filtered.number}
            </li>
          ))
        ) : (
          <li>No Person Found</li>
        )}
      </ul>
    </div>
  );
};
export default Filter;
