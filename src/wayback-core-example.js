import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

import { getWaybackItemsWithLocalChanges, getWaybackItems } from "@vannizhang/wayback-core";

const startTime = Date.now();
const waybackItemsLocal = await getWaybackItemsWithLocalChanges(
	{
			longitude: -115.2985,
			latitude:  36.06399999999999
	},
	1
);
const endTime = Date.now();

console.log(waybackItemsLocal);
console.log(`Time to get waybackItems with local changes: ${endTime - startTime}ms`);

/* const startTime2 = Date.now();
const waybackItems = await getWaybackItems();
const endTime2 = Date.now();

console.log(waybackItems);
console.log(`Time to get waybackItems: ${endTime2 - startTime2}ms`); */


// lat: 36.06399999999999, lon: -115.2985