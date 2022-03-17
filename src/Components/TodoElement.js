import React, { useState, useEffect } from 'react' 
import { Fab, TextField, Checkbox } from '@material-ui/core'
import { done, remove, edit, editComplete } from '../features/todo/TodoSlice'
import { Delete, Edit, Check } from '@material-ui/icons/'
import { useDispatch } from 'react-redux'

export const TodoElement = (props) => {
    const [newText, setNewText] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="TodoElement bounce-in-fwd" id={props.id}>
            <li key={props.id}>
                <div>
                    <Checkbox onChange={(e) => e.target.checked == true ? dispatch(done(props.id)) : dispatch(done(props.id))}/>
                </div>
                <div>
                    {
                        props.edit == true ?
                        <TextField id="standard-basic" label="Edited todo" onChange={(e) => setNewText(e.target.value)}/>
                        :
                        <span className={props.className}>{props.text}</span>
                    }
                </div>
                <div>
                    {
                        props.edit == true ?
                            <Fab color="secondary" onClick={() => dispatch(editComplete({text: newText, id: props.id}))}><Check /></Fab>
                        :
                        <>
                            <Fab color="secondary" onClick={() => dispatch(remove(props.id))} ><Delete/></Fab>
                            <Fab color="secondary" onClick={() => dispatch(edit(props.id))}><Edit/></Fab>
                        </>
                    }
                </div>
            </li>
        </div>
    )
}