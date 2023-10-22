if (typeof global.navigator === "undefined") {
  global.navigator = {};
}

global.navigator.clipboard = {
  writeText: jest.fn(),
};
