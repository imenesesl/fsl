import { useMonsterAPI } from "./useMonsterAPI"

export const useBattleMonstersUIHandler = () => {
    const { callbacks, data } = useMonsterAPI()

    const { current, machine, monsters } = data
    const { onFetchWinnerResult } = callbacks

    const isComputerSelected = Boolean(machine)
    const isPlayerSelected = Boolean(current)
    const battleIsAvailable = isComputerSelected && isPlayerSelected

    const onClick = () => onFetchWinnerResult()

    return {
        battleButtonProps: {
            disabled: !battleIsAvailable,
            onClick
        },
        monstersListProps: {
            monsters,
        }
    }
}