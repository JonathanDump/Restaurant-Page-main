export default function loadContactPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `<div class="header">
        <div class="header__name">Aurelia Elysium</div>
        <ul class="nav-bar">
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="main contact-container">
        <div class="about">
          <div class="about__info">
            <div class="about__phone">+1 310-314-6270</div>
            <div class="about__schedule">
              Monday - Sunday
              <div>	
                5:30AM - 11PM
              </div>
            </div>
            <div class="about__address">2809 Lincoln Blvd, Santa Monica, CA 90405, United States</div>

          </div>
          <div class="about__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105839.62366845658!2d-118.58175415792931!3d34.00567645862616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bad9faa25f1b%3A0x7118ed0bde96114a!2sMcDonald&#39;s!5e0!3m2!1sen!2sua!4v1684777731124!5m2!1sen!2sua" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        </div>
      </div>`;
}
