<br />

![GitHub repo size](https://img.shields.io/github/repo-size/AlexaPea/Juicier-AngularProject?color=%000000)
![GitHub watchers](https://img.shields.io/github/watchers/AlexaPea/Juicier-AngularProject?color=%000000)
![GitHub language count](https://img.shields.io/github/languages/count/AlexaPea/Juicier-AngularProject?color=%000000)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/AlexaPea/Juicier-AngularProject?color=%000000)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Alexa Pettitt</h5>
<h5 align="center" style="padding:0;margin:0;">21100290</h5>
<h6 align="center">DV300 | 2023</h6>
</br>
<p align="center">
  <a href="https://github.com/AlexaPea/Juicier-AngularProject">
    <img src="juicier/src/assets/logo.png" alt="Logo" width="230" style="display:block; margin: 0 auto;">
  </a>
  
  <h3 align="center">Juicier</h3>

  <p align="center">
    A build-a-burger full MERN stack application <br>
      <a href="https://github.com/AlexaPea/Juicier-AngularProject"><strong>Explore the docs »</strong></a>
   <br>
</p>

## Table of Contents
* [About The Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How To Install](#how-to-install)
* [Development Process](#development-process)
  * [Concept Process](#concept-process)
  * [Implementation Process](#implementation-process)
    * [The Functionality](#the-functionality)
    * [Above & Beyond](#above--beyond)
    * [Reviews & Testing](#reviews--testing)
    * [Challenges, Highlights & Learnings](#challenges-highlights--learnings)
    * [Future Implementation](#future-implementation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<br/>

## About the Project

<a href="https://github.com/AlexaPea/DV300_Term1_Juicier">
<img src="mockups/mockup1.png" alt="Logo">
</a>



### Project Description
Juicier is a full MERN stack application that allows users to keep track of their ingredient and burger inventory across the franchises different locations! It allows for easy inventory management, ensuring users a quick and easy solution to their management needs!

### Built With
* [Angular](https://angular.io/)
* [Typescript](https://www.typescriptlang.org/)
* [MongoDB](https://www.mongodb.com/)
* [Javascript](https://www.javascript.com/)


<!-- GETTING STARTED -->
## Getting Started
The following steps and isntructions will allow you to copy the project on your local machine for development, practising and testing purposes.


### How to Install
# Juicier

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Concept Process
`Conceptual Process`
To kickstart the conceptual phase, I delved into the project brief, ensuring a clear and thorough understanding of the requirements and objectives.

<img src="mockups/brief.png" alt="Logo">

Once I was aware of the requirements, I was able to progress to the ideation process.

<img src="mockups/concept1.png" alt="Logo">
<img src="mockups/concept2.png" alt="Logo">


<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

Once I had finalized the designs, the real fun began.

I created the database structure for my burgers, ingrediants and users, and once this was complete - I had a greater understanding of how I would implement the required functionality. 

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->
Angular,  free and open-source web application framework built on Typescript, was utilized to create this project. Allowing the establishment of our website through object-orientated programming.


Node. js is a platform for building i/o applications which are server-side event-driven and made using JavaScript. Express. js is a framework based on Node. js, which is used for building web-application using approaches and principles of Node. These were utilized to create the server-side functionality and allowed me to use Mongo DB Atlas to store our persistent data and create a usable collaborative website.


* Utilized and implemented `Angular` for the frontend.
* Using MONGO DB ATLASS as our backend server
* Utilized JWT for password hashing 


### The Functionality


#### Alternative Fun Login 
<img src="mockups/function1.png" alt="function">
We keep it fun - and that's why we created an alternative to the regular old password.

Users can now login using their username and by naming their favourite burger! But do not worry! We still make sure your favourite burger is kept a secret through password hashing!


#### Ingredient Inventory Management
<img src="mockups/function2.png" alt="function">
Juicier is a user-first website, meaning creating a user-friendly website is a top priority. 

I have established this through creating an inventory management Ingredient page which provides the user the opportunity to view their ingrediants in categories and provides the amount of each! Moreover, the user is provided the power to update these amounts!

#### Burger Inventory Management
<img src="mockups/function3.png" alt="function">
Burgers, burgers, burgers! A website dedicated to burgers needs to make them easy to manage!

Similary to the Ingredient Inventory, an overview of the burgers and their amounts are provided. They are devided into 2 categories - the menu burger and the special creations. This ensures a pleasent user experience by making use of the principles of design!

But that's not all! You can also build more burgers, granted you have enough ingredients, and watch your inventory update accordingly!

#### Creation Station
<img src="mockups/function5.png" alt="function">
Create your own personalized burger recipes! Click through the ingredients and invent your own masterpiece.

#### Manage each location
<img src="mockups/function5.png" alt="function">
Swopping and switching locations at a click of a button!

You are now able to view all the ingredients and burgers dependent on their location in order to ensure users are easily kept up to date and can quickly update each location inventory accordingly!

#### Location Breakdown
<img src="mockups/function6.png" alt="Logo">
Summaries - we all love them! A nice breakdown of everything you need to know.

And that is precisely why we created the location page. A page that gives our users a breakdown of the ingrediants available in each location! Making it short, sweet, easy to understanding and bring your attention to the ingredients that are running low.

#### 404 Error Page
We want you to enjoy every moment of our website. 

Therefore,  we implemented a 404 page. To ensure that the user can always find their way back to the magic.

### Above & Beyond
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Creation Station - create your own personalized burger recipes! Click through the ingredients and invent your own masterpiece.
* BehaviorSubject - allows the changes made in the select to reflect immidiatly on the page.

### Reviews & Testing
In order to test the application I gathered a group of Open Window students to use the application and complete specific goals - this uncovered a few bugs which I was then able to fix.

### Challenges, Highlights & learnings

#### Challenges
<!-- stipulated the challenges you experienced with the project -->
Hurdles will always pop up along the way, and this project was no different. My biggest challenge was ensuring that my components rerender to show updates, without having to refresh the page. This was a struggle that came with the learning curve of Angular and required a lot of additional research. However, after scourering the internet and asking Angular coders for their opinions, I was introduced to BehaviourSubject and was able to overcome this issue.


#### Highlights
<!-- stipulated the highlights you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
I think this was surprisingly a very enjoyable project. Watching my functionality come together and create a fully functioning website was definitely a highlight. I felt that this project showed me how I have been able to grow as a developer through the years.


### Learnings
<!-- stipulate functionality and improvements that can be implemented in the future. -->
This project gave me greater insight into creating a full-stack application. I learnt the importance of being able to problem solve and consider all possible solutions.

I now believe I am better equipt to handle all future projects.

### Future Implementation
In future, I would like to explore more above and beyond features. In addition to this, I would like to implement loaders to further enhance the user experience.

![image4](mockups/mockup2.png)

<br/>


## Roadmap

See the [open issues](https://github.com/AlexaPea/DV300_Term1_Juicier) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- AUTHORS -->
## Authors

* **Alexa Pettitt** - [AlexaPea](https://github.com/AlexaPea/DV300_Term1_Juicier)

<!-- LICENSE -->
## License

This project is protected by all rights reserved. No part of this repository may be reproduced, distributed, or transmitted in any form or by any means, without the prior written permission of the repository owner.


<!-- LICENSE -->
## Contact

* **Alexa Pettitt** - [alexapettitt14@gmail.com](mailto:alexapettitt14@gmail.com) - [@instagram_handle](https://www.instagram.com/byAlexaPettitt/) 
* **Project Link** - https://github.com/AlexaPea/DV300_Term1_Juicier

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [My Lecturer: Armand Pretorius](https://github.com/Armand-OW)
* [Stack Overflow](https://stackoverflow.com/)
* [Angular Documentation](https://angular.io/)
* [Angular Material](https://material.angular.io/)

<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexa-pettitt/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/byAlexaPettitt/