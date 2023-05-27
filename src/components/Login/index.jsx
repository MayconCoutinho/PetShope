import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { UseForm } from "../../hooks/UseForm";

export const Login = () => {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const { formValues, onChange } = UseForm({
    email: "",
    password: "",
  });

  const [values, setValues] = useState({
    showPassword: false,
  });
  const LoginUser = async () => {
    setLoading(false);
    await signin(formValues.email, formValues.password, navigate, checked);
    setLoading(true);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "420px",
            height: "600px",
          }}
        >
          <Stack
            sx={{
              color: "#00793F",
              fontSize: "40px",
              textAlign: "center",
            }}
            spacing={2}
          >
            Adiministrador
            <Stack>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                type="email"
                onChange={onChange}
                sx={{
                  width: 300,
                  marginTop: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <FormControl
                variant="standard"
                sx={{
                  width: 300,
                  marginTop: 7,
                  marginBottom: 5,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Senha
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={onChange.password}
                  name="password"
                  onChange={onChange}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  marginBottom={3}
                >
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      color: "#00793F",
                      "&.Mui-checked": {
                        color: "#00793F",
                      },
                    }}
                  />
                  <Typography variant="caption">
                    {" "}
                    Deseja se manter logado?
                  </Typography>
                </Stack>
                <LoadingButton
                  loading={loading}
                  variant="outlined"
                  loadingPosition="center"
                  size="small"
                  onClick={() => {
                    LoginUser();
                  }}
                  sx={{
                    color: "#ffffff",
                    width: 300,
                    background: "#00793F",
                    borderRadius: "10px",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    "&:hover": {
                      backgroundColor: "#00b65e",
                    },
                  }}
                >
                  Entrar
                </LoadingButton>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
