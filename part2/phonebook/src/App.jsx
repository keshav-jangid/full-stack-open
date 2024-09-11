import { useEffect, useState } from "react";
import Personform from "./component/personform";
import Addbutton from "./component/addbutton";
import Personslist from "./component/personslist";
import Filter from "./component/filter";
import Get from "./modules/phonebook";
import Notification from "./component/notification";

// the app function starts from here
function App() {
  const [persons, setpersons] = useState([]);
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [errormessage, seterrormessage] = useState("some error");

  // useeffect and call api using fetch method //
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try{
  //       const response = await fetch('http://localhost:3001/persons');
  //       const data = await response.json();
  //       console.log("json serverdata " , data);
  //       setpersons(data);
  //     }
  //     catch(error){
  //       console.log("error");
  //     }
  //   }
  //   fetchdata();
  // },[]);
  Get(setpersons);

  return (
    <>
      <h2>Phonebook</h2>
      <Personform
        persons={persons}
        setpersons={setpersons}
        name={name}
        setname={setname}
        number={number}
        setnumber={setnumber}
      />
      <Addbutton
        persons={persons}
        setpersons={setpersons}
        name={name}
        number={number}
        errormessage={errormessage}
        seterrormessage={seterrormessage}
      />
      <Notification message={errormessage} />
      <h2>Numbers</h2>
      <Personslist
        setpersons={setpersons}
        persons={persons}
        seterrormessage={seterrormessage}
      />
      <h2>filter </h2>
      <Filter
        persons={persons}
        setpersons={setpersons}
        filtered={filtered}
        setfiltered={setfiltered}
      />
    </>
  );
}

export default App;
