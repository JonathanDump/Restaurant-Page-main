export default function loadMainPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `  <div class="header">
        <div class="header__name">Aurelia Elysium</div>
        <ul class="nav-bar">
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="main">
        <div class="main__description">
          Welcome to <br /> <span>Aurelia Elysium!</span> <br />
          Experience culinary excellence and warm hospitality. Indulge in
          delectable flavors and impeccable service. Savor every bite in our
          inviting and vibrant ambiance. Celebrate special moments with us,
          creating lasting memories. <br />
          Thank you for choosing <br /> <span>Aurelia Elysium.</span>
          <br />
          Enjoy your meal!
        </div>
        <button class="main__book-btn">Book Now</button>
      </div>`;

  // const header = document.createElement("div")
  // header.classList.add("header")

  // const headerName = document.createElement("div")
  // headerName.
}
