import { shallowMount } from "@vue/test-utils";
import Event from "@/components/Event.vue";

describe("Event.vue", () => {
  test("events are being showed", () => {
    const wrapper = shallowMount(Event);
    expect(wrapper).toMatchSnapshot();

    //events amount to be 3

    expect(wrapper);
  });
});
