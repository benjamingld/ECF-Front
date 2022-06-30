import styled from 'styled-components'

export const Container= styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ListContainer= styled.div`
    width: 45%;
    margin: 10px;
    border: 2px solid red;
    background-color: aliceblue;
`;

export const TodoContainer= styled.div`

    background-color: blue;
`;

export const ButtonDel= styled.button`
    color: red;
`;

export const ButtonModif= styled.button`
    color: blue;
`;

export const H1= styled.h1`
    font-size:25px;
    text-decoration: underline;
    font-weight:bold;
    color: blue;
`;
export const H2= styled.h2`
    font-size:15px;
    color: white;
`;
