import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;


export const selectSelectedMachineMonster = (state: RootState) =>
  state.monsters.machineMonster;

export const selectMonsterWinner = (state: RootState) =>
  state.monsters.winner;
