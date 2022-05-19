class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar-brand">
          <h1>Makan Terus</h1>
          </div>
          <div class="app-bar-menu">
          <button id="hamburger-button">☰</button>
        </div> 
        
        <nav id="navigation-drawer" class="app-bar-navigation">
          <ul class="nav-list">
            <li class="nav-item"><a href="#/">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/m-fajar-aditya/">About</a></li>
          </ul>
        </nav>
        </div>
          `;
  }
}

customElements.define('app-bar', AppBar);
