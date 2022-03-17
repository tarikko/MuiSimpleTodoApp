import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, reset } from '../features/todo/TodoSlice'
import { Button, Fab, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Refresh from '@material-ui/icons/Refresh';
import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
    palette: {
      primary: {
        main: blue[500]
      },
      secondary: {
        main: purple[500]
      }
    }
  });

export const TodoInput = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="TodoInput">
            <div>
              <TextField id="outlined-basic" variant="outlined" onChange={e => setInputValue(e.target.value)} placeholder="Add a task !"/>
            </div>
            <div>
              <Fab color="secondary" onClick={() => dispatch(add(inputValue))}><AddIcon/></Fab>
              <Fab color="secondary" onClick={() => dispatch(reset())}><Refresh/></Fab>
            </div>
        </div>
    )
}