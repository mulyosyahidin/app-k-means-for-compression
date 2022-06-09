import Typography from '@mui/material/Typography';

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      G1A019061 [Teknik Kompresi 2022] {" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
