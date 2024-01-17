const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

$('.burger').on('click', function (e) {
e.preventDefault()
$('.header__inner').toggleClass('header__inner--open')
})







const galleryItems = document.getElementsByClassName("gallery-item");
const venchItems = document.getElementsByClassName("vench-item");
const lovestrItems = document.getElementsByClassName("lovestr-item");
const sem1Items = document.getElementsByClassName("sem1-item");
const galleryItem = [...galleryItems, ...venchItems, ...lovestrItems,...sem1Items];
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);



(function () {
  $("body").addClass("js");

  let contactForm = {
    container: $("#contact"),
    overlay: $("#overlay"),
    config: {
      effect: "slideToggle",
      speed: 200
    },

    init: function (config) {
      $.extend(this.config, config);

      $(".order__button").on("click", this.show);
    },

    show: function () {
      const cf = contactForm,
        container = cf.container,
        overlay = cf.overlay,
        config = cf.config;

      if (container.is(":hidden")) {
        overlay.fadeIn(config.speed);
        cf.close.call(container);
        container[config.effect](config.speed);
      }
    },

    close: function () {
      const $this = $("#contact");

      if ($this.find("span.close").length) return;

      $("<span class=close>-</span>")
        .prependTo(this)
        .on("click", function () {
          const cf = contactForm,
            container = cf.container,
            overlay = cf.overlay,
            config = cf.config;

          container[config.effect](config.speed, function () {
            overlay.fadeOut(config.speed);
          });
        });
    }
  };

  contactForm.init({
    effect: "fadeToggle",
    speed: 200
  });

  $(document).mouseup(function (e) {
    const container = $("#contact");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      const cf = contactForm,
        overlay = cf.overlay,
        config = cf.config;

      container.fadeOut(config.speed, function () {
        overlay.fadeOut(config.speed);
      });
    }
  });
})();



