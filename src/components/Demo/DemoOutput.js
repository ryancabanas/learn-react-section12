const DemoOutput = (props) => {
  console.log("In demo");

  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
