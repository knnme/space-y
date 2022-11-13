import { MenuComponents } from "./styles";

export interface MenuProps {
    text?: string;
    margin?: boolean;
}

function Menu ({text, margin}: MenuProps) {
    return (
        <>
         <MenuComponents margin={margin} >
             {text}
         </MenuComponents>
        </>
    );
 };
 
 export default Menu;