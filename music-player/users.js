import { tracks as allTracks } from "./tracks";
const user1 = {
	id: 1,
	username: "Alisa Yandexeva",
	tracks: allTracks.slice(0, 3),
	friends: [user2, user4],
};

const user2 = {
	id: 2,
	username: "Siri Iosova",
	tracks: allTracks.slice(2, 3),
	friends: [user1, user3, user4],
};
const user3 = {
	id: 3,
	username: "Chrome Windowsov",
	tracks: allTracks.slice(1, 3),
	friends: [user2],
};
const user4 = {
	id: 4,
	username: "Linux Ubuntov",
	tracks: allTracks.slice(0, 4),
	friends: [user1, user2],
};

export const users = [user1, user2, user3, user4];
