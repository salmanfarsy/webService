import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Contact = () => {
    return (
        <div>
                  <h2>You can Contact us</h2>
                <span>Just submit your comment with an Email</span>
            <Box sx={{margin:'10px auto', display:'flex' , flexDirection:'column' , width:'50%'}}>
              <TextField
          id="email-input"
          label="Email"
          type="Text"
          sx={{margin:1}}
        />
             <TextField
          id="comment-input"
          label="Comment"
          type="Text"
          multiline
          rows={4}
        />
         <Button variant="contained" sx={{margin:'10px' }}>Submit Your Comment</Button>
        </Box>
        </div>
    )
}
