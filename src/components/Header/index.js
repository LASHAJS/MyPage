import { styled } from "@mui/material/styles";

export const CustomizedMenuList = styled("ul")(({ theme }) => ({
  background: "white",
  color: "black",
  borderRadius: "8px",
  position: "absolute",
  top: 16,
  left: -40,
  padding: 0,
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  boxShadow: "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
}));
