---
title: The Art of Simple Design
description: Functional Decomposition as a Method of handling Contextual Shifts during project development
image:
  url: https://images.unsplash.com/photo-1766811474703-6e86727d7f95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  alt: This is an image
date: '2026-1-22'
categories:
  - development
published: false
---

Project degradation as a result of contextual shifts during development is a common occurrence, contextual shifts are a natural part of the project development process, and we should always try to account for them in our design and as we develop. Some design frameworks like IDesign seek to solve this through functional decomposition, by reducing a project to a set of functional interactions, i.e a data access calls, business logic, orchestration, etc... This is certainly the correct path, but in the process of trying to develop a perfect solution, often falls into the pit of overdesign with strict naming conventions and complicated architecture. This actively becomes a hindrance to development cadence, the problem we were seeking to fix.

A strong design methodology should not be a strict instruction manual, but an informative pamphlet. It should impart a new perspective on the same problems we have seen a million times, and give new tools to use.

```typescript
interface User {
	id: string;
	name: string;
	email: string;
	hashed_password: string;
}

interface IUserAccessor {
	findUser(user_id: string): Promise<User>;
	createUser(user: User): Promise<User>;
	updateUser(user: User): Promise<User>;
	deleteUser(user_id: string): Promise<boolean>;
}
```

```typescript
import { Client } from 'pg';

class PostgresUserAccessor implements IUserAccessor {

    private readonly Client _client;

    constructor PostgresUserAccessor() {
        _client = new Client();
    }

    async findUser(id: string): Promise<User> {
        await _client.connect()
        const res = await client.query("SELECT * FROM users WHERE  users.id = '$1::text'", [id]);
        await _client.end()
        return res.rows[0];
    }
```

Over the years, between the projects I have worked on, I started to notice that teams tended to gravitate towards one side of a spectrum.

On one side you have the people who don't follow design patterns, this is the wild west and anything goes, maybe they don't know what patterns to use or even care that they exist? Their architecture is based on vibes, or what has come before, it tends to be disorganized and inconsistent.

On the other side of the spectrum are the people who are design pattern evangelists, they have either seen these projects and understand the importance of design, or are from a theoretical/academic background. They know their pattern(s) well, but perhaps are too vigorous in their application, this can result in an over-designed mess. What this looks like

They try so hard to strictly adhere to a chosen design pattern, but either out of misunderstanding or overcommitment, their code becomes rigid and unnatural. Think of it like this, Bridges are a great structure for traversing difficult terrain, but they have their uses. If I was trying to travel upstream on a winding river, I would not build a bridge straight up the river, when completed it may be the fastest option but it would certainly not be cheap or sensible, a boat would be a better option. Now if the context changes and I am trying to traverse from one side of this river to the other? A boat still works, but now the bridge is making a lot more sense! My point is, if all you know is bridge design then everything starts to look like a bridge problem, or... something something hammer and nails.

Perhaps this leads into another topic about overspecialization and the benefits of generalization in a specialized world. The greatest tools you can have on your belt are new perspectives!
