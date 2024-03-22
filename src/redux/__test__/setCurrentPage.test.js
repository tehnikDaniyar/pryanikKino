import { describe, expect, test } from "vitest";
import filmsInfoReducer, { initialState, setCurrentPage } from "../slices/filmsInfoSlice.js";


describe('setCurrentPage', () => {
	test("test setCurrentPage", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage(5));
		expect(initialState.currentPage).toBe(1);
		expect(state.currentPage).toBe(5);
	});
	test("test input is not a Number", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage("a"));
		expect(state.currentPage).toBe(1);
	});
});