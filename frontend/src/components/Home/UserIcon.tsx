import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import userAvatar from '../../assets/images/avatar.svg';
import { useSubmit } from 'react-router-dom';

const settings = [
  '마이페이지',
  '참여중인 펀딩',
  '관심있는 펀딩',
  '알림신청한 펀딩',
  '로그아웃',
];

export default function UserIcon() {
  const submit = useSubmit();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e: any) => {
    console.log(e.target.innerText);
    if (e.target.innerText === '로그아웃') {
      submit(null, { action: '/logout', method: 'post' });
    }
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0, cursor: 'pointer' }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src={userAvatar}
            sx={{ width: 64, height: 64 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
