export default function sort_health(herous_list) {
    const sorted = herous_list.sort((b, a) => a.health - b.health);
    return sorted;
}