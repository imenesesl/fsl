import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle } from "./MonsterBattleCard.styled"
import { MonsterDetails } from "./MonsterDetails"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <BattleMonsterCard centralized={!Boolean(monster)}>
            {!monster ? <BattleMonsterTitle>{title!}</BattleMonsterTitle> : <MonsterDetails details={monster} />}
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }