import React from "react";

const Cafe = (props) => {

    const handleClick = () => {

        props.onClick(props.id)
    }

    return (
        <tr onClick={handleClick} style={{cursor: "pointer"}}>
            <th scope="row">{props.id}</th>
            <td>{props.nombre}</td>
            <td>{props.tipo}</td>
            <td>{props.region}</td>
        </tr>
    );
};

export default Cafe;