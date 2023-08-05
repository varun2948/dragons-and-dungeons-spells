import { Link } from "react-router-dom";
import { Spell } from '../slice/IDnDSlice';
import { useDispatch } from "react-redux";
import { setFavoriteSpell } from "../slice/counter.slice";


const SpellCard = ({ spell, favoriteSpell }: { spell: Spell, favoriteSpell: Spell[] }) => {
    const dispatch = useDispatch();
    const addToFavorite = (e: React.MouseEvent<HTMLElement>, spell: Spell) => {
        e.preventDefault();
        dispatch(setFavoriteSpell(spell))
    }


    /**
     * Checks if an item is a favorite spell.
     *
     * @param {Spell} item - The spell to check if it is a favorite.
     * @return {boolean} Returns true if the item is a favorite spell, otherwise false.
     */
    const checkFavorite = (item: Spell) => {
        if (favoriteSpell?.find((spell: Spell) => spell.index === item.index)) {
            return true
        }
        return false
    }
    return (
        <Link key={spell.index} to={`/spells/${spell.index}`} className='mb-6'>
            <div className='card h-full p-3 mr-3 bg-gray-400 rounded-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mt-3 w-[300px]'>
                <div className='flex justify-between'>
                    {/* Spell name */}
                    <h2 className='card-title  mb-3 font-medium flex-[1_1_100%] hover:text-blue-400 flex justify-center items-center'>{spell.name}</h2>
                    {/* Favorite button */}
                    <span onClick={(e) => addToFavorite(e, spell)} title="Favorite" className={`material-icons hover:text-red-400 ${checkFavorite(spell) ? 'text-red-600' : ''} flex flex-1 justify-end items-center`}>favorite</span>
                </div>
            </div>
        </Link>
    )
}

SpellCard.propTypes = {}

export default SpellCard