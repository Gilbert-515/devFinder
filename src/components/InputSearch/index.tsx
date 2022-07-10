import { FormEvent, useState } from 'react';
import { MagnifyingGlass, CircleNotch } from 'phosphor-react';

interface InputSearchProps {
  handleOnSubmit: (seachValue: string) => void;
  requestIsLoading?: boolean;
}

export function InputSearch ({ handleOnSubmit, requestIsLoading }: InputSearchProps) {
  const [searchValue, setSearchValue] = useState('');

  function formSubmit(event: FormEvent) {
    event.preventDefault();
    
    handleOnSubmit(searchValue);
    !requestIsLoading && setSearchValue('');
  }

  return (
    <form className='bg-white-100 dark:bg-blue-500  mt-8 p-2 pl-6 rounded-md flex items-center' onSubmit={ formSubmit }>
      <MagnifyingGlass weight='bold' size='26' className='text-blue-700 mr-3'/>
      <input 
       type='text'
       onChange={event => setSearchValue(event.target.value)}
       className=' w-full bg-transparent p-2 text-sm text-zinc-700 placeholder:text-zinc-500 dark:text-white-400 dark:placeholder:text-grey-200 focus:outline-none' 
       placeholder='Search GitHub username...' 
       value={ searchValue }
      />

      <button
       className='text-white-400 text-[.8rem] bg-blue-300 py-3 px-5 rounded-md ml-4 disabled:opacity-50'
       disabled={ !searchValue || requestIsLoading }
      >
        { requestIsLoading ? <CircleNotch className='animate-spin h-5 w-5' /> : 'Search' }
      </button>
    </form>
  );
}