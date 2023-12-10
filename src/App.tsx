import "./styles.css";

export default function App() {
    const sample_string = 'hello';
    const sample_nuber = 123;
  return (
      <ul>
          <li><span>sample_string</span>:<span>{sample_string}</span></li>
          <li><span>sample_nuber</span>:<span>{sample_nuber}</span></li>
      </ul>
  );
}
