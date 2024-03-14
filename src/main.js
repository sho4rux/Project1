
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ButtonIn from 'primevue/button';
import PasswordIn from 'primevue/password';
import CheckboxIn from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import ImageIn from 'primevue/image';
import CarouselIn from 'primevue/carousel';

import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)

app.component("ButtonIn", ButtonIn)
app.component("PasswordIn", PasswordIn)
app.component("CheckboxIn", CheckboxIn)
app.component("InputText", InputText)
app.component("ImageIn", ImageIn)
app.component("CarouselIn", CarouselIn)
app.use(PrimeVue)
app.mount('#app')
