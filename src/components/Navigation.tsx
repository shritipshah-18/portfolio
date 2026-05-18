import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [
  ['Expertise', 'expertise'],
  ['History', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
  ['Achievements', 'achievements'],
];

function Navigation({parentToChild, modeChange}: any) {
  const {mode} = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }

      // highlight active nav item based on scroll position
      navItems.forEach(([_, id]) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', background: mode === 'dark' ? '#1a1a2e' : '#fff', height: '100%' }}
    >
      <p style={{
        padding: '16px',
        fontWeight: 700,
        fontSize: '1.1rem',
        background: 'linear-gradient(90deg, #5000ca, #9b59b6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <ListIcon style={{ color: '#5000ca' }}/> Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                color: activeSection === item[1] ? '#5000ca' : 'inherit',
                fontWeight: activeSection === item[1] ? 700 : 400,
              }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        sx={{
          background: scrolled
            ? mode === 'dark'
              ? 'rgba(10, 10, 20, 0.95)'
              : 'rgba(255,255,255,0.95)'
            : 'transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(80, 0, 202, 0.15)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(80, 0, 202, 0.1)' : 'none',
        }}
      >
        <Toolbar className='navigation-bar' sx={{ justifyContent: 'space-between', padding: '0 24px' }}>

          {/* LEFT — Logo / Name */}
          <Box
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '1.2rem',
              letterSpacing: '0.5px',
              background: 'linear-gradient(90deg, #5000ca, #9b59b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', sm: 'block' },
              userSelect: 'none',
            }}
          >
            HJ
          </Box>

          {/* MOBILE — hamburger */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: '#5000ca' }}
          >
            <MenuIcon />
          </IconButton>

          {/* RIGHT — nav items + dark mode */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '4px' }}>
              {navItems.map((item) => (
                <Button
                  key={item[0]}
                  onClick={() => scrollToSection(item[1])}
                  sx={{
                    color: activeSection === item[1]
                      ? '#5000ca'
                      : mode === 'dark' ? '#fff' : '#333',
                    fontWeight: activeSection === item[1] ? 700 : 500,
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    position: 'relative',
                    textTransform: 'none',
                    px: 2,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: activeSection === item[1] ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '60%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #5000ca, #9b59b6)',
                      borderRadius: '2px',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    },
                    '&:hover': {
                      color: '#5000ca',
                      background: 'transparent',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item[0]}
                </Button>
              ))}
            </Box>

            {/* Dark/Light toggle */}
            <IconButton
              onClick={() => modeChange()}
              sx={{
                color: mode === 'dark' ? '#f0c040' : '#5000ca',
                background: mode === 'dark' ? 'rgba(240,192,64,0.1)' : 'rgba(80,0,202,0.08)',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: mode === 'dark' ? 'rgba(240,192,64,0.2)' : 'rgba(80,0,202,0.15)',
                  transform: 'rotate(20deg)',
                }
              }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: mode === 'dark' ? '#1a1a2e' : '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;