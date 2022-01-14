import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd'


export default function Mynavbar() {
  const [theme, setTheme] = React.useState('light');
  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
    <Menu 
      mode="horizontal"
      theme={theme}
    >
      <Menu.Item> <Link to="/">Home</Link> </Menu.Item>
      <Menu.Item> <Link to="/about">About</Link> </Menu.Item>
      <Menu.Item> <Link to="/projects">Projects</Link> </Menu.Item>
      <Menu.Item> <Link to="/blog">Blog</Link> </Menu.Item>
      <Menu.Item> <Switch onChange={changeTheme} /> </Menu.Item>
    </Menu>
  </>

  )
}
