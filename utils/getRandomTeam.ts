const splitter = (str: string, separator: string) => str.split(separator);
const generateRandomKey = () => {
  const key = Math.random() * 1000;
  return Math.round(key * 100) / 100;
};

/* -------------------------------------------------------------------------- */
export type TeamType = {
  teamName: string;
  members: {
    name: string;
    key: number;
  }[];
};

type Params = {
  members: string;
  /** 한 팀당 인원 */
  teamMemberNumber: number;
  isFair?: boolean;
};

const getRandomTeam = ({ members, teamMemberNumber, isFair }: Params) => {
  // 쉼표를 기준으로 split
  const memberList = splitter(members, ',');

  // 각 멤버에게 random key 부여
  const membersWithKey = memberList.map((member) => ({ name: member.trim(), key: generateRandomKey() }));

  // key 값을 기준으로 정렬
  membersWithKey.sort((a, b) => a.key - b.key);

  const totalTeam = Math.ceil(memberList.length / teamMemberNumber);
  let teamList = new Array(totalTeam).fill(0).map((_, idx) => membersWithKey.slice(idx * teamMemberNumber, ((idx + 1) * teamMemberNumber)));

  if (isFair && teamList.length > 1) {
    const lastIndex = teamList.length - 1;
    let pointer = lastIndex - 1;

    /** '균등'한 상태의 기준: 마지막 팀의 인원 수와 동일한 인원 수를 가진 팀이 존재하는 상태 -> hasSameLength */
    const hasSameLength = () => teamList.some((v, i) => {
      if (i === lastIndex) {
        return false;
      }
      return v.length === teamList[lastIndex].length;
    });

    while (!hasSameLength()) {
      const elem = teamList[pointer].pop();

      if (elem) {
        teamList[lastIndex].push(elem);
      }
      else {
        break;
      }

      pointer = pointer === 0 ? lastIndex - 1 : pointer - 1;
    }
  }

  const randomTeam: Array<TeamType> = teamList.map((team, idx) => ({
    teamName: `${idx + 1}팀`,
    members: team,
  }));

  return randomTeam;
};

export default getRandomTeam;

/** test cases */
// 총 8명, 한 팀 당 7명
// 총 13명, 한 팀 당 4명
// 총 14명, 한 팀 당 4명