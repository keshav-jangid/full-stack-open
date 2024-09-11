import axios from "axios";
import { useEffect } from "react";

const Addbutton = (props) => {
  const { persons, name, number, setpersons, seterrormessage } = props;
  //add new number function
  const addnumber = (event) => {
    event.preventDefault();
    const newname = {
      name: name,
      number: number,
      id: String(persons.length + 1),
    };
    console.log(typeof setpersons);

    if (
      persons.some(
        (persons) =>
          persons.name === newname.name && persons.number === newname.number
      )
    ) {
      seterrormessage(`${newname.name} already exists!`);
    } else {
      setpersons(persons.concat(newname));
      axios.post("http://localhost:3001/persons", newname).then((reponse) => {
        console.log(reponse.data);

        seterrormessage("new contact added successfully");
      });
    }

    console.log(name);
    console.log(persons);
    console.log(number);
  };

  return (
    <div>
      <button onClick={addnumber} type="submit">
        Add
      </button>
    </div>
  );
};
export default Addbutton;
