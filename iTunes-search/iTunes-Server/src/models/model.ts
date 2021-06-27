export module ITunes {

    export interface Result {
        wrapperType: string;
        artistId: number;
        collectionId: number;
        amgArtistId: number;
        artistName: string;
        collectionName: string;
        collectionCensoredName: string;
        artistViewUrl: string;
        collectionViewUrl: string;
        artworkUrl60: string;
        artworkUrl100: string;
        collectionPrice: number;
        collectionExplicitness: string;
        trackCount: number;
        copyright: string;
        country: string;
        currency: string;
        releaseDate: Date;
        primaryGenreName: string;
        previewUrl: string;
        description: string;
        kind: string;
        trackId?: number;
        trackName: string;
        trackCensoredName: string;
        trackViewUrl: string;
        artworkUrl30: string;
        trackPrice?: number;
        trackExplicitness: string;
        discCount?: number;
        discNumber?: number;
        trackNumber?: number;
        trackTimeMillis?: number;
        isStreamable?: boolean;
        collectionArtistId?: number;
        collectionArtistViewUrl: string;
        trackRentalPrice?: number;
        collectionHdPrice?: number;
        trackHdPrice?: number;
        trackHdRentalPrice?: number;
        contentAdvisoryRating: string;
        shortDescription: string;
        longDescription: string;
        hasITunesExtras?: boolean;
    }

    export interface Message {
        resultCount: number;
        results: Result[];
    }

    export interface RootObject {
        message: Message;
    }

}

