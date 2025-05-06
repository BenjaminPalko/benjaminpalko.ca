type Dates = {
	createdAt: string;
	updateAt: string;
	publishedAt: string;
};

export interface BlogPost extends Dates {
	id: number;
	documentId: string;
	Title: string;
	Header: Image;
	Body: string;
	Topics: Topic[];
}

interface Topic {
	id: number;
	Topic: string;
}

interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: unknown;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

interface Image extends Dates {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: string;
	height: string;
	formats: {
		large: ImageFormat;
		medium: ImageFormat;
		small: ImageFormat;
		thumbnail: ImageFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: unknown | null;
}
