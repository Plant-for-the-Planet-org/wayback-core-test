import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

import { getWaybackItemsWithLocalChanges } from "@vannizhang/wayback-core";

const waybackItems = await getWaybackItemsWithLocalChanges(
	{
			longitude: 117.1825,
			latitude: 34.0556,
	},
	15
);

console.log(waybackItems);