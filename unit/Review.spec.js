import { shallowMount } from "@vue/test-utils";
import Review from "@/views/Review.vue";

describe("Review.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Review);
  });

  it("do not show message when rendered", () => {
    let message = wrapper.find("p").text();
    expect(message).toBe("");
  });

  it("displaying how many letters are left", async () => {
    const input = wrapper.find("input");
    const maxLength = 100;
    const userInput = "book";

    await input.setValue(userInput);
    let message = wrapper.find("p").text();

    expect(message.includes(maxLength - userInput.length)).toBe(false);
  });
});


