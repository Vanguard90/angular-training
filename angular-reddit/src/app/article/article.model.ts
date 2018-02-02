export class Article {
    title: string;
    link: string;
    votes: number;

constructor( title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
}

voteUp(): void {
    this.votes += 1;
}

voteDown(): void {
    this.votes -= 1;
}

// domain is an utility function that extracts domain from the URL.

domain(): string {
    try {
        const domainAndPath: string = this.link.split('//')[1]; 
        // Split it from http: double slashes and take the 2nd array element which is the portion after the slashes.
        return domainAndPath.split('/')[0]; 
        // Equals to domain.
    } catch (err) {
        return null;
    }
}
}