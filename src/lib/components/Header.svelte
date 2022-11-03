<script lang="ts">
	import logo from '$lib/assets/vamos_logo.png';
	import { clickOutside } from '$lib/utils/directive';

	let active = false;

	function handleBurgerClick() {
		active = !active;
	}

	function handleClickOutside() {
		active = false;
	}

	function detectActiveLink(node: HTMLElement) {
		if (node.getAttribute('href') === window.location.pathname) {
			node.classList.add('active');
		}
	}
</script>

<header>
	<div class="container global-container">
		<a href="/" title="Strona główna">
			<img src={logo} alt="Vamos logo" class="logo" />
		</a>
		<button class="burger" on:click={handleBurgerClick}>Menu</button>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<nav class:active on:click={handleClickOutside}>
			<ul class="menu" on:click|stopPropagation>
				<li class="with-sub-menu">
					<a use:detectActiveLink href="/realizacje" class="link">Realizacje</a>
					<ul class="sub-menu left">
						<li>
							<a href="/realizacje/domki-drewniane" class="link">Domki drewniane</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="/o-nas" class="link">O nas</a>
				</li>
				<li>
					<a href="/kontakt" class="link">Kontakt</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		left: 0;
		background-color: var(--background);

		@include dark {
			background-color: #282a30;
		}
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		@include mobile {
			position: fixed;
			z-index: 2;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.7);

			visibility: hidden;
			opacity: 0;

			&.active {
				visibility: visible;
				opacity: 1;
				@include transition;
			}
		}
	}

	ul {
		list-style: none;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
	}

	.menu {
		display: flex;

		@include mobile {
			position: absolute;
			width: 250px;
			height: 100vh;
			top: 0;
			right: 0;
			padding-top: 70px;
			flex-direction: column;
			background-color: var(--background);
			transform: translateX(100%);
			transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

			.active & {
				transform: translateX(0);
			}
		}
	}

	.sub-menu {
		@media (min-width: 576px) {
			display: none;
			position: absolute;
			top: 50px;
			min-width: 220px;
			padding: 20px 25px;
			background-color: var(--background);
			border-radius: 10px;
			box-shadow: -2px 7px 33px -5px rgb(199, 199, 199);

			@include dark {
				box-shadow: 0 2px 10px rgba(29, 29, 29, 0.7);
				background-color: #282a30;
			}

			&.active {
				display: block;
			}

			&.left {
				left: 15px;
			}

			&.right {
				right: 15px;
			}
		}

		li {
			padding: 10px 0;
		}

		@include mobile {
			display: block;
			margin-top: 15px;
			padding-left: 20px;
		}
	}

	li {
		position: relative;
		padding: 15px;

		&:hover,
		&:focus-within {
			.sub-menu {
				display: block;
			}
		}

		@include mobile {
			padding: 15px;
		}
	}

	.logo {
		width: 90px;
		padding: 7px 0;

		@include mobile {
			width: 65px;
		}
	}

	.link {
		color: var(--color);
		text-decoration: none;
		font-size: 1.2em;

		&:hover,
		&:focus {
			border-bottom: 1px solid var(--primary-color);
		}

		&.active {
			border-bottom: 2px solid var(--primary-color);
		}
	}

	.burger {
		position: absolute;
		z-index: 3;
		top: 15px;
		right: 15px;
		padding: 8px;
		display: none;
		border: 1px solid var(--color);
		border-radius: 10px;
		background: transparent;
		color: var(--color);

		@include mobile {
			display: block;
		}
	}
</style>
