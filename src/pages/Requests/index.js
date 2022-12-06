import React from "react";
import { Box, Grid } from "@mui/material";
import { routes } from "./routes";
import { useNavigate } from "react-router-dom";
import { CardActionArea, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {motion} from "framer-motion"
import { createTheme } from '@mui/material/styles';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import ENGLISH from "../../language/en";
import GEORGIAN from "../../language/ge";
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

const CardActionAreas = styled(CardActionArea)({

  backgroundColor: 'primary',
  color: 'dark',
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  '&:hover': {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    backgroundColor: '#d2042d',
    color: 'white'
  },

});
const Cards = styled(Card)({
  transition: "0.3s",

  '&:hover': {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    backgroundColor: 'primary',
  },

});
const Request = () => {
  const navigate = useNavigate();
  const onclick = (path) => {
    navigate(path);
  };
  const { t } = useTranslation();
  return (
    <Grid container spacing={3} mt={2} p={5}>

      {routes.map((route) => {
        return (
          <>
            <Grid item xs={6} md={4}>
              <motion.div
       initial={{ opacity: 0}}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
       whileHover={{
         scale: 1.05,
         transition: { duration: 0.5 },
       }}
       whileTap={{ scale: 0.9 }}
       whileInView={{ opacity: 1 }}
      >
        
              <Cards>

                <CardActionAreas>
                  <Box variant="h4" align="center">{route.icon}</Box>

                  <CardContent onClick={() => { onclick(`/Requests${route.path}`); }} key={route.title} >
                    <Typography variant="h5" align="center">{t(route.title)}</Typography>
                  </CardContent>
                </CardActionAreas>
              </Cards>
              </motion.div>
            </Grid>
          </>
        )
      })}

    </Grid>

  );
};

export default Request;
