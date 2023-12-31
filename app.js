// app.js
import Vue from 'vue';

Vue.component('addToCartButton', {
    template: `<div class="text-wrapper-5">В корзину</div>`
});

// Компонент для изображения "Синего"
Vue.component('blueImage', {
    template: '<img class="blue" src="img/blue.png" />'
});
// Компонент для изображения "Красного"
Vue.component('redImage', {
    template: '<img class="red" src="img/red.png" />'
});
// Компонент для изображения "Черного"
Vue.component('blackImage', {
    template: '<img class="black" src="img/black.png" />'
});

// Компонент для описания кофе MONTARO
Vue.component('coffeeDesc1', {
    template: `
        <div>
            <p class="MONTARO">Кофе молотый в дрип-пакетах MONTARO &#34;Спешиал Бленд&#34;</p>
            <p class="element-2">
                        <span class="span"
                            >Тип..............................Кофе в дрип-пакетах<br />Число пакетиков..............................8<br />Энергетическая
                            ценность, ккал/100 г..............................52<br />Белки, г/100 г..............................4.3<br />Жиры,
                            г/100 г..............................1<br />Углеводы, г/100 г..............................6.4<br /></span>
                        <span class="span"
                            >Срок годности в днях..............................547<br />Упаковка..............................Пластиковый
                            пакет<br />Вес товара, г..............................56</span>
                    </p>
        </div>
    `
});
Vue.component('coffeeDesc2', {
    template: `
        <div>
            <p class="MONTARO-2">Кофе молотый в дрип-пакетах MONTARO &#34;Эспрессо&#34;</p>
            <p class="element-3">
                        <span class="span"
                            >Тип..............................Кофе в дрип-пакетах<br />Число пакетиков..............................8<br />Энергетическая
                            ценность, ккал/100 г..............................52<br />Белки, г/100 г..............................4.3<br />Жиры,
                            г/100 г..............................1<br />Углеводы, г/100 г..............................6.4<br /></span>
                        <span class="span"
                            >Срок годности в днях..............................574<br />Упаковка..............................Пластиковый
                            пакет<br />Вес товара, г..............................56</span>
                    </p>
        </div>
    `
});
Vue.component('coffeeDesc3', {
    template: `
        <div>
            <p class="MONTARO-3">Кофе молотый в дрип-пакетах MONTARO &#34;Мокко Бленд&#34;</p>
            <p class="element-4">
                        <span class="span"
                            >Тип..............................Кофе в дрип-пакетах<br />Число пакетиков..............................8<br />Энергетическая
                            ценность, ккал/100 г..............................52<br />Белки, г/100 г..............................4.3<br />Жиры,
                            г/100 г..............................1<br />Углеводы, г/100 г..............................6.4<br /></span>
                        <span class="span"
                            >Срок годности в днях..............................574<br />Упаковка..............................Пластиковый
                            пакет<br />Вес товара, г..............................56</span>
                    </p>
        </div>
    `
});

Vue.component('coffeeText', {
    template: `
    <div class="view-5">
      <div class="text-wrapper-17">Выбор города</div>
        <select class="text-wrapper-17">
          <option selected disabled>Выбор города</option>
          <option>Мира 30</option>
          <option>Вокзальная 87</option>
          <option>Краснофлотская 19</option>
        </select>

    </div>
    `
});

// Компонент для цены "270 ₽"
Vue.component('price270', {
    template: '<div>270 ₽</div>'
});
// Компонент для цены "280 ₽"
Vue.component('price280', {
    template: '<div>280 ₽</div>'
});

