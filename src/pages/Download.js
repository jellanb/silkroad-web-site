import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import imagenDownload  from '../images/sroDownload.png'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 14, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
        backgroundColor: 'transparent'
    },
    root: {
        maxWidth: 345,
      },
      media: {
        height: 240,
        backgroundColor: 'transparent'
      },
}));

const tiers = [
    {
        title: 'Mega Mirror',
        buttonText: 'download',
        buttonVariant: 'contained',
        href: 'https://mega.nz/file/fAwg2JhL#5xOJ16GCpME6R-6SOGjY10ZZPmO6yyPJ4bluCCGg5js'
    },
    {
        title: 'Google Mirror',
        buttonText: 'download',
        buttonVariant: 'contained',
        href: 'https://drive.google.com/file/d/1twYF34brRrQboG5IKtwUE342CGSpKSoh/view'
    },
    {
        title: 'Mediafire Mirror',
        buttonText: 'download',
        buttonVariant: 'contained',
        href: 'https://www.mediafire.com/file/j6lwao46tmzqy0e/Cliente.rar/file'
    },
];

export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />            
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={imagenDownload}
                />
            </Card>                
            </Container>
            {/* End hero unit */}
            <Container maxWidth="xl" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                    onClick={()=> window.open(tier.href, "_blank")}
                                    fullWidth 
                                    variant={tier.buttonVariant} 
                                    color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br></br>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <Button
                    fullWidth
                    variant="contained"
                    color="default"
                    className={classes.submit}
                    >
                    Volver
                    </Button>
                </Link>
            </Container>
        </React.Fragment>
    );
}
