export default function FavoriteFood(props){

    const listItems=props.items.map(item=>
        <li key = {item.id}>
        <strong>{item.name}</strong>:
        &nbsp; {item.color}
        </li>
        )
    return (
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    )
}
FavoriteFood.defaultProps = {
    category: "Category: ",
    items: []
}