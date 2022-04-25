const splitter = (str: string, separator: string) => str.split(separator);
const generateRandomKey = () => {
  const key = Math.random() * 1000;
  return Math.round(key * 100) / 100;
};

/* -------------------------------------------------------------------------- */
type Params = {
  members: string;
  /** 한 팀당 인원 */
  teamMemberNumber: number;
};

const getRandomTeam = ({ members, teamMemberNumber }: Params) => {
  // 쉼표를 기준으로 split
  const memberList = splitter(members, ',');

  // 각 멤버에게 random key 부여
  const membersWithKey = memberList.map((member) => ({ name: member, key: generateRandomKey() }));

  // key 값을 기준으로 정렬
  membersWithKey.sort((a, b) => a.key - b.key);

  const totalTeam = Math.ceil(memberList.length / teamMemberNumber);

  const randomTeam = new Array(totalTeam).fill(0).map((_, idx) => ({
    teamName: `${idx + 1}팀`,
    members: membersWithKey.slice(idx * totalTeam, ((idx + 1) * totalTeam)),
  }));

  return randomTeam;
};

export default getRandomTeam;