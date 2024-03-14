<template>
	<div class="login__page_container">
		<div class="login__logo_icon">
			<img src="../../../assets/loginLogo.svg" alt="Единая фронтальная система" />
		</div>
		<div class="login__validation_form">
			<InputText
				type="text"
				v-model="value"
				class="login_input"
				placeholder="Логин"
			/>

			<InputText
				type="text"
				v-model="pswwd"
				class="login_input"
				placeholder="Пароль"
			/>
 
			<div class="checkbox">
				<Checkbox v-model="checked" :binary="true" id="checkbox" /> 
				Запомнить меня
			</div>

			<div class="login__submit_button w-full">
				<Button :style="{width:'100%'}" label ="Войти в систему"  />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";

const value = ref();
const pswwd = ref();
const checked = ref(false); 
</script>

<style scoped>
.login__page_container {
	box-sizing: border-box;

	/* Auto layout */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px;
	gap: 60px;

	position: absolute;
	width: 590px;
	height: 840px;
	left: 120px;
	top: calc(50% - 840px / 2);

	/* Primary White */
	background: #ffffff;
	/* Stroke/Secondary */
	border: 1px solid #e7e1db;
	border-radius: 6px;
}


.login__logo_icon {
	/* ЕФС лого 2 */

	/* Auto layout */
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 7px 0px;
	gap: 9px;

	width: 229px;
	height: 44px;

	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
}

.login__validation_form {
	/* Frame 47543 */

	/* Auto layout */
	display: flex;
	flex-direction: column;
	align-items: flex;
	padding: 0px;
	gap: 20px;

	width: 470px;
	height: 159px;

	/* Inside auto layout */
	flex: none;
	order: 1;
	flex-grow: 0;
}

.login_input {
	/* Input */

	/* Auto layout */
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 10px;
	gap: 10px;

	width: 470px;
	height: 49px;

	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
}

.login_password {
	/* Input */

	/* Auto layout */
	display: flex;
	flex-direction: row;
	padding: 0px;
	gap: 10px;

	width: 470px;
	height: 49px;

	/* Inside auto layout */
	flex: none;
	order: 1;
	flex-grow: 0;
}

.login__submit_button {
	/* button */

	/* Auto layout */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 14px 18px;
	gap: 10px;

	width: 470px;
	height: 49px;

	/* Highlights/Blue */
	background: #3b82f6;
	/* Highlights/Blue */
	border: 1px solid #3b82f6;
	border-radius: 6px;

	/* Inside auto layout */
	flex: none;
	order: 2;
	align-self: stretch;
	flex-grow: 0;
}

.chechbox {
	/* Запомнить */

	/* Auto layout */
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0px;
	gap: 10px;

	width: 138px;
	height: 21px;

	/* Inside auto layout */
	flex: none;
	order: 2;
	flex-grow: 0;
}
</style>
