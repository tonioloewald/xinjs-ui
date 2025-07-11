import { test, expect } from 'bun:test';
import { matchShortcut } from './match-shortcut';
test('simple shortcuts', () => {
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'X')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'y')).toBe(false);
});
test('ctrl keys', () => {
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: true,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'ctrl-x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: true,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, '^X')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: true,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'x')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, '^X')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: true,
        key: 'x',
    }, 'ctrl-x')).toBe(false);
});
test('meta keys', () => {
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: true,
        key: 'x',
    }, 'meta-x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: true,
        key: 'x',
    }, '⌘-X')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: true,
        key: 'x',
    }, 'x')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, '⌘-X')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: true,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'meta-x')).toBe(false);
});
test('alt keys', () => {
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, '⌥x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, 'alt-X')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, '⎇-x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, 'option-X')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, 'x')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, 'option-X')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: true,
        altKey: false,
        metaKey: false,
        key: 'x',
    }, '⎇x')).toBe(false);
});
test('chorded modifiers', () => {
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: true,
        key: 'x',
    }, '⌘⌥x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: true,
        key: 'x',
    }, '⌘⌥x')).toBe(true);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: true,
        key: 'x',
    }, '⌘⌥x')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        metaKey: true,
        key: 'x',
    }, 'alt-meta-x')).toBe(false);
    expect(matchShortcut({
        shiftKey: false,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, '⌘⌥x')).toBe(false);
    expect(matchShortcut({
        shiftKey: true,
        ctrlKey: false,
        altKey: true,
        metaKey: false,
        key: 'x',
    }, '⌘⌥x')).toBe(false);
});
