import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const fetchWinnerResult = createAsyncThunk<{ winner: Monster, tie: boolean }, { monster1Id: string, monster2Id: string }>(
  'monsters/fetchWinnerResult',
  ({ monster1Id, monster2Id }) => MonsterService.getWinner(monster1Id, monster2Id),
);


export const setMachineMonster = createAsyncThunk<Monster | null, { list: Monster[], current: Monster | null }>(
  'monsters/setMachineMonster',
  ({ current, list }) => MonsterService.getMachineMonster(list, current),
);
