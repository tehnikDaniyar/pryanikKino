import { expect, describe, test, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NumberInput from "../../src/components/NumberInput/NumberInput";

describe('тестирование NumberInput', () => {



	describe('тестирование базовых функций', () => {
		const inputTestId = 'feofmrepvm909';
		const state = '';
		const hundler = vi.fn();
		let input;

		beforeEach(() => {
			render(<NumberInput data-testid={inputTestId} state={state} hundler={hundler} />);
			input = screen.getByTestId(inputTestId);
		});

		test('тест базовое знчение инпута', () => {
			expect(input.value).toBe(state)
		})


	})
})
