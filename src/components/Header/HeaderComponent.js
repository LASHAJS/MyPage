import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ALL_LANGUAGES from "../../language/index";
import Cookies from "js-cookie";
import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import ENGLISH from "../../language/en";
import GEORGIAN from "../../language/ge";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { CustomizedMenuList } from "./index";
import Logo from "../logo/main-logo.png";
import {useDispatch} from 'react-redux'
import {setLogout} from "../../redux/login/loginAction";
import { Form, useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import { FormControlLabel, FormGroup, Menu, Switch } from "@mui/material";
import { useAppState } from "../../redux/state/appState";
import { useTheme } from "@mui/material/styles";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: ENGLISH },
      ge: { translation: GEORGIAN },
    },
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
  });


export default function ButtonAppBar({switchColorMode}) {
  const currentLanguageCode = Cookies.get("i18next") || "ge";
  const currentLanguage = ALL_LANGUAGES.find(
    (l) => l.code === currentLanguageCode
  );
  
  const [langOpen, setLangOpen] = React.useState(false);

  const navigate = useNavigate()

  const sortRef = React.useRef(null);
  const clickOutside = (e) => {
    if (sortRef.current !== null) {
      if (!e.composedPath().includes(sortRef.current)) {
        setLangOpen(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  useEffect(() => {
    
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  const onLanClick = (e, lan) => {
    
    e.stopPropagation();
    setLangOpen(false);
    i18n.changeLanguage(lan);
  };

 
  const dispatch = useDispatch()

  const isAuth = localStorage.getItem("jwt")

  const handleLougOut = () => {
      dispatch(setLogout())
      navigate('/')
      
  }

const theme = useTheme()
const {state,appDispatch} = useAppState();
const [anchorEl,setAnchorEl]=useState(null)
const [themeModeSwitch, setThemeModeSwitch] = useState(false)

  useEffect(() => {
    if(appDispatch){
      appDispatch({type: 'theme-switch'});
      switchColorMode(themeModeSwitch)
    }
  },[themeModeSwitch])
  return (
    <Box>
      <AppBar position="fixed" >
        <Toolbar >
          <Box sx={{ flexGrow: 1, marginRight: "30px" }}>
            <img style={{ height: "50px" }} src={Logo} alt="logo" />         
             
          </Box>
          <Box>
            
            <IconButton
              ref={sortRef}
              onClick={() => setLangOpen((prev) => !prev)}
              sx={{ mr: 2, position: "relative" , color: "red"}}
              color="success"
            >
              <LanguageIcon sx={{ color: "red" }} />
              {langOpen && (
                <CustomizedMenuList variant="selectedMenu">
                  <Typography variant="h6" color={"WindowText"}></Typography>
                  {ALL_LANGUAGES.map(({ code, name, countryCode }) => {
                    return (
                      <MenuItem
                        selected={code === currentLanguageCode}
                        key={countryCode}
                        onClick={(e) => onLanClick(e, code)}
                      >
                        <span
                          className={`flag-icon flag-icon-${countryCode}`}
                        ></span>
                        <Typography sx={{ ml: 1 }} variant="p">
                          {name}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </CustomizedMenuList>
              )}
            </IconButton>
            <IconButton
            sx={{ mr: 2, position: "relative" , color: "red"}}
            color="success"
            onClick={(e) => setAnchorEl(e.currentTarget)}>
              <SettingsIcon/>
            </IconButton>
            {isAuth && (
            <Button variant="outlined" color="error" onClick={handleLougOut}>
              გასვლა
            </Button>
             )}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
      id="settings-menu"
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={() =>setAnchorEl(null)}>
      <MenuItem>
      <FormGroup>
        <FormControlLabel
        control={<Switch checked={themeModeSwitch}
        onClick={() => setThemeModeSwitch(!themeModeSwitch)}/>}
        label={state?.theme === 'light' ? "Light" : "Dark"}
        />
      </FormGroup>
      </MenuItem>

        </Menu>
    </Box>
  );
}
