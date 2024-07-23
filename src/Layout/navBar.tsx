import React from "react";

import {
  AppBar,
  Button,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar color="inherit">
      <Toolbar>
        <Link
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          underline="none"
          color="black">
          Lips
        </Link>

        <Stack direction="row" spacing={8}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="/" color="inherit" underline="hover">
            About Us
          </Link>
          <Link href="/" color="inherit" underline="hover">
            Contact
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
