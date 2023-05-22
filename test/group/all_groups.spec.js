const { describe, it, expect } = require("@jest/globals");
const { transformGroup } = require("../../src/group/all_groups");
const mockData = require("../mock_data/all_groups_mock.json");

describe("Full output conversion", () => {
  it("Smoke test", () => {
    const result = transformGroup(mockData[0]);
    expect(result).toEqual({
      communication_language_mode: "RU",
      coordinators: "Захар Гайворонський",
      friday: "07:11:26",
      id: 29,
      is_staff_only: "Да",
      language_and_level: "Spanish A2",
      lesson_duration_mins: 30,
      monday: "10:55:23",
      saturday: "18:39:48",
      status: "Занимается",
      student_count: 5,
      sunday: null,
      teachers: "Амалія Радченко<br>Емілія Гавришкевич",
      telegram_chat_url: "http://www.zaiets.info/",
      thursday: null,
      tuesday: null,
      wednesday: null,
    });
  });
});
