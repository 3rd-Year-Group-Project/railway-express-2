import { useAuth } from '../contexts/authContext';
import React from 'react';
import Logo from '../assets/Logo.svg';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function DashboardLayout({ sidebarButtons, children }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="bg-slate-700 min-w-full min-h-screen flex">
      <nav className="min-w-fit bg-slate-700 min-h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col justify-center items-center mt-8">
            <img src={Logo} alt="Railway Express Logo" />
            <h1 className="font-serif text-3xl text-slate-100 text-center p-8 pt-0 m-0 my-4">
              Railway Express
            </h1>
          </div>

          <div className="flex flex-col">
            {sidebarButtons.map((SidebarButton) => SidebarButton)}
          </div>
        </div>
        <div className="self-center flex items-center justify-center bg-slate-900 p-2 w-fit rounded-full mt-8 mb-32">
          <img src={Logo} alt="Profile Icon" className="h-14 w-14" />

          <div className="text-slate-200 ml-4 mr-2 text-xs w-28">
            <div>
              {currentUser?.firstName} {currentUser?.lastName}
            </div>
            <div className="mt-1">{currentUser?.role}</div>
          </div>
          <IconButton aria-label="Logout" onClick={handleLogout}>
            <LogoutIcon className="text-slate-200" />
          </IconButton>
        </div>
      </nav>
      <main className="bg-slate-100 min-h-full w-full m-5 ml-0 p-10 rounded-3xl">
        {children}
      </main>
    </div>
  );
}