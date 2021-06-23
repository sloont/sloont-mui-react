import React from 'react';
import { Paper } from '@material-ui/core';
import { parsingFunction } from '../helpers/parser';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    plainText: {
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        background: '#232a2e',
        height: 'calc(100% - 6px)',
        padding: '4px',
        marginLeft: '1rem',
        overflow: 'hidden'
        
        
        
    }
})
const PlainText = () => {
    const classes = useStyles();
    const skills = `
        skills : {

            languages : {

                javaScript : 9,
                html : 7,
                css : 6,
                java : 5,
                python : 3,
                csharp : 2
            },

            libraries : {

                express : 2,
                materialUi : 6,
                node : 4,
                react : 6,
                redux : 6
            },

            tools : {    

                chrome : 4,
                bash : 3,
                git : 4,
                npm : 4,
                visualStudio : 4,
                github : 5,
                mongoDB : 2
            },

            operatingSystem : {

                windows : 4,
                ubuntu : 3
            }
        }`
    
    
    let jsonSkills = parsingFunction(skills);
    jsonSkills = parse(jsonSkills);
    console.log(jsonSkills);
    return (
        
        <Paper className={classes.plainText}>
            {/* {jsonSkills} */}
        </Paper>
    
    );
}

export default PlainText;