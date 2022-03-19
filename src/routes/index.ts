import { get as __get, post as __post } from 'svemix/server';

import fsp from 'fs/promises';

export async function loader(event) {
	return { entries: await fsp.readdir('.') };
}

export const get = __get(loader);
