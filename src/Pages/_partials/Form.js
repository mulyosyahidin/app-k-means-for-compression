import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, LinearProgress, TextField } from "@mui/material";
import Title from "../../components/Title";
import { store } from "../../Services/File";

export const Form = (props) => {
  const [file, setFile] = useState();
  const [cluster, setCluster] = useState(1);
  
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState("Proses Kompresi");
  const [showProgressLabel, setShowProgressLabel] = useState(false);

  let navigate = useNavigate();
  const navigateTo = (id) => {
    let path = `/data/${id}`;

    navigate(path);
  };

  function handleSubmit(e) {
    e.preventDefault();

    setDisableButton(true);
    setButtonText("Memproses ...");
    setShowProgressLabel("block");

    const formData = new FormData();

    formData.append("file", file);
    formData.append("cluster", cluster);

    store(formData).then((data) => {
      if (data.status) {
        setDisableButton(false);
        setButtonText("Berhasil!");
        setShowProgressLabel(false);

        setTimeout(() => {
          navigateTo(data.data._id);
        }, 2000);
      }
    });
  }
  return (
    <React.Fragment>
      <Title>Kompresi Gambar dengan Algoritma K-Means Clustering</Title>

      <div className="col-12">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <TextField
            type={"file"}
            margin="normal"
            required
            fullWidth
            id="file"
            label="File gambar"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <TextField
            type="number"
            margin="normal"
            required
            fullWidth
            id="cluster"
            label="Jumlah Cluster"
            name="cluster"
            autoComplete="cluster"
            onChange={(e) => setCluster(e.target.value)}
          />

          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ height: 40 }}
              type="submit"
              disabled={disableButton}
            >
              {buttonText}
            </Button>
          </Box>

          {showProgressLabel ? (
            <LinearProgress
              variant="buffer"
              value={70}
              valueBuffer={30}
              sx={{ marginTop: 3 }}
            />
          ) : null}
        </form>
      </div>
    </React.Fragment>
  );
};
