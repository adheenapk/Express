import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/arrow.png'

const Container = styled.div`
  background: linear-gradient(to right,rgb(255, 94, 0),rgba(255, 136, 0, 0.925));
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin:0px;
    height: 930px;
  .join{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-left: 450px;
    width: 300px;
  }
  .center{
    height: 40px;
    width: 50px;
  }
  
  p{
    margin-left: 10px;
    text-align: center;
  }
  .b1{
    height: 45px;
    width: 130px;
    border-radius: 50px;
    background-color:white;
    border: none;
    text-align: center;
    font-family:Arial ;
    font-weight: bolder;
    font-size: medium;
    position: relative;
    left: 10px;
    border-color:white;
  }
  .reg{
    text-align: left;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    background-color: whitesmoke;
    width: 550px;
    height: 400px;
    padding: 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 200px;
  }
  
  
  .regs{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }
  label{
    margin-left:30px;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  input{
    margin-left: 30px;
    width: 300px;
  }
  .b2{
    height: 40px;
    width: 120px;
    margin-top: 10px;
    position: relative;
    left: 200px;
    border-radius: 100px 100px 100px 100px;
    background-color: orange;
    text-align: center;
    font-family:Arial ;
    color: white;
    font-weight: bolder;
    font-size: medium;
    border: orange;
    
  }
  .content {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  
`;
function register () {
  return (
    <>
    <Container>
    <div className="join">
        <img src={arrow}  class="center"></img>
        <h2>Join Us</h2><b> 
        
                    <p>Subscribe Easy Tutorial Youtube Channel to watch more videos</p>
        </b>
        <button className="b1">About Us</button>
    </div>
    <div className="reg">
   < div class="content">
<h2 class="text_shadows">REGISTER HERE</h2>
</div>
        <form action="" method="get">
          <div className="regs">
            <label for="fname">Name</label>
            <input type="text" id="fname" className="id" placeholder="Name" pattern="[A-Za-z ]"
                title="Please enter a valid name" required></input>
            <label for="name">User-Name</label>
            <input type="text" id="name" className="id" placeholder="Username" required></input>
            <label for="number">Phone Number</label>
            <input type="text" id="number" className="id" placeholder="Phone number" pattern="[0-9]{1,2}-[0-9]{10}"
                title="Enter a valid 10 digit mobile number(Countrycode-mobile number)" required></input>
            <label for="mail">E-mail</label>
            <input type="email" id="mail" className="id" placeholder="Email" required></input>
            <label for="pass">Password </label>
            <input type="password" id="pass" class="id" placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                required></input>
            <input type="submit" class="b2" value="Register"></input>
            </div>
        </form>
    </div>
</Container>
</>

  )
}

export default register