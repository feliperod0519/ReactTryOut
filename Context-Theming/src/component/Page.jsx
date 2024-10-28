import Header from './Header';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContextProvider';

export default function Page() {

  const { currentTheme } = useContext(ThemeContext);

  return (
    <div id="app" className={currentTheme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}