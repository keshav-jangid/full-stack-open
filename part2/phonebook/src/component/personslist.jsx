import axios from "axios";

const Personslist = (props) => {
  const { persons, setpersons, seterrormessage } = props;

  const deletecontact = (id) => {
    alert("Delete the contact ");
    axios
      .delete(`https://phonebook-backend-yvrh.onrender.com/api/persons/${id}`)
      .then((Response) => {
        console.log(id);
        console.log("deleted", Response.data);
        setpersons(persons.filter((person) => person.id !== id));
        seterrormessage("contact deleted succesfully");
      })
      .catch((error) => {
        console.log(error);
        seterrormessage("there is something wrong in deleting the contact");
      });
  };
  return (
    <>
      <ul>
        {persons.length > 0 ? (
          persons.map((persons) => (
            <li key={persons.id}>
              {persons.name} {persons.number}{" "}
              <button
                persons={persons}
                onClick={() => {
                  deletecontact(persons.id);
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No Persons in Phonebook</li>
        )}
      </ul>
    </>
  );
};
export default Personslist;
