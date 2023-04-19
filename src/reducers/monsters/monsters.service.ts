import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getWinner = async (monster1Id: string, monster2Id: string): Promise<{ winner: Monster, tie: boolean }> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST', body: JSON.stringify({ monster1Id, monster2Id }), headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());

const getMachineMonster = async (monsters: Monster[], current: Monster | null) => new Promise<Monster | null>((res, rej) => {
  if (monsters.length > 0 && Boolean(current)) {
    const filter = monsters.filter((monster) => monster.id !== current?.id)
    const random = Math.floor(Math.random() * filter.length)
    const monster = filter[random]
    res(monster)
  } else {
    res(null)
  }
})


export const MonsterService = {
  getAll,
  getWinner,
  getMachineMonster
};
