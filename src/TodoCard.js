function TodoCard(props) {
    console.log("props: ", props.id)
    return (
        <div>{props.foo}</div>
    )
}

export default TodoCard;