<template>
  <div>
    <div class="main">
      <div
        class="background-image"
        :class="{
          'day-image': isMorning || isDay,
          'night-image': isEvening || isNight,
        }"
      ></div>
      <div class="quote">
        <div class="quote-content">
          <p class="quote-text">{{ quote }}</p>
          <p class="quote-author">{{ author }}</p>
        </div>

        <button @click="changeQuote" class="quote-button"></button>
        <audio ref="audio" src="../audio/Soul_Alphabet.mp3" loop></audio>
        <button class="play-button" @click="playAudio"></button>
        <button class="stop-button" @click="stopAudio"></button>
      </div>

      <div class="greeting-text">
        <div class="greeting-main-title">
          <div
            id="greeting-symbol"
            :class="{
              'sun-icon': isMorning || isDay,
              'moon-icon': isEvening || isNight,
            }"
          ></div>

          <h1 class="greeting-title">{{ greeting }}</h1>
        </div>

        <div class="clock">
          <h2 class="clock-time">{{ time }} <span class="clock-time-zone">{{timeZoneAbbr}}</span></h2>
          <p class="clock__timezone" v-if="timezone">
            in {{ timezone.split("/")[1].replace("_", " ") }},
            {{ timezone.split("/")[0].replace("_", " ") }}
          </p>
        </div>
      </div>
    </div>

    <div class="more">
      <div class="button-content">
        <div
          class="more-button"
          :class="{ open: showMore }"
          @click="toggleMore"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          tabindex="0"
        >
          {{ moreButtonText }}
          <span
            class="more-button-arrow"
            style="pointer-events: none"
            :class="{ 'more-button-arrow-open': showMore }"
          ></span>
        </div>
      </div>

      <div
        class="more-content"
        :class="{ 'more-content-light': isMorning || isDay }"
        v-show="showMore"
      >
        <div
          class="more-content-item"
          :class="{ 'more-content-item-light': isMorning || isDay }"
        >
          <p class="more-content-paragraph">Current timezone:</p>
          <h2 class="more-content-info">{{ timezone }}</h2>
        </div>
        <div
          class="more-content-item"
          :class="{ 'more-content-item-light': isMorning || isDay }"
        >
          <p class="more-content-paragraph">Day of the week</p>
          <h2 class="more-content-info">
            {{ new Date().getDay() }}
          </h2>
        </div>
        <div
          class="more-content-item"
          :class="{ 'more-content-item-light': isMorning || isDay }"
        >
          <p class="more-content-paragraph">Day of the year</p>
          <h2 class="more-content-info">{{ new Date().getDayOfYear() }}</h2>
        </div>
        <div
          class="more-content-item"
          :class="{ 'more-content-item-light': isMorning || isDay }"
        >
          <p class="more-content-paragraph">Week number</p>
          <h2 class="more-content-info">{{ new Date().getWeek() }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "",
      quote: "",
      author: "",
      time: "",
      timezone: "",
      showMore: false,
      moreButtonText: "More",
        timeZoneAbbr: "",
    };
  },
  computed: {
    isMorning() {
      const hour = new Date().getHours();
      return hour >= 6 && hour < 10;
    },
    isDay() {
      const hour = new Date().getHours();
      return hour >= 10 && hour < 18;
    },
    isEvening() {
      const hour = new Date().getHours();
      return hour >= 18 && hour < 22;
    },
    isNight() {
      const hour = new Date().getHours();
      return hour >= 22 || hour < 6;
    },
    greetingSymbolSrc() {
      const hour = new Date().getHours();
      const greetingSymbol = document.getElementById("greeting-symbol");
      if (this.isMorning || this.isDay) {
        greetingSymbol.classList.add("sun-icon");
      } else {
        greetingSymbol.classList.add("moon-icon");
      }
    },
  },
  methods: {
    playAudio() {
      this.$refs.audio.play();
    },
    stopAudio() {
      this.$refs.audio.pause();
    },

    getTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const formatter = new Intl.DateTimeFormat("en", { timeZoneName: "short" });
  const timeZoneAbbr = formatter.format(now).split(" ").pop();
  this.time = `${hour}:${minute}`;
  this.timeZoneAbbr = timeZoneAbbr;
},

    changeQuote() {
      const quotes = [
        {
          text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
          author: "Albert Einstein",
        },
        {
          text: "The works must be conceived with fire in the soul but executed with clinical coolness.",
          author: "Joan Miro",
        },
        {
          text: "Your time is limited, don't waste it living someone else's life.",
          author: "Steve Jobs",
        },
        {
          text: "Knowledge is power.",
          author: "Francis Bacon",
        },
        {
          text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
          author: "Oprah Winfrey",
        },
        {
          text: "It is during our darkest moments that we must focus to see the light.",
          author: "Aristotle",
        },
        {
          text: "Let's not talk about Communism. Communism was just an idea, just pie in the sky.",
          author: "Boris Yeltsin",
        },
        {
          text: "Somewhere, something incredible is waiting to be known.",
          author: "Carl Sagan",
        },
        {
          text: "Knowledge is of no value unless you put it into practice.",
          author: "Anton Chekhov",
        },
      ];
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      this.quote = randomQuote.text;
      this.author = randomQuote.author;
    },
    toggleMore() {
      this.showMore = !this.showMore;
      this.moreButtonText = this.showMore ? "Less" : "More";
    },
    updated() {
      const moreButtonArrow = document.querySelector(".more-button-arrow");
      if (moreButtonArrow) {
        if (this.showMore) {
          moreButtonArrow.style.transform = "rotate(180deg)";
        } else {
          moreButtonArrow.style.transform = "rotate(0deg)";
        }
      }
    },
  },
  mounted() {
    this.changeQuote();
    //greetings
    const symbolElement = document.getElementById("greeting-symbol");
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 10) {
      this.greeting = "GOOD MORNING, IT’S CURRENTLY";
    } else if (hour >= 10 && hour < 16) {
      this.greeting = "GOOD DAY, IT’S CURRENTLY";
    } else if (hour >= 16 && hour < 22) {
      this.greeting = "GOOD EVENING, IT’S CURRENTLY";
    } else {
      this.greeting = "GOOD NIGHT, IT’S CURRENTLY";
    }

    // background img based on the time of day
    const body = document.querySelector("body");

    if (this.isMorning || this.isDay) {
      body.classList.add("day-image");
    } else {
      body.classList.add("night-image");
    }

    //time and update
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);

    //timezone

    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  },
};
Date.prototype.getDayOfYear = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((this - onejan) / 86400000);
};

Date.prototype.getWeek = function () {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  var week1 = new Date(date.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};
</script>

<style>
@import ".//assets/main.css";
.day-image {
  background-image: url(../img/day.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backdrop-filter: brightness(60%);
}
.night-image {
  background-image: url(../img/night.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.sun-icon::after {
  content: url(../img/sun.svg);
}
.moon-icon::after {
  content: url(../img/moon.svg);
}
</style>
