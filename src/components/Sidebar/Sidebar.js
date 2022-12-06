import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import ENGLISH from "../../language/en";
import GEORGIAN from "../../language/ge";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import {motion} from "framer-motion"

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
const drawerWidth = 240;
const theme = createTheme();
export default function ClippedDrawer() {
  const { t } = useTranslation();

  const [open, setOpen] = useState({
    Advanced: false,
    trainings: false,
  });

  const handleClick = (type) => {
    
    setOpen({
      ...open,
      [type]: !open[type],
    });
  };

  const [selectedIndex, setSelectedIndex] = useState();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const theme = useTheme()
  return (
    <Drawer  
    PaperProps={{
      elevation: 8,
      sx: {
        backgroundColor: "#D2042D",
        color: "white",
        

      }
    }}
      variant="permanent"
      sx={{
        zIndex: 1,
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: 8,
        },
      }}
    >
      {routes.map((route, i) => {
        
        return (
          <div
          >
            {!route?.children && (
              <motion.div whileHover={{ scale: [null, 1.05, 1.04] }}
              transition={{ duration: 0.3 }}>
              <List > 
                <Link to={`${route.path}`} style={{ textDecoration: 'none' ,color:'white'}} >
                
                  <ListItem   disablePadding  key={route.title}  >
                    <ListItemButton selected={selectedIndex === route.id} onClick={(event) => handleListItemClick(event, route.id)}>
                      <ListItemIcon>
                        {i % 2 === 0 ? <InboxIcon  sx={{ color: "white" }}/> : <MailIcon  sx={{ color: "white" }}/>}
                      </ListItemIcon>
                      <ListItemText primary={t(route.title)}  />
                    </ListItemButton>
                  </ListItem>
                 
                </Link>
                
              </List>
              </motion.div>
            )}

            {route?.children && (
              <motion.div whileHover={{ scale: [null, 1.05, 1.04] }}
              transition={{ duration: 0.3 }}>
              <List
              
              >
                <ListItemButton onClick={() => handleClick(route.title)}>
                  <ListItemIcon>
                    <InboxIcon sx={{ color: "white" }} />
                  </ListItemIcon >
                  <ListItemText primary={t(route.title)} />
                  {open[route.title] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open[route.title]} timeout="auto" unmountOnExit>
                <motion.div whileHover={{ scale: [null, 1.05, 1.04] }}
              transition={{ duration: 0.3 }}>
                  <List component="div" disablePadding >
                    {route?.children?.map((item, index) => (
                      
                      <Link to={`${item.path}`}  style={{ textDecoration: 'none' ,color:'white'}}>
                      
                          <ListItemButton sx={{ pl: 4 }}  selected={selectedIndex === item.id} onClick={(event) => handleListItemClick(event, item.id)}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon sx={{ color: "white" }} /> : <StarBorder sx={{ color: "white" }} />}
                          </ListItemIcon>
                          <ListItemText primary={t(item.title)} />
                        </ListItemButton>
                       
                       </Link>
                     
                    ))}
                  </List>
                  </motion.div>
                </Collapse>
                <Divider/>
              </List>
              </motion.div>
            )}

            
          </div>
        );
      })}
    </Drawer>
  );
}
