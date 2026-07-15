const FILE_MAP = {
  tourist: "/data/서울_관광지.json",
  culture: "/data/서울_문화시설.json",
  festival: "/data/서울_축제공연행사.json",
  shopping: "/data/서울_쇼핑.json",
  hotel: "/data/서울_숙박.json",
  course: "/data/서울_여행코스.json",
  leports: "/data/서울_레포츠.json",
};

export async function getPlaces(category = "tourist") {
  const response = await fetch(FILE_MAP[category]);

  if (!response.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }

  const json = await response.json();

  return json.items;
}