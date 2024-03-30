import { describe, expect, test } from "vitest";
import filmsInfoReducer, { initialState, setCurrentPage } from "../slices/filmsInfoSlice.js";


describe('setCurrentPage', () => {
	test("test setCurrentPage", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage(5));
		expect(initialState.currentPage).toBe(1);
		expect(state.currentPage).toBe(5);
	});

	describe.each([
		{ input: NaN },
		{ input: { test: 'test' } },
		{ input: ["test", 1, 2, 3] },
		{ input: true },
		{ input: false }
	])("currentPage is not a Number", ({ input }) => {
		test(`${typeof input !== 'number' ? typeof input : 'NaN'}`, () => {
			const state = filmsInfoReducer(initialState, setCurrentPage(input));
			expect(state.currentPage).toBe(1);
		});
	})

	test("test currentPage less than zero", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage(-5));
		expect(state.currentPage).toBe(1);
	});

	test("test currentPage equal zero", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage(0));
		expect(state.currentPage).toBe(1);
	});


	test("test currentPage not a integer", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage(10.54));
		expect(state.currentPage).toBe(10);
	});
	test("test currentPage is empty string", () => {
		const state = filmsInfoReducer(initialState, setCurrentPage(""));
		expect(state.currentPage).toBe(1);
	});
});