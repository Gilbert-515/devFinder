import { useState } from 'react';
import { Sun, Moon } from 'phosphor-react';

const tagHTML = document.querySelector('html');

export function ButtonTheme () {
  const [isThemeDark, setIsThemeDark] = useState(true);

  function changeTheme() {
    setIsThemeDark(!isThemeDark);

    isThemeDark ?
    tagHTML?.classList.add('dark') :
    tagHTML?.classList.remove('dark');
  }

  return (
    <button 
     onClick={ changeTheme }
     className='flex items-center px-2 text-zinc-700 hover:text-zinc-600 dark:text-white-400 dark:hover:text-zinc-300 transition-colors'
    >
      <span className='text-[.7rem] tracking-wider mr-3'>
        { isThemeDark ? 'DARK' : 'LIGHT' }
      </span>

      { isThemeDark ? <Moon weight='fill' size='19' /> : <Sun weight='fill' size='19' /> }
    </button>
  );
}