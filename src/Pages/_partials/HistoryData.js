import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Title from "../../components/Title";
import { index } from "../../Services/File";
import Moment from "react-moment";
import { Button } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

function HistoryData() {
  const [rows, setRows] = useState([]);

  let navigate = useNavigate();
  const navigateTo = (id) => {
    let path = `/data/${id}`;

    navigate(path);
  };

  useEffect(() => {
    index().then((data) => {
      let items = data.data;

      setRows(items);
    });
  });

  return (
    <React.Fragment>
      <Title>Riwayat Kompresi</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow key="0">
              <TableCell>#</TableCell>
              <TableCell>Waktu</TableCell>
              <TableCell>File Asli</TableCell>
              <TableCell>File Terkompres</TableCell>
              <TableCell>Klaster Kompresi</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Moment format="LL HH:mm">{row.created_at}</Moment>
                </TableCell>
                <TableCell>
                  {row.originalFile.name}
                  <br />
                  {row.uploadedFile.size}
                </TableCell>
                <TableCell>
                  {row.compressedFile.name}
                  <br />
                  {row.compressedFile.size}
                </TableCell>
                <TableCell>{row.compressedFile.cluster}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    startIcon={<InfoIcon />}
                    sx={{ marginLeft: 1 }}
                    onClick={() => navigateTo(row._id)}
                  >
                    Lihat
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default HistoryData;
