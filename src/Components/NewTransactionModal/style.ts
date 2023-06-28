import { styled } from "styled-components";

export const Container = styled.form`
h2{
    color:var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0%.25rem;
    font-size:1rem;
    font-weight: 400;
    border:1px solid #d7d7d7;
    background: #e7e9ee;

    &::placeholder{
        color:var(--text-body) ;
    }

    & + input{
        margin-top: 1rem;
    }
}

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var( --green);
    color: #fff;
    font-size: 1rem;
    border-radius: 0%.25rem;
    border: 0;
    margin-top: 1.5rem;
    transition: filter 1s ease-in-out;

    &:hover{
        filter: brightness(0.9);
    }
}



`