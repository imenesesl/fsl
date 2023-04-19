import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setSelectedMonster, fetchWinnerResult, setMachineMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  winner: Monster | null;
  machineMonster: Monster | null
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  winner: null,
  machineMonster: null
};

export const monstersReducer = createReducer(initialState, (builder) => {
  //fetchMonstersData
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));
  //setMachineMonster
  builder.addCase(setMachineMonster.pending, (state) => ({
    ...state,
    machineMonster: null,
  }));

  builder.addCase(setMachineMonster.rejected, (state) => ({
    ...state,
    machineMonster: null,
  }));

  builder.addCase(setMachineMonster.fulfilled, (state, action) => ({
    ...state,
    machineMonster: action.payload,
  }));
  //fetchWinnerResult
  builder.addCase(fetchWinnerResult.pending, (state) => ({
    ...state,
    winner: null,
  }));

  builder.addCase(fetchWinnerResult.rejected, (state) => ({
    ...state,
    winner: null,
  }));

  builder.addCase(fetchWinnerResult.fulfilled, (state, action) => ({
    ...state,
    winner: action.payload.winner,
  }));
  //setSelectedMonster
  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
    winner: null,
    machineMonster: null
  }));
});
