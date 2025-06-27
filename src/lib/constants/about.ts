import { BicepsFlexed, Braces, Gamepad2, Globe } from "@lucide/svelte";
import type { Component } from "svelte";

type Item = {
	icon: Component;
	title: string;
	description: string;
};

export const name: string = "Benjamin Palko";

export const titles: string[] = [
	"Full Stack Developer",
	"Video Game Developer",
];

export const description: string =
	"Hi! I'm Ben, a Canadian Software Developer from Ottawa, Canada. I currently work as Full Stack Developer with a strong architectural mindsent. I enjoy learning new things and broadening my perspectives, I take pride in being a generalist which I believe gives me an edge. I enjoy working on side projects, have participated in Game Jams, fallen down the rabbit hole of Linux Ricing. I have an active life from the desk, like races, cycling, climbing and even wood-working! If you want to learn more about me check out my resume, my blog posts or my projects!";

export const activities: Item[] = [
	{
		icon: Globe,
		title: "Web Development",
		description:
			"This is what I have been doing for a living for almost 7 years. I've worked on projects from Python, to Java EE, Spring Framework, .NET and a whole lot of the jungle of the Javascript/Typescript ecosystem.",
	},
	{
		icon: Gamepad2,
		title: "Game Development",
		description:
			"I've worked in both Unity and Godot, I hope to build my own engine and/or become a contributor! It's a hobby I do out of passion and inspiration. Save the animals!",
	},
	{
		icon: BicepsFlexed,
		title: "Athletics",
		description:
			"Self-proclaimed athlete, cyclist, runner and racer. Excercise is important, I love the outdoors, and I try to get out as much as I can. Keeping your body healthy does wonders for your mind.",
	},
	{
		icon: Braces,
		title: "Linux Ricing",
		description:
			"Not just a hobby, it's a lifestyle. It's a Pandora's box of taking back control of your tech life, and be warned, it doesn't end with just your desktop.",
	},
];
