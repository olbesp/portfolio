(function () {

  window.onload = function() {

    if (window.Element && !Element.prototype.closest) {
      Element.prototype.closest =
      function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i,
              el = this;
          do {
              i = matches.length;
              while (--i >= 0 && matches.item(i) !== el) {};
          } while ((i < 0) && (el = el.parentElement));
          return el;
      };
    }


    // Smooth scrolling
    var scroll = new SmoothScroll('a[href*="#"]');

    var header = document.querySelector('.header');
    var body = document.querySelector('body');



    var projectModal = [
      {
        project: {
          name: "Crazy Drummer",
          img: "img/project-1.jpg",
          description:
          "\"Crazy Drummer\" is a virtual drum kit includes basic percussion instruments. You can choose one set of drums in menu and play the music by pressing corresponding keys on the keyboard. a virtual drum kit in browser. Tools: JavaScript, Howler.js, SASS.",
          demoLink: "https://olbesp.github.io/crazy-drummer/",
          gitHubLink: "https://github.com/olbesp/crazy-drummer"
        }
      },
      {
        project: {
          name: "Natours",
          img: "img/project-2.jpg",
          description:
          "Responsive landing page with a lots of cool CSS3 features. I've built it using Sass for travel company. ",
          demoLink: "https://olbesp.github.io/natours/",
          gitHubLink: "https://github.com/olbesp/natours"
        }
      },
      {
        project: {
          name: "Color Game",
          img: "img/project-3.jpg",
          description: "This simple game will be helpful if you're designer or web developer. You can increase your understanding in RGB color model. Tools: JavaScript.",
          demoLink: "https://olbesp.github.io/color-game/",
          gitHubLink: "https://github.com/olbesp/color-game"
        }
      },
      {
        project: {
          name: "Pig Game",
          img: "img/project-4.jpg",
          description: "Pig " +
          "is a very simple dice game that is exceptionally easy both to learn and to play. " +
          "As a jeopardy dice game, it manages to keep players on the edge of their seat as " +
          "they try to determine whether to risk it all or to play it safe. Pig can be played " +
          "virtually anywhere and it only requires one die and something to keep score with, " +
          "making it a fun and convenient way to pass the time. Tools: JavaScript",
          demoLink: "https://olbesp.github.io/pig-game/",
          gitHubLink: "https://github.com/olbesp/pig-game"
        }
      },
      {
        project: {
          name: "Omnifood",
          img: "img/project-5.jpg",
          description: "Responsive website I've built for food delivery service. Tools: jQuery, Animate.css",
          demoLink: "https://olbesp.github.io/omnifood/",
          gitHubLink: "https://github.com/olbesp/omnifood"
        }
      },
      {
        project: {
          name: "Mountain Travel",
          img: "img/project-6.jpg",
          description: "Responsive landing page for travel company built with flexbox layout and jQuery.",
          demoLink: "https://olbesp.github.io/mountain-travel/",
          gitHubLink: "https://github.com/olbesp/mountain-travel"
        }
      },
      {
        project: {
          name: "Trillo",
          img: "img/project-7.jpg",
          description:
          "\"Trillo\" is an app for hotels review. I've build this UI using Sass and flexbox layout",
          demoLink: "https://olbesp.github.io/trillo/",
          gitHubLink: "https://github.com/olbesp/trillo"
        }
      },
      {
        project: {
          name: "The Words Of People",
          img: "img/project-8.jpg",
          description:
          "Random quotes machine is built with using \"Quotes on design\" API, jQuery, AJAX",
          demoLink: "https://olbesp.github.io/the-words/",
          gitHubLink: "https://github.com/olbesp/the-words"
        }
      },
      {
        project: {
          name: "Weather Watcher",
          img: "img/project-9.jpg",
          description:
          "The web application swowing local weather. App detects the location of the user and requests the data from the weather API. Tools: ES2015, AJAX, SASS, Google Maps API.",
          demoLink: "https://olbesp.github.io/weather-watcher/",
          gitHubLink: "https://github.com/olbesp/weather-watcher"
        }
      }
    ];

    document.querySelectorAll('.project__btn').forEach(function(btn) {
      btn.addEventListener("click", function() {
        var projectId = this.getAttribute("data-projectId");
        var project = projectModal[projectId]
        var rendered = Mustache.render(template, project);
        var newNode = document.createElement('div');
        newNode.innerHTML = rendered;
        body.appendChild(newNode);
      });
    });

    function closeModal(modalContent) {
      modalContent.classList.remove('modal__content--animate-in');
      modalContent.classList.add('modal__content--animate-out');
      var modalContainer = modalContent.closest(".modal").parentNode;
      setTimeout(function() {
        modalContainer.parentNode.removeChild(modalContainer);
      }, 500);
    }

    body.addEventListener("click", function(event) {
      if (event.target) {
        if (event.target.classList.contains("modal__close")) {
          var modalContent = event.target.closest(".modal__content");
          closeModal(modalContent);
        } else if (event.target.classList.contains("modal")) {
          var modalContent = document.querySelector(".modal__content");
          closeModal(modalContent);
        }
      }
    });


    var template = document.querySelector("#project-modal-template").innerHTML;
    Mustache.parse(template);


    header.addEventListener('mouseover', function() {
      document.querySelector('.header__background-filter').style.opacity = '0';
    });

    header.addEventListener('mouseout', function() {
      document.querySelector('.header__background-filter').style.opacity = '1';
    });

  }


})();
