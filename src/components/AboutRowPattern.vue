<template>
  <div class="about-wrapper">
    <div class="about-me">
      <h2 class="about-header">IT Support Technician</h2>
      <ul>
        <li>
          Develop highly available and performant services in languages such as Ruby, Javascript and Typescript
        </li>
        <li>
          Design, plan, document and deliver a new microservice in greenfield SaaS project
        </li>
        <li>
          Participate in frequent code reviews both as reviewer and reviewee
        </li>
        <li>
          Implement CI/CD pipelines using Terraform and Github Actions
        </li>
        <li>
          Deploy and manage AWS cloud resources on platforms such as Lambda, DynamoDB, ECS, RDS and Opensearch
        </li>
        <li>
          Perform product demos for stakeholders during development benchmarks and upon project completion
        </li>
        <li>
          Document system design, architecture, and workflows for training and org level visibility
        </li>
      </ul>
    </div>
    <div class="image animate__animated animate__zoomInDown animate__delay-1s">
      <img class="logo" src="../assets/pattern.svg" alt="Pattern Logo" height="150px" width="150px"/>
    </div>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "AboutRow"
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
