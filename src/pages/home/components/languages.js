import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Progress from './progress';

import {palette} from '../../../assets/theme.json';

const Languages = ({classes, programingLanguages}) => {
    return(
        <div className={classes.attributesContainer}>
            <div className={classes.attribute}>
                <FontAwesomeIcon color={palette.primary.main} icon="terminal"  />
                <Typography className={classes.title} color={"textSecondary"} variant="display1" component="h2">
                    Programming <br/> Languages
                </Typography>
            </div>
            {
                programingLanguages.map(lang => {
                    return(
                        <div>
                            <Typography className={classes.skill} color={"textPrimary"} variant="subheading" component="p">
                                {lang.language}
                            </Typography>
                            <Progress primaryColor={palette.primary.main} percent={lang.experience}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

const styles = theme => ({
    attributesContainer: {
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    attribute: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left'
    },
    title: {
        fontSize: 20,
        marginLeft: 10
    }
})

export default withStyles(styles)(Languages);