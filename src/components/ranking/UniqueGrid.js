import React, {Fragment, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UseUniqueKills } from '../../hooks/useUniqueRanking';
import UniqueGridRowsKill from './UniqueGridRowsKill';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5C5E68',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


export default function UniqueGrid() {
    const classes = useStyles()
    const { getCharNameUniqueKills, columnName, rowsUsers, rowsKill } = UseUniqueKills();

    useEffect(() => {
        getCharNameUniqueKills()
    }, []);


    console.log(rowsKill)
    //console.log(columnName)
        return (
            <Fragment>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User name</StyledTableCell>
                            {
                                columnName && columnName.map((data) => <StyledTableCell>{data}</StyledTableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {/*{
                                rowsUsers && rowsUsers.map((user) =>
                                    <StyledTableRow key={"User name"}>
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                {user}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </StyledTableRow>
                                )
                            }*/}
                        {
                            rowsKill && rowsKill.map((kill) =>
                                <StyledTableRow key={"tigerGirl"}>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {kill}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </StyledTableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </Fragment>
        );
}
