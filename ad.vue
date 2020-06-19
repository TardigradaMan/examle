<template>
  <div class="advertising">
    <section class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title title-decor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p class="header__text subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <span class="scroll"> </span>
        </div>
      </div>
    </section>

    <section class="description">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p class="description__text subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <ul class="description__list">
          <li class="description__item description__item--left">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--right">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--central"></li>
          <li class="description__item description__item--left">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--right">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="skills">
      <div class="header-block">
        <h2 class="skills__title title-decor title-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p class="description__text subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <app-swipe-slider :sliderData="skills"></app-swipe-slider>
    </section>
  </div>
</template>
<script>
import appSwipeSlider from '../components/main/swipe-slider';

export default {
  components: {
    appSwipeSlider,
  },

  async asyncData({ store }) {
    const skills = await store.dispatch('content/fetchSkill');

    return { skills };
  },
  methods: {
    openForm() {
      this.$router.push('/contact');
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 100vh;
  background: rgb(162, 224, 236);
  background-image: url('~assets/img/bg_5.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &__wrapper {
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    & span {
      position: absolute;
      bottom: 15px;
    }
  }
  &__title {
    padding: 0;
    margin: 0;
    font-size: 35px;
    font-weight: 700;
    color: rgb(68, 69, 70);
    &::after {
      background-color: rgb(68, 69, 70);
      transform: scale(1.2, 1);
    }
  }
  &__text {
    color: rgb(68, 69, 70);
  }
}
.description {
  padding: 0px 10px 20px;
  // background: rgba(121, 223, 107, 0.329);
  padding-top: 50px;
  padding-bottom: 110px;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;

    width: 300;
    height: 150;

    border-left: 500px solid $grey;
    border-top: 200px solid transparent;
    // box-shadow: 0 0 10px #000;

    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__list {
    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr 1fr;
    gap: 10px;

    list-style: none;
    padding: 0;
    margin: 0 auto;
    margin-top: 40px;

    position: relative;
    z-index: 3;
  }
  &__item {
    box-shadow: $shadow;
    padding: 10px;

    &--left {
      text-align: right;
      padding-right: 70px;
      position: relative;
      background: rgba(53, 118, 192, 0.1);
      & > p {
        padding-left: 15px;
      }
      &::after {
        content: '';
        background-image: url('~assets/img/icon_descript.png');
        background-size: cover;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;

        width: 65px;
        height: 65px;
      }
    }
    &--central {
      text-align: center;
      grid-row: 1/3;
      grid-column: 2/3;
      min-width: 415px;

      background-image: url('~assets/img/Тут_изображение.png');
      background-repeat: no-repeat;
      background-position: center;
    }
    &--right {
      text-align: left;
      padding-left: 70px;
      position: relative;
      background: rgba(53, 118, 192, 0.1);
      & > p {
        padding-right: 15px;
      }
      &::before {
        content: '';
        background-image: url('~assets/img/icon_descript.png');
        background-size: cover;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;

        transform: scale(-1, 1);

        width: 65px;
        height: 65px;
      }
    }
  }
}

.skills {
  background: $grey;
  padding: 20px 0;
}
</style>
