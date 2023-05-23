export default function loadGreetingPage() {
  const main = document.querySelector("#main");
  main.innerHTML = `
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
        <button class="main__book-btn">Book Now</button>`;

  // main.classList.remove("about-container");
  // main.classlist.remove("menu-container");
  // main.classlist.remove("contact-container");

  main.className = "";
}
