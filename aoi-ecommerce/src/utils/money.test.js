import { it, expect, describe} from 'vitest'
import { formatMoney } from './money'

describe('Describe Money', () => {
    it('Format priceCents into Dollars', () => {
        expect(formatMoney(1099)).toBe('$10.99')
    });

    it('Test dollar format to always include two decimals', () => {
        expect(formatMoney(1090)).toBe('$10.90')
        expect(formatMoney(100)).toBe('$1.00')
        expect(formatMoney(99)).toBe('$0.99')
        expect(formatMoney(50)).toBe('$0.50')
    })
});