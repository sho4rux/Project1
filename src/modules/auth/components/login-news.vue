<template>
	<div class="login-news">
		<div class="login-news__title">
			<h3>Добро пожаловать</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
				tincidunt est.
			</p>
		</div>

		<div class="login-news__box">
			<div class="news_content">
				<div class="add_title"><h4>Объявления</h4></div>
				<Carousel
					:value="p"
					:numVisible="1"
					:numScroll="1"
					circular
					:autoplayInterval="5000"
					:responsiveOptions="responsiveOptions"
				>
					<template #item="slotProps">
						<div class="main_content">
							<!-- <img src="../../../assets/newsphoto.svg" alt="newsphoto" /> -->
							<div class="text_content">
								<div>
									<h4>{{ slotProps.data.title }}</h4>
									<p>{{ slotProps.data.text }}</p>
								</div>
							</div>
						</div>
					</template>
				</Carousel>
			</div>
		</div>

		<div class="login news_icons">
			<div class="news_icons_grid">
				<div class="icon">
					<i class="pi pi-book"></i>
					<div class="icons__content">
						База знаний
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>

				<div class="icon">
					<i class="pi pi-calculator"></i>
					<div class="icons__content">
						Кредитный калькулятор

						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div class="icon">
					<i class="pi pi-dollar"></i>
					<div class="icons__content">
						Курс валют
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
			<div class="news_icons_grid">
				<div class="icon">
					<i class="pi pi-users"></i>
					<div class="icons__content">
						Телефонный справочник
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>

				<div class="icon">
					<i class="pi pi-file"></i>
					<div class="icons__content">
						Шаблоны документов
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div class="icon">
					<i class="pi pi-megaphone"></i>
					<div class="icons__content">
						Новости банка
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Carousel from "primevue/carousel";

import { ref } from "vue";
const p = ref([
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun.",
		img: "../../../assets/logo.svg",
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun.",
		img: "../../../assets/logo.svg",
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun.",
		img: "../../../assets/logo.svg",
	},
]);
</script>

<style scoped>
@media screen and (max-width: 720px) {
	div.login__news_container {
		display: none;
	}
}

.login-news  {
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 60px;
	gap: 60px;

	position: absolute;
	width: 1030px;
	height: 840px;
	left: 770px;
	top: 60px;

	background: #ffffff;

	border: 1px solid #e7e1db;
	border-radius: 6px;
}

.news_welcome {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 10px;

	width: 802px;
	height: 21px;

	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	margin: 30px;
}

.login-news__title {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 1px 1px 1px 1px;
	width: 910px;
	height: 72px;

	flex: none;
	order: 0;
	flex-grow: 0;
}

.login-news__box {
	display: flex;
}

.text_content {
	margin: 10px;
	padding: 20px;
}

.news_icons_grid {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 30px;

	width: 910px;
	height: 77px;

	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.add_title {
	display: flex;
	justify-content: center;
	align-content: center;
}

.icon {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 14px;
	gap: 14px;

	width: 283.33px;
	height: 77px;

	border: 1px solid #f6f5f4;
	border-radius: 6px;

	flex: none;
	order: 0;
	flex-grow: 1;
}

.main_content {
	display: flex;
}

.click_left_button,
.click_right_button {
	display: block;
	align-content: center;
	justify-content: center;
}

.news_icons {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 30px;

	width: 910px;
	height: 184px;

	background: #ffffff;

	flex: none;
	order: 2;
	flex-grow: 0;
}

.icons__content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 0px;
	margin: auto auto;
	font-size: 12px;
	font-weight: 550;
	width: 203.33px;
	height: 49px;
	flex: none;
	order: 1;
	flex-grow: 1;
}

.icons__content p {
	font-size: small;
	font-weight: 300;
}

.pi {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	gap: 10px;

	width: 38px;
	height: 38px;
	font-size: 1rem;
	border-radius: 6px;

	flex: none;
	order: 0;
	flex-grow: 0;
}

.pi-book {
	border: 1px solid #dadafc;
	background: #dadafc;
	color: #7d7ddc;
}

.pi-users {
	border: 1px solid #fad3e7;
	background: #fad3e7;
	color: #b8648f;
}

.pi-calculator {
	border: 1px solid #feddc7;
	background: #feddc7;
	color: #9b7359;
}

.pi-file {
	border: 1px solid #c7eeea;
	background: #c7eeea;
	color: #119c8d;
}

.pi-dollar {
	border: 1px solid #ffea9e;
	background: #ffea9e;
	color: #977c22;
}

.pi-megaphone {
	border: 1px solid #b7d0f8;
	background: #b7d0f8;
	color: #3b82f6;
}

</style>
