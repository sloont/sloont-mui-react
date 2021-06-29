import React from 'react';
import { Paper, useMediaQuery } from '@material-ui/core';
import { parsingFunction } from '../helpers/parser';
import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    plainText: {
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        background: '#232a2e',
        height: 0,
        minHeight: 'calc(100% - 6px)',
        padding: '4px',
        marginLeft: '1rem',
        overflow: 'auto',
        '& div': {
            '& pre': {
                '& code': {
                    fontSize: 12,
                    marginLeft: '-1rem'
                }
            }
        }
        
    },
    plainTextMobile: {
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        background: '#232a2e',
        height: 0,
        minHeight: 'calc(100% - 6px)',
        padding: '4px',
        // marginLeft: '1rem',
        overflow: 'auto'
        
    }
})
const PlainText = () => {
    const matches = useMediaQuery('(max-width:480px)')
    const classes = useStyles();
    const classPlainText = !matches ? classes.plainText : classes.plainTextMobile;
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

                express : 3,
                materialUi : 6,
                node : 5,
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
        
        <Paper className={classPlainText}>
            <div>{jsonSkills}</div>
            
        </Paper>
    
    );
}

export default PlainText;