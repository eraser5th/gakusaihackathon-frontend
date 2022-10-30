import { wrappedResult, wrapPromise } from "./lib";

const baseUrl = "http://localhost:3000"

type Schedule = {
	time: number;
	subjectName: string;
}

type HomePageApi = {
	newInfo: string;
	user: {
		name: string;
	};
	todaySchedule: Schedule[]
}

export const fetchHomePage= (): Promise<HomePageApi> => fetch(`${baseUrl}/home`).then(response => response.json())
