// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;


import vercel from '@sveltejs/adapter-vercel';
export default {
    kit: {
        // ...
        adapter: vercel(),
        // ...
        vite: {
            define: {
                'process.env': process.env,
            },
        },
    }
}