Vue.component('textVer', {
    template: `
      <div>
        <p class="p">
          Поднимите себе настроение с чашечкой ароматного японского кофе! Да-да, не удивляйтесь, именно японский кофе
          отвечает самым строгим требованиям истинных кофеманов. Несмотря на то, что японцы открыли для себя этот
          напиток всего 100 лет назад, они всем сердцем полюбили его, сделав частью своей культуры. Конечно, в Японии
          кофе не растет, но это не помешало жителям Страны восходящего солнца довести процесс его производства до
          совершенства, импортируя лучшие сорта из Эфиопии, Бразилии, Танзании, Лаоса, Эквадора и Вьетнама.
        </p>
        <img class="img" src="img/cup.jpg" />
      </div>`
});

Vue.component('textNiz', {
    template: `
      <div>
        <p class="element">
          При выборе кофе в первую очередь обратите внимание на качество упаковки.Для фасовки своего кофе
          производители используют различные материалы: бумажные и полиэтиленовые пакеты, фольгированные,
          герметичные пачки с клапаном, алюминиевые банки и бочки.Кофе в бумажном пакете не может храниться долго.
          Данный вид упаковки не герметичен и в нее легко проникает воздух, что губительно для кофейных зерен. Уже
          через несколько часов кофе потеряет большую часть своего аромата и вы не сможете узнать его истинный
          вкус.Также нельзя хранить кофе полиэтиленовом пакете. Свет проникая сквозь стенки пакета пагубно влияет на
          зерна меняя его вкус и аромат. К тому же кофейные зерна после обжарки выделяет газы, и если они не смогут
          выйти из упаковки кофе испортится.Плотный герметичный пакет с клапаном - наиболее распространенный вид
          упаковки, который используют крупные производители, кто следит за качеством своего продукта. Данный вид
          упаковки защищает кофе при транспортировке, не позволяет воздуху и свету проникнуть внутрь упаковки, а
          излишние газы выходят через специальный клапан.В алюминиевые банки и бочки фасуют только эксклюзивные
          премиум сорта кофе. Смеси в банках имеет еще большую защиту, чем пакетах, так как кофе не подвержено
          физическому воздействию как в мягких пачках. Плюс внешний вид упаковки выглядит более респектабельно. Кофе
          в алюминиевых банках стоит очень дорого.<br /><br />Каждая смесь имеет срок годности. Обычно он составляет
          от 12 до 24 месяцев. Эта информация обязательно должна быть указана на упаковке. Дата может быть написана
          краской или выбита в самой пачке. Если кофе упакован в плотный вакуумный пакет с клапаном или алюминиевую
          банку, то производитель гарантирует, что на протяжении всего срока годности кофе будет сохранять свои вкус
          и аромат.Поэтому, если упаковка была нарушена или срок годности истек не раздумывая верните товар
          продавцу, этот кофе пить не рекомендуется. Выбирайте кофе в качественной упаковке.
        </p>
        <img class="img-2" src="img/coffee.jpg" />
      </div>`
});

  Vue.component('koffee-shop', {
    template: `
            <div class="koffee-shop">
                <div class="div">
                    <div class="overlap">
                        <div class="div-wrapper"><div class="text-wrapper">KoffeeShop</div></div>
                        <div class="text-wrapper-2">Интернет-магазин японского кофе</div>
                        <img class="b-da" src="img/logo.png" />
                    </div>
                    
                    <div class="view"><a href="#" @click="openModal('login')"><div class="text-wrapper-3">Вход</div></a></div>
                    <div class="view-2"><div class="text-wrapper-4">Регистрация</div></div>
                    
                    <coffee-text></coffee-text>
                    <text-ver></text-ver>

                    <div class="overlap-group">
                        <a name="h1">
                            <img class="line" src="img/line-3.svg" />
                            <div class="view-3"><div class="text-wrapper-6">Каталог</div></div>
                        </a>
                    </div>
                    <img class="line-2" src="img/line-3.svg" />
                    <div class="overlap-2">
                        <div class="overlap-3">
                            <img class="line-3" src="img/line-3.svg" />
                            <text-niz></text-niz>
                            <a class="polygon" href="#"><img class="polygon-2" src="img/polygon-2.svg" /></a>
                            <a class="polygon-wrapper" href="#"><img class="polygon-2" src="img/polygon-2.svg" /></a>
                        </div>
                        <a name="h2">
                            <div class="div-wrapper-2"><div class="text-wrapper-7">Как выбрать кофе?</div></div>
                        </a>
                        
                    </div>
                    <div class="overlap-4">
                        <div class="overlap-5">
                            <img class="line-4" src="img/line-3.svg" />
                            <div class="group">
                                <div class="overlap-group-2">
                                    <div class="text-wrapper-8">+7 (999) 999-00-00</div>
                                    <div class="text-wrapper-9">Бесплатный звонок по Риссии</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-wrapper-10">© 2023 «KoffeeShop»</div>
                    </div>
                    <a class="korz" href ="corzVue.html">
                      <add-to-cart-button></add-to-cart-button>
                    </a>
                    <a class="korz-2" href ="corzVue.html">
                      <add-to-cart-button></add-to-cart-button>
                    </a>
                    <a class="korz-3" href ="corzVue.html">
                      <add-to-cart-button></add-to-cart-button>
                    </a>
                    <blue-image></blue-image>
                    <red-image></red-image>
                    <black-image></black-image>
                    <coffee-desc1></coffee-desc1>
                    <coffee-desc2></coffee-desc2>
                    <coffee-desc3></coffee-desc3>
                    <a class="text-wrapper-14"><price270></price270></a>
                    <a class="view-4" href="#h1"><div class="text-wrapper-12">Каталог</div></a>
                    <a class="div-wrapper-3" href="#h2"><div class="text-wrapper-13">Как выбрать кофе?</div></a>
                    <a class="text-wrapper-15"><price280></price280></a>
                    <a class="text-wrapper-16"><price280></price280></a>
                </div>
            </div>
                  `, 
                  methods: {
      openModal(modalType) {
        this.$emit('toggle-modal', modalType);
      },
    },
  });

  Vue.component('modal-login', {
    template: `
    <div>
    <div class="modal-overlay" :class="{ 'fade-in': show, 'fade-out': !show }" @click="closeModal"></div>
      <div class="modal-content" :class="{ 'active': show }">
      <div class="entry" v-show="show && modalType === 'login'">
            <div class="div">
                <img class="line" src="img/line-3.svg" />
                <img class="img" src="img/line-4.svg" />
                <button @click="closeModal"><img class="pngwing" src="img/wing.png" /></button>
                <div class="div-wrapper"><div class="text-wrapper-3">Забыли пороль?</div></div>
                <div class="view-2">
                <div class="text-wrapper-4">+7 (999) 999-00-00</div>
                <div class="text-wrapper-5">Бесплатный звонок по Риссии</div>
                </div>
            <form @submit.prevent="submitForm">
        <div class="frame">
          <div class="label-wrapper"><div class="label">E-mail</div></div>
          <input style="background-color: #eddac5" ref="emailInput" type="email" v-model="email" required>
        </div>
        <div class="frame-wrapper">
          <div class="label-wrapper"><div class="label">Пароль</div></div>
          <input style="background-color: #eddac5" type="password" v-model="password" required>
        </div>
        <div class="view" @click="closeModal"><div class="text-wrapper-2">Войти</div></div>
      </form>
    </div>
    </div>
    </div>
</div>
</div>
</div>
      `,
      props: {
      show: Boolean,
      modalType: String, // пропс для передачи типа модального окна
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      submitForm() {
        this.closeModal();
      },
    },
  });

  new Vue({
    el: '#app',
    data() {
      return {
        showModal: false,
        currentModal: null,
      };
    },
    methods: {
      toggleModal(modalType) {
        this.currentModal = modalType;
        this.showModal = !this.showModal;
        console.log(`Toggling modal: ${modalType}`);
      },
      closeModal() {
        this.showModal = false;
      },
    },
    mounted() {
      console.log('Vue app is mounted!');
    },
});
