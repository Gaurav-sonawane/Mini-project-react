export default function App() {
  return (
    <div>
      <Hello name="gaurav" />
    </div>
  );
}

//with destructuring
function Hello({ name }) {
  return <h1> Hello{name}</h1>;
}
