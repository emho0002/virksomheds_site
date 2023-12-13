//
// vha. Nodws (account) "CodePen,
// Gallery Item filter" samt. chatgpt.
//

document.querySelectorAll(".filter a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var a = link.getAttribute("href").substr(1);

    document.querySelectorAll(".items .item").forEach((item) => {
      item.classList.remove("hide");
    });

    if (a !== "all") {
      document.querySelectorAll(".items .item").forEach((item) => {
        if (!item.querySelector(`[class*="${a}"]`)) {
          item.classList.add("hide");
        }
      });
    }

    const visibleItems = document.querySelectorAll(".items .item:not(.hide)");
    if (visibleItems.length > 0) {
      document.querySelector(".items").classList.add("show-items");
    } else {
      document.querySelector(".items").classList.remove("show-items");
    }

    // document.querySelectorAll(".items a").forEach((itemsLink) => {
    //   if (!itemsLink.classList.contains(a) && a !== "all") itemsLink.classList.add("hide");
    //   else itemsLink.classList.remove("hide");
    // });
  });
});
