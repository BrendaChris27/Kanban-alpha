import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

// função que add as tarefas

function Task(props) {
  return (
    <div className="task">
        <h2 className="titletask">Descrição: </h2>
        <p className="texttask">{props.task}</p>
        <h2 className="titletask">Prazo: </h2>
        <p className="texttask">{props.data}</p>
        <div className="icon">
            <BsFillTrashFill className=" trash" onClick={() => props.removeTask(props.index, props.status)}/>
            <MdModeEditOutline className="edit" onClick={() => props.editTask(props.index, props.status, props.data, props.task)} />
        </div>
    </div>
  );
}

export default Task;