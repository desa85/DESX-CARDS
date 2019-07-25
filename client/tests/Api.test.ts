import Api from '../src/Api';

var XMLHttpRequest

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  readyState: 4,
  responseText: JSON.stringify(
    [
      { title: 'test post' },
      { tile: 'second test post' }
    ]
  )
};
const oldXMLHttpRequest = XMLHttpRequest;
XMLHttpRequest = jest.fn(() => mockXHR);



test('basic', () => {
  expect(Api.getCards()).toBe(1);
});

test('basic again', () => {
  expect(1).toBe(1);
});