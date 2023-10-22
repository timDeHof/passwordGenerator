import { copyToClipboard } from "./clipboardUtils";

describe("copyToClipboard", () => {
  beforeEach(() => {
    // Clear all instances and calls to the mock function before each test
    navigator.clipboard.writeText.mockClear();
  });

  test("should copy text to clipboard", async () => {
    const text = "sample text";
    await copyToClipboard(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });
});
