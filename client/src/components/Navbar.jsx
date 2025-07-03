import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Camera as CameraIcon,
  PersonAdd as RegisterIcon,
  Schedule as AttendanceIcon,
  ExitToApp as SignOutIcon,
  Person as SignInIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import {
  Button,
  Typography,
  IconButton,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const accessToken = localStorage.getItem("access_token");
  const [isScrolled, setIsScrolled] = useState(false);
  const { themeMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  };

  const getBackgroundColor = () => {
    if (isScrolled) {
      return themeMode === "dark" ? "rgba(30, 41, 59, 0.8)" : "rgba(255, 255, 255, 0.8)"; // slate-800
    }
    return "transparent";
  };

  const getBorderBottom = () => {
    return isScrolled ? "1px solid rgba(0, 0, 0, 0.12)" : "none";
  };

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0}
      sx={{
        backgroundColor: getBackgroundColor(),
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        borderBottom: getBorderBottom(),
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ maxWidth: "1280px", mx: "auto", width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CameraIcon sx={{ color: "#4f46e5" }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#4f46e5" }}>
            FacePunch
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", gap: 1 }}>
          {accessToken ? (
            <>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="small"
                startIcon={<RegisterIcon />}
                sx={{
                  color: 'white',
                  backgroundColor: "#4f46e5",
                  "&:hover": { backgroundColor: "#4338ca" },
                  textTransform: "none",
                }}
              >
                Register
              </Button>
              <Button
                component={Link}
                to="/attendance"
                variant="contained"
                size="small"
                startIcon={<AttendanceIcon />}
                sx={{
                  color: 'white',
                  backgroundColor: "#4f46e5",
                  "&:hover": { backgroundColor: "#4338ca" },
                  textTransform: "none",
                }}
              >
                Mark Attendance
              </Button>
              <Button
                onClick={handleSignOut}
                color="error"
                variant="outlined"
                size="small"
                startIcon={<SignOutIcon />}
                sx={{ textTransform: "none" }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to="/signin"
              variant="outlined"
              size="small"
              startIcon={<SignInIcon />}
              sx={{
                color: "#4f46e5",
                borderColor: "#4f46e5",
                textTransform: "none",
              }}
            >
              Sign In
            </Button>
          )}
        </Box>

        <IconButton onClick={toggleTheme} sx={{ color: themeMode === "light" ? "black" : "inherit" }}>
          {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
