import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import CardActivity from "../../components/CardActivity";
import TittlePage from "../../components/TittlePage";
import ButtonPrimary from "../../components/ButtonPrimary";
import AddIcon from "@mui/icons-material/Add";
import ActivityContent from "../../assets/activity.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://todo.api.devcode.gethired.id/activity-groups";

export default function ActivityWeb() {
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      console.log(res.data.data);
      setDataActivity(res.data.data);
    });
  }, []);

  const navigate = useNavigate();

  const MainContent = () => {
    if (dataActivity === undefined) {
      return (
        <Box
          style={{ display: "flex", justifyContent: "center", marginTop: 65 }}
        >
          <img alt="" src={ActivityContent} width={767} height={490} />
        </Box>
      );
    } else {
      return (
        <Box style={{ marginBlock: 30, paddingInline: 30 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
          >
            {dataActivity.map((x, y) => {
              console.log(Object.values(x), "value");
              const CardValues = Object.values(x);
              return (
                <Grid item xs={2} sm={4} md={3} key={y}>
                  <CardActivity tittle={CardValues[1]} date={CardValues[2]} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      );
    }
  };

  return (
    <Container maxWidth={"xl"} sx={{ marginTop: 20 }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 30,
          alignItems: "center",
        }}
      >
        <TittlePage tittle="Activity" />
        <ButtonPrimary
          tittle="Tambah"
          onClick={() => navigate("/NewActivity")}
          icon={<AddIcon style={{ width: "24px", height: "24px" }} />}
        />
      </Box>
      {MainContent()}
    </Container>
  );
}
