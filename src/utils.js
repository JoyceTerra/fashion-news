import Slugify from 'slugify'

export function slugify(title,id) {
	return Slugify(title)+"-"+String(id);
}
export function getId(url) {
	return url.match(/\d*\d$/)[0];
}
