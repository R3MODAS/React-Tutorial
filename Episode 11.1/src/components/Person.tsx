interface Props {
  name: string;
  email: string;
  age: number;
  friends: string[];
  country ?:string;
  city : string;
}

export enum City{
  Kolkata = "Kolkata",
  Kanchrapara = "Kanchrapara",
  Kalyani = "Kalyani"
}

function Person(props: Props) {
  return (
    <div>
      <h2>Name : {props.name} </h2>
      <h2>Email : {props.email} </h2>
      <h2>Age : {props.age} </h2>
      <h2>Country : {props.country}</h2>
      <h2>City : {props.city} </h2>
      {props.friends.map((friend: string, id: number) => (
        <span key={id}>{friend}, </span>
      ))}
    </div>
  );
}

export default Person;
