<template>
	<div class="login__news_container">
		<div class="login__news_title">
			<h3>Добро пожаловать</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
				tincidunt est.
			</p>
		</div>

		<div class="news_box">
			<div class="news_content">
				<div class="add_title"><h4>Объявления</h4></div>
				<div class="main_content">
					<button class="click_left_button" @click="showPreviousNews">
						<i class="pi pi-angle-left" style="font-size: 1rem"></i>
					</button>
					<img src="../../../assets/newsphoto.svg" alt="newsphoto" />
					<div class="text_content">
						<p>
						<div v-for="tes in p" :key="tes">
							<h4>{{tes.title1}}</h4>
							<p>{{ tes.text1 }}</p>
						</div>
						</p>
					</div>
					<button class="click_right_button" @click="showNextNews">
						<i class="pi pi-angle-right" style="font-size: 1rem"></i>
					</button>
				</div>
			</div>
		</div>

		<div class="login__news_icons">
			<div class="news_icons_grid">
				<div class="icon">
					<i class="pi pi-book" style="font-size: 1rem"></i>
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
					<i class="pi pi-dollar" style="font-size: 1rem"></i>
					<div class="icons__content">
						Курс валют
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
			<div class="news_icons_grid">
				<div class="icon">
					<i class="pi pi-users" style="font-size: 1rem"></i>
					<div class="icons__content">
						Телефонный справочник
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>

				<div class="icon">
					<i class="pi pi-file" style="font-size: 1rem"></i>
					<div class="icons__content">
						Шаблоны документов
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div class="icon">
					<i class="pi pi-megaphone" style="font-size: 1rem"></i>
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
import { ref } from 'vue'
	let p = ref

	const showContent = true
	p = [
		{title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun.", img1:'../../../assets/logo.svg'},
		{title2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun.", img2:'../../../assets/logo.svg'},
		{title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt est. Cras tempus blandit lectus ut mollis. Quisque facilisis purus felis, sit amet porttitor nun.", img3:'../../../assets/logo.svg'},
	]

</script>

<style scoped>
@media screen and (max-width: 720px) {
	div.login__news_container {
		display: none;
	}
}

.login__news_container {
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

.login__news_welcome {
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

.news_title {
	display: flex;
	margin: 1px 1px 1px 1px;
}

.login__news_title {
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	width: 910px;
	height: 72px;

	flex: none;
	order: 0;
	flex-grow: 0;
}

.news_box {
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

.login__news_icons {
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

button {
	display: none;
	cursor: pointer;
	background: #ffffff;
	border: none;
	border: 1px solid rgb(255, 255, 255);
}
</style>
