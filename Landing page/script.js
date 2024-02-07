function sendMail() {

  console.log(document.getElementById("exampleInputName").value)

  var params = {
    name: document.getElementById("exampleInputName").value,
    email: document.getElementById("exampleInputEmail2").value,
    message: document.getElementById("exampleInputMessage").value,
  };

  const serviceID = "service_rzrxhgl";
  const templateID = "template_o6ierwy";

  var name = document.getElementById('exampleInputName').value;
  var email = document.getElementById('exampleInputEmail2').value;
  var message = document.getElementById('exampleInputMessage').value;

  if (name !== '' && email !== '' && message !== '') {
    // All fields are filled, you can submit the form or perform other actions here
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("exampleInputName").value = "";
        document.getElementById("exampleInputEmail2").value = "";
        document.getElementById("exampleInputMessage").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

      })
      .catch(err => console.log(err));

  } else {
    alert('Please fill in all the required fields.');
  }


}

Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -1, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.0331906429643545 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.05, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.18, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.15, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.27, range: [0, 2] },
    noise_scale: { value: 19.85, range: [0, 100] },
  },
  gooey: true,
});

const heroright = document.querySelector(".heroright");
const herorightText = heroright.querySelector("p:nth-child(1)");
const herorightImage = heroright.querySelector(".image");
const herorightPs = heroright.querySelectorAll("p");

//Animates the heroright class elements on loading
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(herorightText, {
    y: 50,
    opacity: 0,
    duration: 2,
    delay: 2,
    ease: "power3.out",
  });

  gsap.from(herorightPs, {
    transform: "translateY(50px)",
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "power3.out",
  });

  gsap.from(herorightImage, {
    y: 50,
    opacity: 0,
    duration: 2,
    delay: 2,
    ease: "power3.out",
  });
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var h3s = elem.querySelectorAll("h3");

  var index1 = 0;
  var index = 0;
  var animating = false;

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("loader").style.transform = "translateY(-100%)";
      document.getElementById("loader").style.opacity = 0;
      document.getElementById("main-content").style.opacity = 1;
    }, 2000);
  });

  document.querySelector(".back").addEventListener("click", function () {
    if (!animating) {
      animating = true;

      gsap.to(h1s[index1], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });
      index1++;
      index1 === h1s.length ? (index1 = 0) : null;
      gsap.to(h1s[index1], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });

      gsap.to(h3s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });
      index++;
      index === h3s.length ? (index = 0) : null;
      gsap.to(h3s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
