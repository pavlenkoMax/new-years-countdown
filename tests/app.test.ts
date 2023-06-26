import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";
import CountdownSegment from "../src/components/CountdownSegment.vue";
import { mount } from "@vue/test-utils";

let wrapper = null;
beforeEach(() => {
  vi.setSystemTime(new Date(`12/20/${new Date().getFullYear()} 12:30:25`));
  wrapper = shallowMount(App);
});

describe("App", () => {
  it("calculates the correct days", () => {
    const el = wrapper.getComponent('[data-test="days"]');
    expect(el.props().number).toBe(11);
  });

  it("calculates the correct hours", () => {
    const el = wrapper.getComponent('[data-test="hours"]');
    expect(el.props().number).toBe(11);
  });
  it("calculates the correct minutes", () => {
    const el = wrapper.getComponent('[data-test="minutes"]');
    expect(el.props().number).toBe(29);
  });
  it("calculates the correct seconds", () => {
    const el = wrapper.getComponent('[data-test="seconds"]');
    expect(el.props().number).toBe(35);
  });
});

describe("CountdownSegment", () => {
  it("takes a number prop", () => {
    const cs = mount(CountdownSegment, {
      props: {
        number: 2,
      },
    });
    expect(cs.props().number).toBe(2);
  });
});
