export interface IAuthorData {
	name: string;
	toyhouseUrl: string;
	policyUrl?: string;
	links?: { url: string; label: string }[];
	themes?: { name: string; slug: string }[];
}

export const authorData: IAuthorData[] = [];

authorData.push({
	name: 'Safe',
	toyhouseUrl: 'https://toyhou.se/safe',
	policyUrl: 'https://toyhou.se/safe',
});

authorData.push({
	name: '8Byte',
	toyhouseUrl: 'https://toyhou.se/8Byte',
	policyUrl:
		'https://toyhou.se/~forums/16.htmlcss-graphics/192248.-friede99tarts-codes-',
	links: [
		{ label: 'Ko-Fi', url: 'https://ko-fi.com/friedeggtarts' },
		{ label: 'Gumroad', url: 'https://8byte.gumroad.com/' },
		{ label: 'Themes', url: 'https://toyhou.se/8byte/characters' },
		{ label: 'Customs', url: 'https://toyhou.se/~bulletins/278637.customs-tos-and-prices' },
	],
});

authorData.push({
	name: 'Eggy',
	toyhouseUrl: 'https://toyhou.se/Eggy',
	policyUrl:
		'https://toyhou.se/~bulletins/40160.freebie-rules',
	links: [
		{ label: 'Ko-Fi', url: 'https://ko-fi.com/A227EDY' },
		{ label: 'Gumroad', url: 'https://gumroad.com/lowkeywicked' },
		{ label: 'Shop', url: 'https://toyhou.se/Eggy' }
	],
});

authorData.push({
	name: 'Togo',
	toyhouseUrl: 'https://toyhou.se/Togo',
	policyUrl:
		'https://toyhou.se/8041133.tos',
	links: [
		{ label: 'Ko-Fi', url: 'https://ko-fi.com/eithorne' },
		{ label: 'Gumroad', url: 'https://toyhou.se/Togo' }
	],
});