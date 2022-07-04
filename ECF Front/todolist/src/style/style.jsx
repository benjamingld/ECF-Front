import styled from 'styled-components'

//style du tableau globale
export const DivTab = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
`

//style des listes dans le tableau
export const ListMap = styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

`
//style des listes
export const DivList = styled.div`
    width: 30%;
    border: 2px solid red;
    margin: 5px;
`

//style des todos
export const DivTodo = styled.div`
    border: 2px solid green;
    margin: 5px;
`

//Style des title
export const TitleTab = styled.h1`
    word-wrap:break-word;
    text-transform: uppercase;
    font-size: 25px;
`
export const TitleList = styled.h1`
    word-wrap:break-word;
    text-transform: uppercase;
    font-size: 15px;
`

//style de la NavBar
export const NavBar = styled.div`
    background-color: aliceblue;
    padding: 10px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
`

//style de l'image du header
export const Img = styled.img`
    border-radius: 50%;
    height: 70px;
`

export const Footer = styled.div`
    
`