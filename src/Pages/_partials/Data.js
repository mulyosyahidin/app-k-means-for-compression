import React, { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Title from "../../components/Title";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { index } from "../../Services/File";
import Moment from "react-moment";
import { Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Link from '@mui/material/Link';

function Data(props) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <strong>File Asli</strong>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Nama</TableCell>
                  <TableCell>
                    <strong>{props.data.originalFile.name}</strong>
                  </TableCell>
                </TableRow>

                <TableRow
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Ukuran</TableCell>
                  <TableCell>
                    <strong>{props.data.originalFile.size}</strong>
                  </TableCell>
                </TableRow>

                <TableRow
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>File</TableCell>
                  <TableCell>
                  <Link href={props.data.uploadedFile.url} target="_blank">
                    <img src={props.data.uploadedFile.url} loading="lazy" />
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
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Nama</TableCell>
                  <TableCell>
                    <strong>{props.data.compressedFile.name}</strong>
                  </TableCell>
                </TableRow>

                <TableRow
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Ukuran</TableCell>
                  <TableCell>
                    <strong>{props.data.compressedFile.size}</strong>
                  </TableCell>
                </TableRow>

                <TableRow
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>File</TableCell>
                  <TableCell>
                  <Link href={props.data.compressedFile.url} target="_blank">
                    <img src={props.data.compressedFile.url} loading="lazy" />
                    </Link>
                  </TableCell>
                </TableRow>

                <TableRow
                  key={props.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Cluster</TableCell>
                  <TableCell>
                    <strong>{props.data.compressedFile.cluster}</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Data;
