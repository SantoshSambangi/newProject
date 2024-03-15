import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";
function MaterialUi() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material-UI Example</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Card Title 1</Typography>
                <Typography variant="body2">
                  This is a sample card content. You can put any information you
                  want here.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary">Action</Button>
                <Button color="secondary">Another Action</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Card Title 2</Typography>
                <Typography variant="body2">
                  Another card with different content. Material-UI makes it easy
                  to create beautiful UIs.
                </Typography>
              </CardContent>

              <CardActions>
                <Button color="success">Action</Button>
                <Button color="secondary">Another Action</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MaterialUi;
