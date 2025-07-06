export const categories = [
  {
    label: "자전거",
    value: "bike",
    children: [
      { label: "프레임", value: "frame" },
      { label: "완성차", value: "complete" },
    ],
  },
  {
    label: "휠셋",
    value: "wheelset",
    children: [
      {
        label: "로드",
        value: "road",
        children: [
          { label: "클린처", value: "clincher" },
          { label: "튜블러", value: "tubular" },
          { label: "튜블리스 레디", value: "tubeless_ready" },
        ],
      },
      { label: "TT/트라이애슬론", value: "tt_tri" },
      { label: "MTB", value: "mtb" },
      { label: "픽시", value: "fixie" },
    ],
  },
  {
    label: "컴포넌트",
    value: "components",
    children: [
      {
        label: "구동계",
        value: "drivetrain",
        children: [
          { label: "그룹셋", value: "groupset" },
          { label: "크랭크", value: "crank" },
          { label: "체인링 (티 수 입력 필요)", value: "chainring" },
          { label: "스프라켓 (티 수 입력 필요)", value: "sprocket" },
          { label: "체인", value: "chain" },
          { label: "디레일러 (앞/뒤)", value: "derailleur" },
          { label: "레버 / 브레이크", value: "lever_brake" },
        ],
      },
      {
        label: "구동계 외",
        value: "non_drivetrain",
        children: [
          { label: "핸들바 / 스템 / 싯포스트", value: "cockpit" },
          { label: "안장", value: "saddle" },
          { label: "페달", value: "pedal" },
          { label: "파워미터", value: "powermeter" },
          { label: "기타", value: "etc_components" },
        ],
      },
    ],
  },
  {
    label: "용품 & 의류",
    value: "gear_apparel",
    children: [
      { label: "헬멧", value: "helmet" },
      { label: "고글", value: "goggle" },
      { label: "슈즈", value: "shoes" },
      { label: "져지 / 빕숏", value: "jersey_bibshort" },
      { label: "베이스레이어 / 방풍자켓 / 방한용품", value: "layer_jacket_winter" },
      { label: "장갑 / 양말", value: "glove_socks" },
      { label: "속도계 / 센서 / 가민류", value: "computer_sensor" },
      { label: "라이트 / 가방 / 거치대", value: "light_bag_mount" },
      { label: "롤러 / 트레이너", value: "trainer" },
      { label: "보관 / 청소용품", value: "storage_cleaning" },
    ],
  },
  {
    label: "기타",
    value: "etc",
    children: [
      { label: "대회 등록권", value: "race_ticket" },
      { label: "자전거 보험", value: "insurance" },
      { label: "기타 잡화", value: "misc" },
    ],
  },
];
