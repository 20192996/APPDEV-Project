import Proptypes from "prop-types"
export default function ListOfFruits(props){
    //javascript functions outside of return()
    const listItems=props.items.map(item=>
        <li key = {item.id}>
        <strong>{item.name}</strong>:
        &nbsp; {item.color}
        </li>
        ) //we are mapping each individual item to a format
        
    return (
        //html elements inside return()
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    )
}
ListOfFruits.defaultProps = {
    category: "Category: ",
    items: []
}