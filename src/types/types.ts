export type VideoSnippet = {
    channelId: string;
    channelTitle: string;
    title: string;
    thumbnails: {
        high: {
            url: string;
        };
    };
    publishedAt: string;
    description: string;
};

export type Video = {
    id: { channelId: string; videoId: string; playlistId: string };
    snippet: VideoSnippet;
};
export type PlaylistVideo = {
    id: string;
    snippet: VideoSnippet;
};

export type VideosProp = {
    items: Video[];
};
export type PlaylistVideosProp = {
    items: PlaylistVideo[];
};

export type SidebarProps = {
    menu: boolean;

    activeChannel: { name: string; category: string };
    setActiveChannel({
        name,
        category,
    }: {
        name: string;
        category: string;
    }): void;
};

export type Channel = {
    brandingSettings: {
        channel: {
            title: string;
            description: string;
        };
        image: {
            bannerExternalUrl: string;
        };
    };
    snippet: VideoSnippet;
    statistics: {
        subscriberCount: string;
    };
};

export type VideoDetail = {
    snippet: VideoSnippet;
    statistics: {
        likeCount: string;
        viewCount: string;
    }
}