<script>
	import logo from '$lib/assets/vamos_logo.png';
</script>

<header>
	<div class="container global-container">
		<a href="/" title="Strona główna">
			<img src={logo} alt="Vamos logo" class="logo" />
		</a>
		<nav>
			<ul class="menu">
				<li>
					<a href="/realizacje">Realizacje</a>
					<ul class="sub-menu">
						<li>
							<a href="/realizacje/domki-drewniane">Domki drewniane</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="/o-nas">O nas</a>
				</li>
				<li>
					<a href="/kontakt">Kontakt</a>
				</li>
			</ul>
		</nav>
	</div>
	<button class="burger">Menu</button>
</header>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		@include mobile {
			position: absolute;
			width: 250px;
			height: 100%;
			top: 0;
			right: 0;
		}
	}

	ul {
		list-style: none;
		flex-wrap: wrap;
	}

	.menu {
		display: flex;

		@include mobile {
			flex-direction: column;
		}
	}

	.sub-menu {
		display: none;

		&.active {
			display: block;
		}

		@include mobile {
			display: block;
		}
	}

	li {
		padding: 0 10px;

		@include mobile {
			padding: 10px;
		}
	}

	.logo {
		width: 80px;
	}

	.burger {
		position: absolute;
		top: 15px;
		right: 15px;
		display: none;

		@include mobile {
			display: block;
		}
	}
</style>
