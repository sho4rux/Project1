<script setup>
import logIn from "./modules/auth/components/log-in-page.vue";
import loginNews from "./modules/auth/components/login-news.vue";
</script>

<template>
	<div class="container__main__login_">
		<logIn>

		</logIn>
		<loginNews></loginNews>
	</div>
</template>

<style scoped>
.container__main_login {
	position: absolute;
	width: 1920px;
	height: 1080px;
	right: 0px;
	top: 0px;

	/* Background */
	background: #f8f9fa;
}
</style>
