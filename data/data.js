const Data = [
  {
    id: 1,
    location: "Stockholm",

    date: "5/10",
  },
  {
    id: 2,
    location: "Milano",

    date: "20/10",
  },
  {
    id: 3,
    location: "London",

    date: "18/11",
  },
];

function getLocation() {
  const LS_KEY = "viewlist-location";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data));
    fromLs = localStorage.getItem(LS_KEY);
  }

  return JSON.parse(fromLs);
}

export { getLocation };
