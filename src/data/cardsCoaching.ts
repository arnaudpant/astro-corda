export type CardCoachingInfos = {
    imagePath: string,
    altText: string,
    title: string,
    intro: string,
    liArr: string[],
    link: string
}

export const CardsCoaching: CardCoachingInfos[] = [
    {
        imagePath: '/src/assets/coaching/card-nutrition.jpg',
        altText: 'coaching nutrition',
        title: 'NUTRITION',
        intro: 'Vous voulez:',
        liArr: ['▸ Perdre du poids ou en reprendre', '▸ Rééquilibrer votre flore intestinale', '▸ Retrouver la santé'],
        link: "/coaching-nutrition"
    },
    {
        imagePath: '/src/assets/coaching/card-stress.jpg',
        altText: 'coaching gestion des stress',
        title: 'GESTION des STRESS et des EMOTIONS',
        intro: 'Vous souffrez de:',
        liArr: ['▸ Anxiétés, angoisses, insomnies', '▸ Migraines, acouphènes', '▸ Ulcère, contractures, spasmophilie...'],
        link: "/coaching-gestion-stress"
    },
    {
        imagePath: '/src/assets/coaching/card-sport.jpg',
        altText: 'coaching sport',
        title: 'SPORT SANTÉ',
        intro: 'Vous sortez:',
        liArr: ['▸ D\’une longue période sans activité physique', '▸ D\'une opération', '▸ D\'un burn-out, maladie, autre ...'],
        link: "/coaching-sport"
    },
]