<script setup>
import logIn from "./modules/auth/components/log-in-page.vue";
import loginNews from "./modules/auth/components/login-news.vue";
</script>

<template>
	<div class="container__main__login">
		<logIn class="log-in"></logIn>
		<loginNews></loginNews>
	</div>
</template>

<style scoped>
.container__main_login {
	position: absolute;
	width: 1920px;
	height: 1080px;

	background: #f8f9fa;
}


	@media (min-width: 720px) {
		.container__main__login {
			display: flex;
			justify-content: center;
			align-content: center;
			margin: auto auto;
			background: yellow;
	}
}
</style>
