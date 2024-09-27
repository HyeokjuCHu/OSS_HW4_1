import './hellow.css';

function Hellow() {
  return <h1>Hello World!</h1>;
}

function SubmitB() {
  return <button>Submit</button>;
}

function InputField() {
  return <input type="text" placeholder="Type here..." />;
}

export default Hellow;
export { SubmitB, InputField };
