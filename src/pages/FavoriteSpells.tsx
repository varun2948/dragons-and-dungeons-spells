import { useAppSelector } from "../hooks";
import SpellCard from "../components/SpellCard";
import { useNavigate } from "react-router-dom";

const FavoriteSpells = () => {
    const navigate = useNavigate();
    const favoriteSpell = useAppSelector((state) => state.dnd.favoriteSpell);


    return (
        <div className="App">
            <h4 className="bg-[#c5b312] text-white p-2 font-semibold text-xl rounded-md border-2 w-full">Your Favorite Spells</h4>
            <div role="button" className="flex hover:text-blue-400" onClick={() => navigate(-1)}><span className="material-icons hover:text-blue-400">arrow_back</span><span>Go&nbsp;back</span></div>
            <div className="spells-container p-3 flex flex-wrap">
                {favoriteSpell?.map((spell) =>
                    <SpellCard spell={spell} favoriteSpell={favoriteSpell} />)}
            </div>
        </div>
    )
}

FavoriteSpells.propTypes = {}

export default FavoriteSpells