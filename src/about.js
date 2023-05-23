export default function loadAboutPage() {
  const main = document.querySelector("#main");

  main.innerHTML = ` 
        <div class="about">
          Welcome to Aurelia Elysium, where culinary excellence and enchanting
          ambiance merge to create an unforgettable dining experience. Nestled
          in the heart of Los Angeles, Aurelia Elysium is a sanctuary for food
          enthusiasts seeking a harmonious blend of exquisite flavors, artistic
          presentations, and a touch of magic. <br />
          <br />
          At Aurelia Elysium, we believe that food is not merely sustenance; it
          is a journey that engages all the senses and transports you to a realm
          of gastronomic delight. Our team of masterful chefs crafts each dish
          with meticulous attention to detail, combining the finest ingredients
          from local purveyors and globally sourced delicacies. Whether you are
          a devoted epicurean or a curious adventurer, our menu offers a
          symphony of flavors, inspired by both traditional and contemporary
          culinary traditions. <br />
          <br />
          Step into our enchanting space, meticulously designed to transport you
          to a world of elegance and sophistication. The ethereal ambiance of
          Aurelia Elysium creates a sense of tranquility and wonder, enhanced by
          soft lighting, exquisite decor, and a captivating soundtrack. Whether
          you're seeking an intimate dinner for two, a gathering with friends,
          or a private celebration, our inviting atmosphere is perfect for every
          occasion. <br />
          <br />
          We pride ourselves on providing impeccable service that caters to your
          every need. Our knowledgeable and passionate staff members are
          dedicated to ensuring your dining experience is truly exceptional.
          From assisting you in selecting the perfect wine pairing to
          accommodating dietary preferences, we strive to exceed your
          expectations and create cherished memories. <br />
          <br />
          Aurelia Elysium is not just a restaurant; it is a destination that
          celebrates the artistry of cuisine, the joy of discovery, and the
          power of bringing people together. Join us on this enchanting culinary
          journey, where every bite ignites your senses and every moment becomes
          a cherished memory.
        </div>`;

  main.className = "";
  main.classList.add("about-container");

  // main.classlist.remove("menu-container");
  // main.classlist.remove("contact-container");
}
