import { Fragment } from "react"
import { Image, LabelDetails, MonsterName, ProgressBar, SectionDivider } from "./MonsterBattleCard.styled"
import { Monster } from "../../models/interfaces/monster.interface"

type MonsterDetailsProps = {
    details: Monster
}

const makeSchema = (label: string, value: number) => ({ label, value })

const monsterDetailsBuilder = ({ hp, defense, attack, speed }: Monster) => [
    makeSchema('HP', hp),
    makeSchema('Attack', attack),
    makeSchema('Defense', defense),
    makeSchema('Speed', speed)
]

export const MonsterDetails = ({ details }: MonsterDetailsProps) => {
    const { imageUrl, name, id } = details
    return <Fragment>
        <Image src={imageUrl} />
        <MonsterName>{name}</MonsterName>
        <SectionDivider />
        {
            monsterDetailsBuilder(details).map(({ label, value }) => <Fragment key={`${id}-${label}:${value}`} >
                <LabelDetails >{label}</LabelDetails>
                <ProgressBar variant="determinate" value={value} />
            </Fragment>)
        }
    </Fragment>
}