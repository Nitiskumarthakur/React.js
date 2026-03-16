import { nanoid, } from "@reduxjs/toolkit";
import { setActiveTabs } from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Tabs() {
    const tabs = ['Photo', 'Video', 'Gifs'];

    const dispactch = useDispatch();
    const ActiveTab = useSelector((state) => state.search.activeTab);

    return (
        <div className="pl-39">
            {
                tabs.map((element) => {
                    return (
                        <button className={`${(ActiveTab == element ? 'bg-green-400' : ' bg-blue-500')} border-2 px-5 py-2 text-xl rounded outline-none  m-3 active:scale-95 cursor-pointer uppercase `}
                            key={nanoid()}
                            onClick={() => dispactch(setActiveTabs(element))}
                        >{element}</button>
                    )
                })
            }
        </div>
    )
}