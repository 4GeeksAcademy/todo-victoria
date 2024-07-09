import React, { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const onKeyDown = (event) => {
        //si presiono enter        y   hay alguna tarea (es diferente a vacío)
        if (event.code === "Enter" && task.trim() !== "") {
            const newList = list.concat(task); //creo un array nuevo que concatena la tarea ingresada en el input (task) a la lista de tareas (list)
            setList(newList); //actualizo el estado de la lista al array que creé
            setTask(""); //limpio el input para volver a escribir
                }
    };

    const handleChange = (event) => { //actualizar el valor de task cada vez que se ingresa el input
        setTask(event.target.value);
    };

    const handleDelete = (index) => {
        const updatedTasks = []; //creo otro array para guardar la lista actualizada cuando borre algo (todos menos el que vaya a sacar)
        for (let i = 0; i < list.length; i++) { //recorro la lista de treas que tengo ahora
            if (i !== index) { //si el elemento que recorre en ese momento no es el que quiero borrar...
                updatedTasks.push(list[i]); //...lo añado a la lista actualizada (quedan afuera los otros)
             }
        }
        setList(updatedTasks);
    };

    return (
        <div style={{ width: "500px" }}>
         <h1 className="display-6">Lista de tareas</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nueva tarea"
                        onChange={handleChange}
                        value={task}
                        onKeyDown={onKeyDown}
                    />
                </li>
                  {list.length === 0 ? (<li className="list-group-item text-center text-danger">No hay tareas. Añadir nueva tarea.</li>) : (
                    list.map((item, index) => (
                <li key={index} 
                 className="list-group-item d-flex justify-content-between align-items-center">
                 {item}
                    <span 
                    onClick={() => handleDelete(index)} 
                    style={{ cursor: 'pointer' }}>
                    <i className="fa fa-times text-danger"></i>
                    </span>
                </li>
    ))
)}
                <li className="text-secondary text-center">Hay {list.length} tareas</li>
            </ul>
        </div>
    );
}

export default ToDoList;