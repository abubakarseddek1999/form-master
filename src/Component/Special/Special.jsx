import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Spceial</h2>
            <p>has: {asset}</p>
            <p>has: {gift}</p>
        </div>
    );
};

export default Special;