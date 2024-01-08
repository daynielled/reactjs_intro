const Person = ({ name, age, hobbies}) => {
    const displayHobbies = hobbies.map((hobby,index) =>(
        <li key = {index}>{hobby}</li>
    ));

    return (
        <div>
        <p>Learn some information about this person</p>
        <h3>{name.length > 8 ? name.substring(0, 6) : name}</h3>
        <p>Age: {age}</p>
        {age > 18 ? <h3>Go vote!</h3> : <h3>Go Study!</h3>}
        <ul>{displayHobbies}</ul>
      </div>
    );
  };