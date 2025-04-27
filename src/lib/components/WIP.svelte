<div class="hazard-border flex w-full flex-col justify-around">
	<div class="scroll-parent hazard w-full -skew-2 overflow-hidden px-8">
		<div class="scroll-element primary flex justify-around">
			<b>Under Construction</b>
			<b>Caution</b>
			<b>Work In Progress</b>
			<b>Under Construction</b>
			<b>Caution</b>
		</div>
		<div class="scroll-element secondary flex justify-around">
			<b>Under Construction</b>
			<b>Caution</b>
			<b>Work In Progress</b>
			<b>Under Construction</b>
			<b>Caution</b>
		</div>
	</div>
	<div class="scroll-parent hazard w-full skew-2 overflow-hidden px-8">
		<div class="scroll-element -primary flex justify-around">
			<b>Caution</b>
			<b>Work In Progress</b>
			<b>Under Construction</b>
			<b>Caution</b>
			<b>Work In Progress</b>
		</div>
		<div class="scroll-element -secondary flex justify-around">
			<b>Caution</b>
			<b>Work In Progress</b>
			<b>Under Construction</b>
			<b>Caution</b>
			<b>Work In Progress</b>
		</div>
	</div>
	<div class="scroll-parent hazard w-full -skew-2 overflow-hidden px-8">
		<div class="scroll-element primary flex justify-around">
			<b>Work In Progress</b>
			<b>Under Construction</b>
			<b>Caution</b>
			<b>Work In Progress</b>
			<b>Under Construction</b>
		</div>
		<div class="scroll-element secondary flex justify-around">
			<b>Work In Progress</b>
			<b>Under Construction</b>
			<b>Caution</b>
			<b>Work In Progress</b>
			<b>Under Construction</b>
		</div>
	</div>
</div>

<style>
	.scroll-parent {
		position: relative;
		height: 4rem;
	}

	.scroll-element {
		position: absolute;
		width: inherit;
		height: inherit;
		left: 0%;
		top: 0%;
	}

	.primary {
		animation: primary 10s linear infinite;
	}

	.secondary {
		animation: secondary 10s linear infinite;
	}

	.-primary {
		animation: -primary 10s linear infinite;
	}

	.-secondary {
		animation: -secondary 10s linear infinite;
	}

	@keyframes primary {
		from {
			left: 0%;
		}
		to {
			left: -100%;
		}
	}

	@keyframes secondary {
		from {
			left: 100%;
		}
		to {
			left: 0%;
		}
	}

	@keyframes -primary {
		from {
			left: -100%;
		}
		to {
			left: 0%;
		}
	}

	@keyframes -secondary {
		from {
			left: 0%;
		}
		to {
			left: 100%;
		}
	}

	.hazard-border {
		border: solid 20px;
		border-image: repeating-linear-gradient(-75deg, #ffb101, #ffb101 10px, black 10px, black 20px)
			20;
	}

	.hazard {
		color: black;
		background: #ffb101;
		border-top: solid 20px;
		border-bottom: solid 20px;
		border-image: repeating-linear-gradient(-75deg, #ffb101, #ffb101 10px, black 10px, black 20px)
			20;
	}
</style>
