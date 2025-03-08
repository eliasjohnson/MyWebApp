<template>
  <div class="about-wrapper">
    <div class="about-me">
      <h2 class="about-header">Specialty Support II</h2>
      <ul>
        <li>
          Triage and resolve customer submitted product issues via phone and email
        </li>
        <li>
          Document and track known Issues with Jira and Salestorce to assist development and other support teams
        </li>
        <li>
          Write, use and share SQL scripts to assist in the troubleshooting/debugging process
        </li>
        <li>
          Consult industry professionals on HRMS software best practices to improve their understanding ofthe product
        </li>
      </ul>
    </div>
    <div class="image animate__animated animate__zoomInDown animate__delay-3s">
      <img class="logo" src="../assets/ukg.svg" alt="UKG Logo" height="150px" width="150px"/>
    </div>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "AboutRowUKG"
}
</script>

<style scoped>


.image{
  display: block;
}

.about-wrapper {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: linear-gradient(110deg, #282828 85%, #fa7c30 85%);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 80px 20px black;
}

.about-header{
  font-size: 28px;
  padding: 10px;
  border-bottom: 2px solid #fa7c30;
}

.about-me{
  padding-left: 50px;
  padding-right: 100px;
  width: 60%;
  text-align: left;
  line-height: 2;
  font-weight: 500;
  font-size: 20px;
}

.image{
  padding: 20px;
  background-color: white;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 10px;
}


.skills-wrapper{
  display: flex;
  margin-bottom: 25px;
  margin-top: 50px;
  margin-right: 50px;
  width: 30%;
  height: 300px;
  flex-direction: column  ;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 25px;
  background-color: #FFFFFF;
}

.skill-row{
  display: flex;
  height: 100px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
}


@media only screen and (max-width: 1090px){

  li{
    font-size: 14px;
  }

  .image{
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }

  .about-wrapper{
    flex-direction: column;
  }

  .about-header{
    font-size: 20px;
  }

  .about-me{
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .skills-wrapper{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 25px;
  }

  .logo{
    width: 50px;
    height: 50px;
  }

}
</style>
