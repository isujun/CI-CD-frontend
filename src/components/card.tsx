interface CardProps {
  name: string;
  age: number;
  gender: "male" | "female";
}

export const Card = (props: CardProps) => {
  const { name, age, gender } = props;
  const background = gender === "male" ? "skyblue" : "pink";

  return (
    <div style={{ background }}>
      <div>Name : {name}</div>
      <div>Age : {age}</div>
      <div>Gender: {gender}</div>
    </div>
  );
};
