import LoginForm from '../Form/LoginForm';
// import MyComponent from "../UseId/UseId";
// import SearchBar from "../SearchBar/SearchBar";
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Agreement from '../Checkbox/Checkbox';
import FeedbackForm from '../Formik-FeedbackForm/FeedbackForm';
import { useState } from 'react';
function App() {
  const [lang, setLang] = useState('uk');
  const [coffeeSize, setCoffeeSize] = useState('sm');

  const handleSizeChange = evt => {
    setCoffeeSize(evt.target.value);
  };

  return (
    <>
      <LoginForm />

      {/* <MyComponent/>   */}

      <div>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </div>

      <div>
        <h1>Select coffee size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === 'sm'}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === 'md'}
            onChange={handleSizeChange}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === 'lg'}
            onChange={handleSizeChange}
          />
          Large
        </label>
      </div>

      <Agreement />
      <FeedbackForm/>
    </>
  );
}

export default App;
