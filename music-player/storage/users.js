import { tracks as allTracks } from "./tracks";
const user1 = {
	id: 1,
	username: "Alisa Yandexeva",
	tracks: allTracks.slice(0, 3),
	friends: [user2, user4],
	ava: "https://yandexalica.ru/wp-content/uploads/2019/02/logo-2-alisa-yandexalica.png",
};

const user2 = {
	id: 2,
	username: "Siri Iosova",
	tracks: allTracks.slice(2, 3),
	friends: [user1, user3, user4],
	ava: "https://miro.medium.com/max/908/1*6XGc6lTW_AdSgOuaI9ZPKg.png",
};
const user3 = {
	id: 3,
	username: "Chrome Windowsov",
	tracks: allTracks.slice(1, 3),
	friends: [user2],
	ava: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png',
};
const user4 = {
	id: 4,
	username: "Linux Ubuntov",
	tracks: allTracks.slice(0, 4),
	friends: [user1, user2],
	ava: "http://pngimg.com/uploads/linux/linux_PNG47.png",
};

export const users = [user1, user2, user3, user4];
