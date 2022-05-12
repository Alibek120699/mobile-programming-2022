import React, { Component } from "react";
import {
	ActionTypes
} from "../actions/ActionTypes";
import { users } from "../storage/users";
import { tracks } from "../storage/tracks";
import { notifications } from "../storage/notifications";



const initialState = {
	friends: users.slice(0, 3),
	tracks: tracks.slice(3, 8),
	notifications,
}

export default function PlayerReducer(storeData = initialState, action) {
	switch(action.type){
		case ActionTypes.LOAD_TRACK:
			return {...storeData, [action.payload.dataType]: action.payload.data}
		case ActionTypes.LOAD_FRIEND:
			return {...storeData, friends: action.payload.data}
		case ActionTypes.LOAD_NOTIFICATION:
			return {...storeData, notification: action.payload.data}
		case ActionTypes.ADD_FRIEND:
			const isExisting = storeData.friends.find(f => f.id === action.payload.friend.id)
			if(!isExisting)
				return {...storeData, friends: [...storeData.friends, action.payload.friend]}
			return storeData
		case ActionTypes.ADD_TRACK:
			const existing = storeData.tracks.find(t => t.id === action.payload.track.id)
			if(!existing)
				return {...storeData, tracks: [...storeData.tracks, action.payload.track]}
			return storeData
		case ActionTypes.REMOVE_FRIEND:
			return {...storeData, friends: storeData.friends.filter(f => 
				f.id !== action.payload.friend.id)}
		case ActionTypes.REMOVE_TRACK:
			return {...storeData, tracks: storeData.tracks.filter(t =>
				t.id !== action.payload.track.id)}
		case ActionTypes.READ_NOTIFICATION:
			return {...storeData, notifications: storeData.notifications.filter(n =>
				n.id !== action.payload.notification.id)}
		default:
			return storeData || {}
	}
}
