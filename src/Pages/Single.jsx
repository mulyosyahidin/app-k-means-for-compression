import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';

import AppBar from '../components/AppBar';
import Copyright from '../components/Copyright';
import Drawer from '../components/Drawer';
import Title from "../components/Title";
import { show } from "../Services/File";

import { Items } from '../components/sidebar/Items';

const mdTheme = createTheme();

function Single() {
    let { id } = useParams();

    const [open, setOpen] = useState(true);
    const [data, setData] = useState(null);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        show(id).then(res => {
            setData(res.data);
        });
    }, [id]);

    return (
        <ThemeProvider theme={mdTheme}>
            <Helmet>
                <title>Data Kompresi | Kompresi K-Means Clustering</title>
            </Helmet>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px',
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Kompresi K-Means
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {Items}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Title>Hasil Kompresi {id}</Title>
                                {
                                    data != null ?
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <strong>File Asli</strong>
                                                <TableContainer component={Paper}>
                                                    <Table aria-label="simple table">
                                                        <TableBody>
                                                            <TableRow
                                                                key={1}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>Nama</TableCell>
                                                                <TableCell>
                                                                    <strong>{data.originalFile.name}</strong>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow
                                                                key={2}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>Ukuran</TableCell>
                                                                <TableCell>
                                                                    <strong>{data.originalFile.size}</strong>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow
                                                                key={3}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>File</TableCell>
                                                                <TableCell>
                                                                    <Link href={data.uploadedFile.url} target="_blank">
                                                                <img src={data.uploadedFile.url} loading="lazy" />
                                                            </Link>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <strong>Hasil Kompresi</strong>
                                                <TableContainer component={Paper}>
                                                    <Table aria-label="simple table">
                                                        <TableBody>
                                                            <TableRow
                                                                key={4}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>Nama</TableCell>
                                                                <TableCell>
                                                                    <strong>{data.compressedFile.name}</strong>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow
                                                                key={5}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>Ukuran</TableCell>
                                                                <TableCell>
                                                                    <strong>{data.compressedFile.size}</strong>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow
                                                                key={6}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>File</TableCell>
                                                                <TableCell>
                                                                    <Link href={data.compressedFile.url} target="_blank">
                                                                <img src={data.compressedFile.url} loading="lazy" />
                                                            </Link>
                                                                </TableCell>
                                                            </TableRow>

                                                            <TableRow
                                                                key={7}
                                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            >
                                                                <TableCell>Cluster</TableCell>
                                                                <TableCell>
                                                                    <strong>{data.compressedFile.cluster}</strong>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                        </Grid>
                                        : <div>x</div>
                                }
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Single;