const leftSide = document.getElementById('left_side');
leftSide.innerHTML = ` <nav>
<ul>
    <li data-aos="fade-up" data-aos-duration="2000"> <a class="navbar-items" href="./login_signup.html" id="home">Home</a> </li>
    <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000"><a class="navbar-items" href="./login_signup.html">About Us</a> </li>
    <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"><a class="navbar-items" href="./login_signup.html">Algorithm Visualizer</a>
    </li>
    <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000"><a class="navbar-items" href="./login_signup.html">Notes</a> </li>
</ul>
</nav>`;

document.querySelector('.right').innerHTML = `
<img id="boy-svg" src="./assets/Subject Illustration .png">
<img id="boy-svg-back1" src="./assets/Back shape .png">
<img id="boy-svg-back2" src="./assets/Most back Shape.png">
<img id="clock" src="assets/Clock.png">
<img id="top-img" src="assets/Black Rectangle .png">
<div id="time"></div>
`;

const navbar = document.querySelector('.navbar');
if (navbar.dataset.number == "1") {
    navbar.innerHTML = ` <heading id="name">NOTEBOOK</heading>
<div class="wrapper">
    <i class="fab fa-snapchat-ghost" style="color: white;font-size: 30px;"></i>
</div>`;
}
