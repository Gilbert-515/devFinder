import { useState, useEffect } from 'react';
import { MapPin, TwitterLogo, Link, Buildings } from 'phosphor-react';
import { api } from '../../lib/api';
import { FormatDate } from '../../functions'
import { ItemDetail } from './ItemDetail';
import { UserContentData } from './types';

interface UserContentProps {
  userNick: string;
  handleLoading: (state: boolean) => void;
}

export function UserContent ({ userNick, handleLoading }: UserContentProps) {
  const [wantedUser, setWantedUser] = useState<UserContentData>();
  const [searchError, setSearchError] = useState(false);

  async function searchUser() {
    handleLoading(true);

    try {
      const { data } = await api.get<UserContentData>(`/${ userNick }`);
      data.created_at = FormatDate(data.created_at);
      setWantedUser(data);
      setSearchError(false);
    }
    catch (error) {
      console.error(error);
      setSearchError(true);
    }
    
    handleLoading(false); 
  }

  useEffect(() => { 
    searchUser() 
  }, [userNick]);

  return (
    <section className=' bg-white-100 dark:bg-blue-500 mt-6 rounded-md p-7 flex flex-col items-center xl:flex-row xl:items-start'>
    { searchError ? 
      <h2 className='w-full text-center text-zinc-500 dark:text-grey-200 font-bold my-10'> Invalid User </h2> 
      :
      <>
        <aside className='p-2 mr-2'>
          <img className='rounded-full w-24' src={ wantedUser?.avatar_url } alt="avatar image" /> 
        </aside>

        <main className='max-w-full py-2 px-0 flex-1 md:px-5'>
          <header className='flex flex-col justify-between items-center md:flex-row'>
            <h3 className='text-zinc-900 dark:text-white-400 text-xl font-semibold'> { wantedUser?.name } </h3>
            <span className='text-sm text-zinc-500 dark:text-grey-200 mt-3 md:mt-0'> 
              Joined { wantedUser?.created_at } 
            </span>
          </header>

          <address className='text-blue-700 text-sm font-semibold mt-4 text-center md:text-start md:mt-2'> 
            @{ wantedUser?.login } 
          </address>

          <div className='text-zinc-500 dark:text-grey-200 text-sm my-6 text-center md:text-start'>
            { wantedUser?.bio ? wantedUser.bio : 'This profile has no bio'  }
          </div>

          <div className='bg-white-200 dark:bg-brand-500 py-4 px-6 w-full rounded-md flex justify-between mt-8'>
            <div className='flex flex-col'>
              <label className='text-gray-600 dark:text-grey-200 text-sm'> Repos </label>
              <span className=' text-zinc-900 dark:text-white-400 font-bold text-md mt-1'> { wantedUser?.public_repos } </span>
            </div>

            <div className='flex flex-col'>
              <label className='text-gray-600 dark:text-grey-200 text-sm'> Followers </label>
              <span className=' text-zinc-900 dark:text-white-400 font-bold text-md mt-1'> { wantedUser?.followers } </span>
            </div>

            <div className='flex flex-col'>
              <label className='text-gray-600 dark:text-grey-200 text-sm'> Following </label>
              <span className=' text-zinc-900 dark:text-white-400 font-bold text-md mt-1'> { wantedUser?.following } </span>
            </div>
          </div>

          <footer className='flex text-gray-700 dark:text-white-400 flex-wrap mt-6 justify-between'>
            <ItemDetail Icon={ MapPin } info={ wantedUser?.location } />
            <ItemDetail Icon={ TwitterLogo } info={ wantedUser?.twitter_username } />
            <ItemDetail Icon={ Link } info={ wantedUser?.blog } link />
            <ItemDetail Icon={ Buildings } info={ wantedUser?.company } />
          </footer>
        </main>
      </>
    }
    </section>
  );
}