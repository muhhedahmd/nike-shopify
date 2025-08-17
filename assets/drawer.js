;(() => {
  function initCartDrawer(root = document) {
    const cartButton = root.querySelector("#cart-button")
    const closeButton = root.querySelector("#cart-close-button")
    const drawer = root.querySelector("#cart-drawer")
    const overlay = root.querySelector("#cart-overlay")

    if (!cartButton || !closeButton || !drawer || !overlay) {
      console.log("Cart Drawer elements not found")
      return
    }

    console.log("Cart Drawer initialized")

    function openDrawer() {
      drawer.classList.remove("translate-x-full")
      drawer.classList.add("translate-x-0")
      overlay.classList.remove("opacity-0", "invisible")
      overlay.classList.add("opacity-100", "visible")
      document.body.style.overflow = "hidden"
    }

    function closeDrawer() {
      drawer.classList.remove("translate-x-0")
      drawer.classList.add("translate-x-full")
      overlay.classList.remove("opacity-70", "visible")
      overlay.classList.add("opacity-0", "invisible")
      document.body.style.overflow = ""
    }

    cartButton.addEventListener("click", openDrawer)
    closeButton.addEventListener("click", closeDrawer)
    overlay.addEventListener("click", closeDrawer)

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !drawer.classList.contains("translate-x-full")) {
        closeDrawer()
      }
    })
  }

  // أول تحميل
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded fired")
    initCartDrawer()
  })

  // عند تحميل أي section جديد
  document.addEventListener("shopify:section:load", (e) => {
    console.log("Section reloaded:", e.target)
    initCartDrawer(e.target)
  })
})()
