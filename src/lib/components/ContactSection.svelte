<script>
	import Heading from './Heading.svelte';
	import mailIcon from '$lib/assets/mail.svg';
	import phoneIcon from '$lib/assets/phone.svg';
	import mapsIcon from '$lib/assets/maps.svg';
	import facebookIcon from '$lib/assets/facebook_icon.svg';
	import instagramIcon from '$lib/assets/instagram_icon.svg';
</script>

<section>
	<div class="global-container">
		<h2>Kontakt</h2>
		<div class="columns">
			<div class="column">
				<h3>Chcesz zostać klientem?</h3>
				<ul>
					<li>Wojciech Siczek</li>
					<li>
						<img src={phoneIcon} alt="" class="icon" aria-hidden="true" />
						<a href="tel:+48531551182 ">+48 531 551 182 </a>
					</li>
					<li>
						<img src={mailIcon} alt="" class="icon" aria-hidden="true" />
						<a href="mailto:biuro@vamos-wood.pl">biuro@vamos-wood.pl</a>
					</li>
				</ul>
			</div>
			<div class="column">
				<h3>Dane firmy</h3>
				<ul>
					<li>Lasowice 7</li>
					<li>26-630 Jedlnia Letnisko</li>
					<li>
						<img src={mapsIcon} alt="" aria-hidden="true" class="icon" />
						<a href="https://goo.gl/maps/Ff7tRb1VtpK9dBDF7" target="_blank" rel="noreferrer"
							>Google Maps</a
						>
					</li>
				</ul>
			</div>
			<div class="column">
				<h3>Media</h3>
				<ul>
					<li>
						<img src={facebookIcon} alt="" class="icon" aria-hidden="true" />
						<a href="https://www.facebook.com/people/Vamos-wood/100086320336582/" target="_blank"
							>facebook</a
						>
					</li>
					<li>
						<img src={instagramIcon} alt="" class="icon" aria-hidden="true" />
						<a href="https://www.instagram.com/vamos_wood/" target="_blank">instagram</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		padding: 2em 0;
		background-color: var(--contact-background);

		@include mobile {
			padding: 1em 0;
		}
	}

	.columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;

		@include tablet {
			grid-template-columns: repeat(2, 1fr);
		}

		@include mobile {
			grid-template-columns: 1fr;
		}
	}

	h2 {
		margin-top: 0;
	}

	a {
		color: var(--color);
		text-decoration: none;
		border-bottom: 1px solid transparent;

		&:hover,
		&:focus {
			border-color: var(--primary-color);
		}
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		display: flex;
		align-items: center;
		padding: 5px 0;
	}

	.soon {
		span {
			opacity: 0.5;
		}

		sup {
			font-size: 0.8rem;
			color: var(--primary-color);
		}
	}

	.icon {
		width: 20px;
		margin-right: 5px;
	}
</style>
