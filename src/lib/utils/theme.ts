import { browser } from '$app/environment';

let matchMediaPrefDark: MediaQueryList;

if (browser) {
	matchMediaPrefDark = window.matchMedia('(prefers-color-scheme: dark)');
}

export function startListeningToOSTheme() {
	matchMediaPrefDark?.addEventListener('change', onSystemThemeChange);
}

export function stopListeningToOSTheme() {
	matchMediaPrefDark?.removeEventListener('change', onSystemThemeChange);
}

function onSystemThemeChange(event: MediaQueryListEvent) {
	setTheme(event.matches);
}

export function setTheme(isDark: boolean) {
	const html = document.querySelector('html');

	if (html) {
		html.dataset.theme = `${isDark ? 'dark' : 'light'}-theme`;
	}
}
