import { describe, expect, test } from "vitest";
import filmsInfoReducer, { initialState } from "../slices/filmsInfoSlice.js";


describe('initial state', () => {
	test("test initial state", () => {
		const state = filmsInfoReducer(undefined, { type: "unknown" });
		expect(state).toEqual(initialState);
	})
});


