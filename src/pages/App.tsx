import { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../slice/counter.slice';
import { AppDispatch } from '../store/store';
import { useAppSelector } from '../hooks';
import SpellCard from '../components/SpellCard';
import { Link } from 'react-router-dom';

/**
 * Component that fetches and displays spells.
 */
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState('');
  // Get the list of spells from the Redux store
  const spells = useAppSelector((state) => state.dnd.spells?.results);

  // Get the favorite spell from the Redux store
  const favoriteSpell = useAppSelector((state) => state.dnd.favoriteSpell);

  // Fetch the posts when the component mounts or when the dispatch function changes
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const filteredSpell = spells?.filter((spell) => spell.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="App">
      <div className='bg-[#983ee7] text-white p-2 font-semibold text-xl flex rounded-md border-2 w-full'>
        <h4 className="flex-1 justify-center">Dragons & Dungeons Spells</h4>
        <Link to="/favorites"><button className='border-2 py-1 px-4 rounded-2xl font-normal text-base hover:bg-blue-400'>Favorite</button></Link>
      </div>
      <input className='border-2 rounded-xl p-2' placeholder='Search Spells' type="search" onChange={onSearch} value={search} />
      <div className="spells-container p-3 flex flex-wrap">
        {filteredSpell?.map((spell) =>
          <SpellCard spell={spell} favoriteSpell={favoriteSpell} />)}
      </div>
    </div>
  );
}

export default App;
