
class  MenuDrawer {
  constructor(root = document) {
    this.root = root
    this.menuButton = this.root.querySelector("#menu-button")
    this.closeButton = this.root.querySelector("#menu-close-button")
    this.drawer = this.root.querySelector("#menu-drawer")
    this.overlay = this.root.querySelector("#menu-overlay")
   
    
    if (!this.menuButton || !this.closeButton || !this.drawer || !this.overlay) {
      console.warn("Menu Drawer elements not found")
      return
    }

    this._bindEvents()
  }

  
  openDrawer() {
    this.drawer.classList.remove("-translate-x-full")
    this.drawer.classList.add("-translate-x-0")
    this.overlay.classList.remove("opacity-0", "invisible")
    this.overlay.classList.add("opacity-70", "visible")
    document.body.style.overflow = "hidden"
  }

  closeDrawer() {
    this.drawer.classList.remove("-translate-x-0")
    this.drawer.classList.add("-translate-x-full")
    this.overlay.classList.remove("opacity-70", "visible")
    this.overlay.classList.add("opacity-0", "invisible")
    document.body.style.overflow = ""
  }

  _bindEvents() {
    this.menuButton.addEventListener("click", () => this.openDrawer())
    this.closeButton.addEventListener("click", () => this.closeDrawer())
    this.overlay.addEventListener("click", () => this.closeDrawer())

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.drawer.classList.contains("translate-x-full")) {
        this.closeDrawer()
      }
    })
  }
}

// ============================
// Usage
// ============================

// أول تحميل
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired")
  new MenuDrawer()
})

// عند تحميل أي section جديد
document.addEventListener("shopify:section:load", (e) => {
  console.log("Section reloaded:", e.target)
  new MenuDrawer(e.target)
})
