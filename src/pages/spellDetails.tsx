import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { AppDispatch } from "../store/store";
import { clearSpellDetails, fetchSpellDetails, setFavoriteSpell } from "../slice/counter.slice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import DetailsList from "../components/DetailsList";
import { Spell } from '../slice/IDnDSlice';


/**
 * Component function for spell details
 */
const SpellDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams();
    const navigate = useNavigate();

    // Get the details of spell from the Redux store
    const spellDetails = useAppSelector((state) => state.dnd.spellDetails);
    // Get the favorite spell from the Redux store
    const favoriteSpell = useAppSelector((state) => state.dnd.favoriteSpell);

    useEffect(() => {
        // Fetch spell details when the `spell` param is available
        if (params.spell) {
            dispatch(fetchSpellDetails(params.spell));
        }
        // Cleanup function to clear spell details from redux store
        return () => {
            dispatch(clearSpellDetails());
        }
    }, [dispatch, params.spell])

    // Map the classes array to a list of elements
    const mappedClasses = spellDetails?.classes.map((cls) => {
        return (
            <li className="list-none border  bg-cyan-100 px-3 py-[0.1rem] rounded-xl" key={cls.index}>{cls.name}</li>
        )
    })

    // Map the subclasses array to a list of elements
    const mappedSubclasses = spellDetails?.subclasses.map((sub) => {
        return (
            <li className="list-none border  bg-red-200 px-3 py-[0.1rem] rounded-xl" key={sub.index}>{sub.name}</li>
        )
    })

    // Map the components array to a list of elements
    const mappedComponents = spellDetails?.components.map((comp) => {
        return (
            <li className="list-none border  bg-yellow-100 px-3 py-[0.1rem] rounded-xl" key={comp}>{comp}</li>
        )
    })

    /**
   * Adds the given spell to the user's favorites.
   *
   * @param {React.MouseEvent<HTMLElement>} e - The mouse event that triggered the function.
   * @param {Spell} spell - The spell to be added to favorites.
   */
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
        if (favoriteSpell?.find((spell) => spell.index === item.index)) {
            return true
        }
        return false
    }
    if (!spellDetails) return null;
    const activeSpell: Spell = { index: spellDetails?.index, name: spellDetails?.name, url: spellDetails?.url }
    return (
        <>
            <div className='card h-full p-3 mr-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mt-3   flex-row justify-center'>
                <div className='flex justify-between'>
                    <div role="button" className="flex hover:text-blue-400" onClick={() => navigate(-1)}><span className="material-icons hover:text-blue-400">arrow_back</span><span>Go&nbsp;back</span></div>

                    <h2 className='card-title  mb-3 font-medium flex-[1_1_100%] flex justify-center items-center text-3xl'>{spellDetails?.name}</h2>

                    <span role="button" title="Favorite" onClick={(e) => addToFavorite(e, activeSpell)} className={`material-icons hover:text-red-400 ${checkFavorite(activeSpell) ? 'text-red-600' : ''} flex flex-1 justify-end items-center`}>favorite</span>

                </div>
                <div>
                    <span>{spellDetails?.desc[0]}</span>
                    <hr className="border-t-4  w-[92%] m-auto" />
                    <div className="mt-4">
                        {/* <DetailsList type={''} content={spellDetails?.desc[0]} /> */}
                        <DetailsList type={'Higher Level:'} content={spellDetails?.higher_level[0]} />
                        <DetailsList type={'Materials:'} content={spellDetails?.material} />
                        <DetailsList type={'Level:'} content={spellDetails?.level} />
                        <DetailsList type={'Attack Type:'} content={spellDetails?.attack_type} />
                        <DetailsList type={'Casting Time:'} content={spellDetails?.casting_time} />
                        <DetailsList type={'Concentration:'} content={spellDetails?.concentration} />
                        <DetailsList type={'Duration:'} content={spellDetails?.duration} />
                        <DetailsList type={'Range:'} content={spellDetails?.range} />
                        <DetailsList type={'Damage Type:'} content={spellDetails?.damage?.damage_type?.name} />
                        <DetailsList type={'School:'} content={spellDetails?.school?.name} />
                        <DetailsList type={'Classes:'} content={mappedClasses} />
                        <DetailsList type={'Subclasses:'} content={mappedSubclasses} />
                        <DetailsList type={'Components:'} content={mappedComponents} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default SpellDetails