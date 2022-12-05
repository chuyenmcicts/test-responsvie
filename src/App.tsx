import { Grid } from "@mui/material";
// Components
import Form from "./components/Form";
import Input from "./components/Input";

// Assets
import RightImage from "./assets/Group_801.svg";
import RammpLogo from "./assets/Group_184.svg";
import GoogleLogo from "./assets/Image_3@2x.png";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import "./App.css";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Required field")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email format"
      ),
    password: yup.string().required("Required field"),
  })
  .required();

export default function Login() {
  const localStorageUser = localStorage.getItem("user");
  const user = localStorageUser ? JSON.parse(localStorageUser) : {};
  const accessToken = localStorage.getItem("accessToken");

  if (user.email_verified) {
    if (accessToken) window.location.href = "brandURL";
  }

  const {
    handleSubmit,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
  };

  return (
    <Grid id="login" className="section" container spacing={0}>
      <Grid className="section flexSpaceAround minHeight" item xs={12} md={5}>
        <img src={RammpLogo} alt="Rammp" className="rammpLogo" />
        <div className="leftSection">
          <Form
            className=""
            title={"Welcome back to RAMMP!"}
            subTitle={"Sign in to your account."}
            onSubmit={handleSubmit(onSubmit)}
            submitLabel={"Sign in"}
          >
            <button
              type="button"
              className="googleButton"
            >
              <img src={GoogleLogo} alt="Google" className="googleIcon" />
              Sign in with Google
            </button>
            <p
              className="grayText "
              style={{
                marginTop: "15px",
                marginBottom: "25px",
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              OR
            </p>
            <Controller
              name={"email"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Your email"
                  name="email"
                  value={value}
                  noSpaces
                  onChange={onChange}
                />
              )}
            />

            <a data-skip-on-tab="true" href="/">
              <span className="grayText forgotpasswordButton">
                Forgot password?
              </span>
            </a>

            <Controller
              name={"password"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={value}
                  noSpaces
                  onChange={onChange}
                  typeSwitch
                />
              )}
            />
          </Form>

          <p className="goToRegister">
            Don't have an account yet?
            <a href="/">
              <button className="registerButton">Register.</button>
            </a>
          </p>
        </div>
      </Grid>
      <Grid
        className="section darkGrayBackground relative hiddenMobile"
        item
        md={7}
      >
        <div className="rightSection fullHeight">
          <p className="rightSectionText whiteText">
            “RAMMP helped us to execute on a marketing activation which resulted
            in 100% conversion rates, positive cashflow and an immediate uplift
            in App downloads”
            <span className="rightSectionSubtext">
              Craig Mair,
              <span style={{ color: "#e8e8e8", marginLeft: "5px" }}>
                CEO Appreci
              </span>
            </span>
          </p>
          <img src={RightImage} alt="" className="rightSectionImage" />
        </div>
      </Grid>
    </Grid>
  );
}
