import { ActionTypes } from "./ActionTypes";
import { tracks } from "../storage/tracks";
import { users } from "../storage/users";
import { notifications } from "../storage/notifications";

export const loadTracks  = () => ({
    type: ActionTypes.LOAD_TRACK,
    payload: {
        dataType: "tracks",
        data: tracks
    }
});

export const loadFriends = () => ({
    type: ActionTypes.LOAD_FRIEND,
    payload: {
        dataType: "friends",
        data: users
    }
});

export const loadNotifications = () => ({
    type: ActionTypes.LOAD_NOTIFICATION,
    payload: {
        dataType: "notifications",
        data: notifications
    }
});

export const addTrack = (track) => ({
    type: ActionTypes.ADD_TRACK,
    payload: {
        track
    }
});

export const addFriend = friend => ({
    type: ActionTypes.ADD_FRIEND,
    payload: {
        friend
    }
});

export const removeTrack = track => ({
    type: ActionTypes.REMOVE_TRACK,
    payload: {
        track
    }
});

export const removeFriend = friend => ({
    type: ActionTypes.REMOVE_FRIEND,
    payload: {
        friend
    }
});

export const readNotification = notification => ({
    type: ActionTypes.READ_NOTIFICATION,
    payload: {
        notification
    }
});

