import { expect, describe, test, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NumberInput from "../../src/components/NumberInput/NumberInput";
import userEvent from "@testing-library/user-event";


describe('тестирование NumberInput', () => {

	describe('тестирование базовых функций', () => {
		const inputTestId = 'feofmrepvm909';
		const state = '';
		const hundler = vi.fn();
		const onHoverInput = vi.fn();
		const onBlurInput = vi.fn();
		let input;

		beforeEach(() => {
			render(<NumberInput
				data-testid={inputTestId}
				state={state}
				hundler={hundler}
				onMouseEnter={onHoverInput}
				onMouseLeave={onBlurInput}
			/>);
			input = screen.getByTestId(inputTestId);
		});

		test('тест базовое знчение инпута', () => {
			expect(input.value).toBe(state);
		});

		test('Ввод данных в input', async () => {
			await userEvent.type(input, '34');
			expect(hundler).toBeCalledWith('3');
			expect(hundler).toBeCalledWith('4');
		});

		test('check html tagname for NumberInput', () => {
			expect(input.tagName).toBe('INPUT');
		});

		test('check hover on NumberInput', async () => {
			await userEvent.hover(input);
			expect(onHoverInput).toBeCalled();
			expect(onBlurInput).not.toBeCalled();
		});

		test('check blur on NumberInput', async () => {
			await userEvent.unhover(input);
			expect(onHoverInput).toBeCalled();
			expect(onBlurInput).toBeCalled();
		});

	});
});
