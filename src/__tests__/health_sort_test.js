import sort_health from "../sort_health";

test('test sort herous', () => {
    const herous_list = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const expected_list = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    const result = sort_health(herous_list);
    expect(result).toEqual(expected_list);
});
