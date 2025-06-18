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
	"Hi! I'm Ben, a Canadian Software Developer from Ottawa, Canada 🇨. I'm currently a Full Stack Developer and I love to do side projects, learn new things and have fun while doing it. I have participated in Game Jams, fallen down the rabbit hole of Linux Ricing and many other things away from the desk like races, cycling and even wood-working!";

export const activities: Item[] = [
	{
		icon: Globe,
		title: "Web Development",
		description: "React, Typescript and Svelte oh my",
	},
	{
		icon: Gamepad2,
		title: "Game Development",
		description:
			"Unreal, Unity, Godot, RPG Maker. The game dev community was at peace until the Unity nation attacked",
	},
	{
		icon: BicepsFlexed,
		title: "Athletics",
		description: "Self-proclaimed athlete, cyclist, runner and racer",
	},
	{
		icon: Braces,
		title: "Linux Ricing",
		description:
			"Builder of rices, vanquisher of Windows, distributor of open-source",
	},
];
