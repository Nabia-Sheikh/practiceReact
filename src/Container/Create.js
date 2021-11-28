import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Create() {

    const authers = [
        {
            value: "abc",
            label: "abc"
        },
        {
            value: "abc",
            label: "abc"
        },
        {
            value: "abc",
            label: "abc"
        }
    ]

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }

    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [auther, setAuther] = React.useState("");

    return (
        <form onSubmit={handleSubmit}>
            <Box md={12}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <Item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Title"
                                multiline
                                maxRows={4}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Item>
                    </Grid>
                    <Grid item md={12}>
                        <Item>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}

                            />
                        </Item>
                    </Grid>
                    <Grid item md={12}>
                        <Item>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={auther}
                                onChange={setAuther}
                                helperText="Please select your Auther"
                             />
                        {authers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                        {option.label}
                            </MenuItem>
                        ))}
                        </Item>
                    </Grid>
                    <Grid item md={12}>
                        <Item>
                        <Button onClick={handleSubmit}>Submit</Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}

