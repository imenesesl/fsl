import { Fragment } from "react"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"

import { Title } from "../../components/title/Title"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { useBattleMonstersUIHandler } from "../../hooks/useBattleMonstersUIHandler"
import { useBattleMonstersAPI } from "../../hooks/useBattleMonstersAPI"

const BattleOfMonsters = () => {

    const { battleButtonProps, monstersListProps } = useBattleMonstersUIHandler()
    const { current, machine, winner } = useBattleMonstersAPI()

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>
            <MonstersList {...monstersListProps} />
            {winner ? <WinnerDisplay text={winner.name} /> : <Fragment />}
            <BattleSection>
                <MonsterBattleCard monster={current} title={"Player"}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button" {...battleButtonProps}>Start Battle</StartBattleButton>
                <MonsterBattleCard monster={machine} title="Computer"></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }