function loadLayout(mainContent = '') {
    const layout = `
        <div class="flex flex-col md:flex-row max-w-7xl mx-auto">
            <aside class="md:w-1/3 lg:w-1/4 md:h-screen md:sticky top-0 p-8 bg-gray-100 dark:bg-base-200 shadow-lg transition-colors duration-300">
                <div class="flex flex-col items-center md:items-start space-y-6">
                    <a href="/index.html" title="Go to Home">
                        <img class="w-48 h-48 rounded-full mx-auto md:mx-0"
                            src="/assets/images/profile.jpg"
                            alt="Profile picture of Me">
                    </a>

                    <div class="text-center md:text-left">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Preston Vander Vos</h1>
                        <p class="text-sm mt-1 text-gray-600 dark:text-gray-400">
                            Crypto-native researcher solving problems to accelerate the industry.
                        </p>
                        <p class="text-sm mt-1 text-gray-600 dark:text-gray-400">
                            <a href="mailto:pvandervos@proton.me" class="text-accent-light dark:text-accent hover:underline">pvandervos@proton.me</a>
                        </p>
                    </div>

                    <div class="flex flex-col justify-center md:justify-start gap-y-3">
                        <p class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                            <span class="text-base font-medium">San Francisco, US</span>
                        </p>
                        <a href="https://github.com/phvv" target="_blank" rel="noopener noreferrer" title="GitHub" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 98 96" aria-hidden="true"><path fill-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" clip-rule="evenodd" /></svg>
                            <span class="text-base font-medium">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/phvv/" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 90 90" aria-hidden="true"><path d="M 83.349 0 H 6.651 C 2.978 0 0 2.887 0 6.447 v 77.106 C 0 87.114 2.978 90 6.651 90 h 76.698 C 87.022 90 90 87.114 90 83.553 V 6.447 C 90 2.887 87.022 0 83.349 0 z M 27.282 75.339 H 13.688 v -40.64 h 13.594 V 75.339 z M 20.485 29.151 h -0.088 c -4.562 0 -7.512 -3.121 -7.512 -7.021 c 0 -3.988 3.04 -7.022 7.69 -7.022 c 4.651 0 7.513 3.034 7.601 7.022 C 28.176 26.03 25.225 29.151 20.485 29.151 z M 76.299 75.339 H 62.707 V 53.598 c 0 -5.463 -1.968 -9.19 -6.887 -9.19 c -3.756 0 -5.992 2.513 -6.975 4.94 c -0.359 0.868 -0.447 2.081 -0.447 3.296 v 22.695 H 34.804 c 0 0 0.178 -36.826 0 -40.64 h 13.594 v 5.756 c 1.806 -2.769 5.036 -6.709 12.251 -6.709 c 8.944 0 15.65 5.808 15.65 18.291 V 75.339 z"/></svg>
                            <span class="text-base font-medium">LinkedIn</span>
                        </a>
                        <a href="https://x.com/cogent_crypto_" target="_blank" rel="noopener noreferrer" title="X (Twitter)" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
                            <span class="text-base font-medium">X</span>
                        </a>
                        <a href="https://farcaster.xyz/phvv" target="_blank" rel="noopener noreferrer" title="Farcaster" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <g transform="scale(1,-1) translate(0,-1024)">
                                <path d="M91.429-64c-50.495 0-91.429 40.934-91.429 91.429v841.143c0 50.495 40.934 91.429 91.429 91.429h841.143c50.495 0 91.429-40.934 91.429-91.429v-841.143c0-50.495-40.934-91.429-91.429-91.429h-841.143zM128.491 91.455h257.21v35.326c0 0-5.104 8.53-9.938 11.036-5.102 2.646-19.871 4.415-19.871 4.415v29.808c0 0-2.318 11.34-6.621 15.455-4.16 3.979-18.768 8.83-18.768 8.83l1.103 221.884c0 0 6.911 92.336 78.379 133.571 63.443 36.605 101.558 27.594 101.558 27.594s97.843 0.24 144.607-78.375c21.066-35.414 28.701-81.687 28.701-81.687v-227.402c0 0-7.37-2.908-11.036-4.415-4.826-1.984-8.83-11.040-8.83-11.040l1.103-35.326c0 0-14.071-1.525-18.768-4.415-4.871-2.997-9.933-13.246-9.933-13.246v-32.013h257.205v32.013c0 0-4.583 10.064-8.83 13.246-4.937 3.698-17.661 5.518-17.661 5.518l-1.107 32.013c0 0 2.628 0.361-2.205 9.937-4.286 8.491-18.768 9.933-18.768 9.933v407.339h23.183l30.911 101.558h-142.406v101.558h-501.165v-101.558h-133.571l28.701-101.558 27.598 1.103-1.107-409.545c0 0-11.015-1.783-14.348-4.415-3.658-2.888-6.625-12.143-6.625-12.143l-1.103-34.223c0 0-11.74-1.528-16.558-4.415-4.385-2.628-11.040-12.143-11.040-12.143v-34.219z"/>
                            </svg>
                            <span class="text-base font-medium">Farcaster</span>
                        </a>
                        <a href="/assets/documents/resume.pdf"
                            download="PrestonVanderVos-Resume.pdf"
                            title="Download resume"
                            class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 9V3.5L19.5 9H14z"/>
                            </svg>
                            <span class="text-base font-medium">Resume</span>
                        </a>

                    </div>

                    <nav class="flex flex-col space-y-4 mt-8 w-full">
                        <a href="/index.html"
                            class="block text-center border-2 border-accent-light dark:border-accent
                                    text-accent-light dark:text-accent rounded-lg px-4 py-2 font-medium
                                    transition-colors duration-300">
                            Home
                        </a>
                        <a href="/blog.html"
                            class="block text-center border-2 border-accent-light dark:border-accent
                                    text-accent-light dark:text-accent rounded-lg px-4 py-2 font-medium
                                    transition-colors duration-300">
                            Blog
                        </a>
                    </nav>

                </div>
            </aside>

            <main class="relative md:w-2/3 lg:w-3/4 p-8 md:p-12">
                <div class="absolute top-8 right-8">
                    <button id="theme-toggle" type="button" class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light dark:focus:ring-offset-base-100 dark:focus:ring-accent transition-all duration-300">
                        <span class="sr-only">Toggle theme</span>
                        <svg id="theme-toggle-sun-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="5" stroke-width="2"></circle>
                            <line x1="12" y1="1" x2="12" y2="3" stroke-width="2"></line>
                            <line x1="12" y1="21" x2="12" y2="23" stroke-width="2"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke-width="2"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke-width="2"></line>
                            <line x1="1" y1="12" x2="3" y2="12" stroke-width="2"></line>
                            <line x1="21" y1="12" x2="23" y2="12" stroke-width="2"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke-width="2"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke-width="2"></line>
                        </svg>
                        <svg id="theme-toggle-moon-icon" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    </button>
                </div>
                ${mainContent}
            </main>
        </div>
    `;

    document.body.innerHTML = layout;
    initializeThemeToggle();
}

function initializeThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-toggle-sun-icon');
    const moonIcon = document.getElementById('theme-toggle-moon-icon');

    function setIconVisibility() {
        if (document.documentElement.classList.contains('dark')) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    setIconVisibility();

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');

        // Update localStorage with the new theme preference
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        setIconVisibility();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});
