const Personform = (props) => {
  // Handle number change function
  const handlenamechange = (event) => {
    event.preventDefault();

    const newname = event.target.value;
    console.log(newname);
    props.setname(newname);
    props.setnumber(newname);
  };
  const handlenumberchange = (event) => {
    event.preventDefault();

    const newnumber = event.target.value;
    console.log(newnumber);
    props.setnumber(newnumber);
  };

  return (
    <form>
      <div>
        Name : <input onChange={handlenamechange} type="text" />
      </div>
      <div>
        Number : <input onChange={handlenumberchange} type="number" />
      </div>
    </form>
  );
};
export default Personform;
