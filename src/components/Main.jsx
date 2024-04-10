import styled from "styled-components"

const Main = () => {
  return (
    <Container>
     <input type="text" placeholder="enter the number"/>
     <div className="box"></div>
     <div className="box"></div>
     <div className="box"></div>
     <div className="box"></div>
     <div className="box"></div>
     <div className="box"></div>
    </Container>
  )
}

export default Main

const Container = styled.section`
    height: calc(100vh - 6rem);
    width: 100%;
    background-image: url("./hero.jpg");
    background-color: aqua;
    display: flex;
    justify-content: center;
    padding-top: 5rem;

    input {
        
        height: 2rem;
        width: 15rem;
        
    }
`







