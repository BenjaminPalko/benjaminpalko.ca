---
layout: blog
title: Godot .NET with SpacetimeDB
description: First post.
image:
  url: https://spacetimedb.com/meta-tags.png
  alt: SpacetimeDB
date: '2026-1-22'
categories:
  - development
published: false
---

I've been on and off again experimenting with Godot since the great Unity [controversy of 2023.](https://www.geekwire.com/2023/heres-why-so-many-video-game-developers-are-suddenly-abandoning-the-unity-engine/) At the time Godot came up pretty quickly as the open-source alternative, I'll spare you the history lesson we are here to talk SpacetimeDB! If you found this article I assume you already know what SpacetimeDB is.

# Setting up our workspace

Before we get into any programming we are going to do some setup on our project workspace to help things along, we will be thankful for this later! I'm going to be painfully explicit in the details here so bare with me.

## Create a project directory

We are going to sidestep creating the root project directory with Godot, this will become apparent as to why later but for now just trust me! 😉

```bash
mkdir massive
```

## Init Git

```bash
git init
```

## Set tool version with mise

We are going to use [mise-en-place](https://mise.jdx.dev/) to handle our tool versions at the project level, this is a great tool that I now use by default for any new project Im working on. It allows us to keep our tool versions independent of our global settings.

```bash
mise use dotnet@8 bun@latest
```

> This will generate a `mise.toml` file in our project root.

The first tool is obvious, we are writing in C# so of course we need dotnet! Using bun however, let me explain.

## Create a new Godot project

## Create docker-compose

```yaml
services:
  spacetime:
    image: clockworklabs/spacetime
    ports:
      - 3000:3000
    command: start
```

## Create package.json

```json
{
	"name": "massive",
	"scripts": {
		"database:up": "docker compose up -d",
		"database:down": "docker compose down",
		"database:publish": "spacetime publish --project-path server massive",
		"database:generate": "spacetime generate --lang csharp --out-dir client/module_bindings --project-path server"
	},
	"devDependencies": {
		"@types/bun": "latest"
	}
}
```

## .editorconfig

```editorconfig
root = true

[*]
charset = utf-8
```
