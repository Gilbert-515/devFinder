import { ButtonTheme } from './ButtonTheme';

export function Header () {
  return (
    <header className='w-full text-zinc-900 dark:text-white-300 flex justify-between items-center'>
      <span className='text-xl font-bold'>devfinder</span>

      <ButtonTheme />
    </header>
  );
}