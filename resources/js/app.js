import 'bootstrap';
import $ from 'jquery';
window.$ = window.jQuery = $;
import { createApp, h } from 'vue';

import { createInertiaApp } from '@inertiajs/vue3';

import { resolvePageComponent } from
    'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) => `${title} - My Laravel App`,

    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')
    ),

    setup({ el, App, props, plugin }) {
        createApp({
            render: () => h(App, props)
        })
        .use(plugin)
        .mount(el);
    },
});