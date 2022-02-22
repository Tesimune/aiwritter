import {GrammarCheckIcon} from "./svg";
import TabButton from "./TabButton";


export default function GrammarChecker(props){
    return(
        <TabButton icon={<GrammarCheckIcon />} text="Grammar Check" />
    )
}