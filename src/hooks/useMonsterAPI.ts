import { useSelector } from "react-redux"
import { useCallback, useMemo } from "react"
import { useAppDispatch } from "../app/hooks"
import { selectMonsterWinner, selectMonsters, selectSelectedMachineMonster, selectSelectedMonster } from "../reducers/monsters/monsters.selectors"
import { fetchMonstersData, fetchWinnerResult, setMachineMonster, setSelectedMonster } from "../reducers/monsters/monsters.actions"
import { Monster } from "../models/interfaces/monster.interface"

export const useMonsterAPI = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const current = useSelector(selectSelectedMonster)
    const machine = useSelector(selectSelectedMachineMonster)
    const winner = useSelector(selectMonsterWinner)

    const data = useMemo(() => ({ monsters, current, machine, winner }), [monsters, current, machine, winner])

    const onFetchMonstersData = useCallback(() => dispatch(fetchMonstersData()), [dispatch])
    const onSetMachineMonster = useCallback(() => dispatch(setMachineMonster({ current, list: monsters })), [dispatch, current, monsters])
    const onFetchWinnerResult = useCallback(() => dispatch(fetchWinnerResult({ monster1Id: current?.id as string, monster2Id: machine?.id as string })), [dispatch, current, machine])
    const onSetSelectedMonster = useCallback((monster: Monster | null) => dispatch(setSelectedMonster(monster)), [dispatch])

    const callbacks = useMemo(() => ({ onFetchMonstersData, onSetMachineMonster, onFetchWinnerResult, onSetSelectedMonster }), [onFetchMonstersData, onSetMachineMonster, onFetchWinnerResult, onSetSelectedMonster])

    return {
        data,
        callbacks
    }
}