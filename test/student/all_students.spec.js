const { describe, it, expect } = require("@jest/globals");
const { transformStudent } = require("../../src/student/all_students");

const mockData = require("../mock_data/all_students_mock.json");

describe("Full output conversion", () => {
  it("Smoke test", () => {
    const result = transformStudent(mockData[0]);
    expect(result).toEqual({
      age_range: "5-6",
      availability_slots: {
        0: "08 - 11",
        1: "05 - 08<br>17 - 21",
        2: "14 - 17<br>17 - 21",
        3: "11 - 14",
        4: "05 - 08<br>14 - 17<br>17 - 21",
        5: "05 - 08",
        6: "11 - 14",
      },
      comment:
        "Around again hold. Once mention north. Child should so political remain. Of sort live enjoy special rather world.",
      communication_language_mode: "RU/UA",
      id: 1,
      languages_and_levels: "Polish A1<br>Czech C1",
      name: "Jesse Mccormick",
      speaking_club_status: "Посещает",
      status: "Не посещает уроки",
      utc_timedelta: "UTC-03:00",
    });
  });
});
