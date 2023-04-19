import { useEffect } from "react"
import { useMonsterAPI } from "./useMonsterAPI"

export const useBattleMonstersAPI = () => {
    const { callbacks, data } = useMonsterAPI()

    const { current, machine, monsters, winner } = data
    const { onFetchMonstersData, onSetMachineMonster } = callbacks

    useEffect(() => {
        onFetchMonstersData()
    }, [onFetchMonstersData])

    useEffect(() => {
        onSetMachineMonster()
    }, [onSetMachineMonster])

    return {
        current,
        machine,
        monsters,
        winner
    }
}