import styled from 'styled-components'

//style du tableau globale
export const DivTab = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
`

//style des listes dans le tableau
export const ListMap = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`
//style des listes
export const DivList = styled.div`
    width: 30%;
    border: 10px inset red;
    border-radius: 5px;
    margin: 5px;
`

//style des todos
export const DivTodo = styled.div`
    border: 1px solid blue;
    margin: 5px;
`

//Style des title
export const TitleTab = styled.h1`
    word-wrap: break-word;
    text-transform: uppercase;
    font-size: 25px;
`
export const TitleList = styled.h1`
    word-wrap: break-word;
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

//style du footer
export const Pfoot = styled.p`
    align-self: flex-end;
`
//style du button validate
export const ButtonValidate = styled.button`
    background-color: blue;
    color: white;
    margin-top: 10px;
    border-width: 3px 3px 3px 0px;
    border-color: blue;
    border-radius: 0 30px 30px 0;
`
//style de l'input
export const Input = styled.input`
    margin-top: 10px;
    border: 3px solid blue;
    border-radius: 30px 0 0 30px;
`
//style du button supprimer
export const ButtonDelete = styled.button`
    margin: 5px 0 5px 0;
    background-color: blue;
    color: white;
    border: 2px solid blue;
    border-radius: 30px;
    `


//style du button check
export const ButtonCheck = styled.button`
    margin: 5px 0 5px 0;
    

    `