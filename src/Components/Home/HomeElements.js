import React from 'react'
import styled from 'styled-components'
import img1 from './../../image/Logo1.png';


export const Container = styled.div`
max-width: 1500px;
margin: 0 auto;


`;
export const Banner = styled.div`
background-image:   url('./images/banne6.png');
min-height:600px;
background-position: center;
background-size: cover;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
z-index: 1;


`;
export const Content = styled.div`
background: white;

padding-left: 10px;
padding-right: 10px;
margin-top: -250px;
z-index: 100;
display: flex;



`;