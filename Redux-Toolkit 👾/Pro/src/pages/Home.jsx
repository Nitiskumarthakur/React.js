
import ResultGrid from "../componets/ResultGrid"
import SearchBar from "../componets/SearchBar"
import Tabs from "../componets/Tabs"
import { useSelector } from "react-redux"

export default function Home() {

    const { query } = useSelector((state) => state.search);
    return (
        <div>
            

            <SearchBar />
            {query != '' ? <div> <Tabs />
                <ResultGrid /></div> : ''}

        </div>
    )
}