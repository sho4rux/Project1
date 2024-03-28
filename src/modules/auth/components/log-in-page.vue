<template>
	<div class="login-page">
		<div class="login-page__logo">
			<img
				src="../../../assets/loginLogo.svg"
				alt="Единая фронтальная система"
			/>
		</div>
		<div class="login-page__validation">
			<InputText
				type="text"
				v-model="email"
				class="login-page__input"
				:class="{ valid: isValidEmail == true, inValid: isValidEmail == false }"
				placeholder="Логин"
			/>
			<InputText
				type="text"
				v-model="pswwd"
				class="login-page__input"
				:class="{
					valid: isValidEmail == true,
					inValid: isStrongPassword == false,
				}"
				placeholder="Пароль"
			/>

			<div
				v-if="
					(email != '' && isValidEmail) || (pswwd != '' && isStrongPassword)
				"
				class="incorrect__data"
			>
				Введенные данные неверны, повторите попытку или обратитесь в ДИББ
			</div>

			<div class="login-page__checkbox {
">
				<Checkbox
					v-model="checked"
					inputId="RememberMe"
					name="checked"
					value="Запомнить меня"
				/>
				<label for="RememberMe" class="ml-2">Запомнить меня</label>
			</div>

			<div class="login-page__submit">
				<Button label="Войти в систему" @click="register" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";

const startValidation = ref(false);

const email = ref("");
const pswwd = ref("");
const checked = ref();

function register() {
	startValidation.value = true;
}

const isValidEmail = computed(() => {
	return startValidation.value
		? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
		: null;
});

const isStrongPassword = computed(() => {
	return startValidation.value
		? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pswwd.value)
		: null;
});
</script>

<style scoped>

.login-page {
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

.login-page__logo {
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

.login-page__validation {
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

.login-page__input {
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

.valid {
	border-color: rgb(147, 218, 40);
}
.inValid {
	border-color: red;
}

.incorrect__data {
	/* Helper Text */

	width: 470px;
	height: 16px;

	/* Caption/Regular */
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 0px;
	/* identical to box height, or 160% */

	/* Highlights/Inactive */
	color: #e24c4c;

	/* Inside auto layout */
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.login-page__checkbox {
	/* Запомнить */
	display: flex;
	flex-direction: row;
	margin-left: auto;
	align-items: center;

	gap: 10px;

	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
}

Button {
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
</style>
