type HeadTitle = {
    title: string;
    description: string;
}

type LinkNav = {
    text: string;
    url: string
}

export const baseData: HeadTitle = {
    title: "Naturopathe sophrologue coach sportif 26300 Marches",
    description: "Retrouvez votre poids de forme, gérez vos stress et retrouvez une activité physique avec Joelle Corda, naturopathe, sophrologue. 26300 Marches"
}

export const linksData: LinkNav[] = [
    {
        text: "Accueil",
        url: "/"
    },
    {
        text: "Naturopathie",
        url: "/role-naturopathie"
    },
    {
        text: "Tarifs",
        url: "/tarifs"
    },
    {
        text: "A propos",
        url: "/about"
    },
    {
        text: "Relaxations guidées",
        url: "/audios"
    },
    {
        text: "Ateliers",
        url: "/ateliers"
    },
]