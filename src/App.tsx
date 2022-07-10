import { useState } from 'react';
import { Header, InputSearch, UserContent } from './components';

function App () {
  const [searchUser, setSearchUser] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  return (
    <div className='w-[90%] mx-auto my-12 md:w-[50%]'>
      <Header />
      <InputSearch 
       handleOnSubmit={ setSearchUser } 
       requestIsLoading={ isSearchLoading } 
      />

      { searchUser && 
        <UserContent 
         handleLoading={ setIsSearchLoading } 
         userNick={ searchUser } 
        /> 
      }
    </div>
  )
}

export default App;
