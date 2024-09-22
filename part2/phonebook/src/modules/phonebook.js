import axios from "axios";
const baseurl = "/api/persons";

import { useEffect } from "react";
const Get = (setpersons, seterrormessage) => {
  // useffect and call api using axios.get method //
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const promise = axios
          .get("https://phonebook-backend-yvrh.onrender.com/api/persons")
          .then((Response) => {
            setpersons(Response.data);
          });
      } catch (error) {
        console.log("error");
        seterrormessage("there is something wrong in get request!");
      }
    };
    fetchdata();
  }, []);
};

export default Get;
