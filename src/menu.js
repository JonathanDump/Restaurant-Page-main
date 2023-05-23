export default function loadMenuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `<div class="header">
        <div class="header__name">Aurelia Elysium</div>
        <ul class="nav-bar">
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="main menu-container">
       <div class="main__menu">
        <div class="item">
          <div class="item__img-cont"><img class="item__img" src="/imgs/menu/brisket.jpg" alt="brisket"></div>
          <div class="item__description">
            <div class="item__name">Brisket</div>
            <div class="item__price">17$</div>
          </div>
      </div>
        <div class="item">
          <div class="item__img-cont"><img class="item__img" src="/imgs/menu/pastrami-sandwich.jpg" alt="pastrami-sandwich"></div>
          <div class="item__description">
            <div class="item__name">Pastrami Sandwich</div>
            <div class="item__price">18$</div>
          </div>
      </div>
        <div class="item">
          <div class="item__img-cont"><img class="item__img" src="/imgs/menu/pork-belly.jpg" alt="pork-belly"></div>
          <div class="item__description">
            <div class="item__name">Pork Belly</div>
            <div class="item__price">19$</div>
          </div>
      </div>
        <div class="item">
          <div class="item__img-cont"><img class="item__img" src="/imgs/menu/pork-ribs.jpg" alt="pork-ribs"></div>
          <div class="item__description">
            <div class="item__name">Pork Ribs</div>
            <div class="item__price">18$</div>
          </div>
      </div>
        <div class="item">
          <div class="item__img-cont"><img class="item__img" src="/imgs/menu/pulled-pork.jpg" alt="pulled-pork"></div>
          <div class="item__description">
            <div class="item__name">Pulled Pork</div>
            <div class="item__price">17$</div>
          </div>
      </div>
        <div class="item">
          <div class="item__img-cont"><img class="item__img" src="/imgs/menu/smoked-chicken-wings.jpg" alt="smoked-chicken-wings"></div>
          <div class="item__description">
            <div class="item__name">Smoked Chicken Wings</div>
            <div class="item__price">14$</div>
          </div>
      </div>
       </div>
    </div>`;
}
