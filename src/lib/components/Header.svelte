<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/vamos_logo.png';

	interface Menu {
		id: string;
		status: 'published' | 'draft' | 'archived';
		items: Item[];
	}

	interface Item {
		label: string;
		url: string;
		submenu?: Item[];
	}

	export let menu: Menu;

	let active = false;

	function handleBurgerClick() {
		active = !active;
	}

	function closeMenu() {
		active = false;
	}
</script>

<header>
	<div class="container global-container">
		<a href="/" title="Strona główna">
			<img src={logo} alt="Vamos logo" class="logo" />
		</a>
		<button class="burger" on:click={handleBurgerClick}>Menu</button>
		<nav class:active>
			<ul class="menu">
				{#each menu.items as item, index}
					{#if item.submenu}
						<li class="with-sub-menu">
							<a
								href={item.url}
								class="link"
								class:active={$page.url.pathname.includes(item.url)}
								on:click={closeMenu}>{item.label}</a
							>
							<ul class="sub-menu" class:right={index === menu.items.length - 1}>
								{#each item.submenu as subItem}
									<li>
										<a
											href={subItem.url}
											class="link"
											class:active={$page.url.pathname === subItem.url}
											on:click={closeMenu}
										>
											{subItem.label}
										</a>
									</li>
								{/each}
							</ul>
						</li>
					{:else}
						<li>
							<a
								href={item.url}
								class="link"
								class:active={$page.url.pathname.includes(item.url)}
								on:click={closeMenu}>{item.label}</a
							>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		background-color: var(--header-background);
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
			left: -25px;
			min-width: 220px;
			padding: 20px 10px;
			background-color: var(--header-background);
			border-radius: 10px;
			border: 1px solid #c6c6c6;
			border-top: 1px solid rgb(210, 210, 210);
			box-shadow: -2px 7px 33px -5px rgb(199, 199, 199);

			@include dark {
				box-shadow: 0 2px 10px rgba(29, 29, 29, 0.7);
			}

			&.active {
				display: block;
			}

			&.right {
				left: auto;
				right: 15px;
			}
		}

		li {
			padding: 15px;
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
		border-bottom: 1px solid transparent;

		&:hover,
		&:focus {
			border-color: var(--primary-color);
		}

		&.active {
			&:hover {
				border-color: transparent;
			}

			&::before {
				content: '•';
				position: absolute;
				top: 13px;
				left: 0;
				color: var(--primary-color);
			}
		}
	}

	.burger {
		position: absolute;
		z-index: 3;
		top: 20px;
		right: 20px;
		padding: 8px;
		display: none;
		border: 2px solid var(--color);
		border-radius: 10px;
		background: transparent;
		font-weight: 700;
		color: var(--color);

		@include mobile {
			display: block;
		}
	}
</style>
