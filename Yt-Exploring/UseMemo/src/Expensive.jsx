import { useMemo } from "react";
export default function Expensive() {
    const sum = () => {
        console.log("Calculating sum....")
        let i = 0;
        for (i = 0; i <= 1000000; i++) {
            i = i + 1;
        }
        return i;
    };
    const total = useMemo(()=>sum(), []);
    // const total = sum();
    return (
        <div>
            <p><b>Total Sum: {total}</b></p>
        </div>
    )
}