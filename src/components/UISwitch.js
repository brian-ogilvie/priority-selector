import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div(() => ({
  display: 'flex',
  width: '150px',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '15px'
}));

const Switch = styled.label(({ color, active }) => ({
  width: '30px',
  height: '14px',
  margin: '5px',
  display: 'block',
  position: 'relative',
  zIndex: 1,
  backgroundColor: active ? 'grey' : 'lightgrey',
  borderRadius: '7px',
  cursor: 'pointer',
  boxShadow: '0 1px 1px rgba(0,0,0,.3) inset',
  transition: 'all .3s ease-in-out',
  '::before': {
    content: '""',
    position: 'absolute',
    display: 'block',
    zIndex: 2,
    top: '-2px',
    left: '-4px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: active ? color : 'darkgrey',
    boxShadow: '0 2px 2px rgba(0,0,0,.5)',
    transition: 'all .3s ease-in-out',
    transform: active ? 'translateX(20px)' : 'translateX(0)'
  }
}));

const Checkbox = styled.input(() => ({
  zIndex: 0,
  opacity: 0,
  width: 0,
  height: 0,
  position: 'absolute',
  top: 0,
  left: 0
}));

const Label = styled.div(({ color, active }) => ({
  fontSize: '1.5rem',
  color: active ? color : 'inherit',
  transition: 'color .3s linear'
}));

export default function UISwitch({ name, label, active, onChange, color }) {
  return (
    <Container>
      <Label color={color} active={active}>{label}</Label>
      <Switch htmlFor={name} active={active} color={color} />
      <Checkbox type="checkbox" checked={active} name={name} id={name} onChange={onChange} />
    </Container>
  );
}
