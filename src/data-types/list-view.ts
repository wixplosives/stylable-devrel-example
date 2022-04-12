export interface Item {
    title: string;
    description: string;
}

export interface ListViewSchema {
    title: string;
    subtitle: string;
    items: Array<Item>;
}

export const listViewSampleData: ListViewSchema = {
    title: 'What would you like to pick?',
    subtitle: 'try our finest selection',
    items: [
        {
            title: 'Banana',
            description: 'from the islands of Kululu',
        },
        {
            title: 'Orange',
            description: 'Sweet as hell',
        },
        {
            title: 'Lemon',
            description: 'Yellow out of this world',
        },
        {
            title: 'Banana',
            description: 'from the islands of Kululu',
        },
        {
            title: 'Orange',
            description: 'Sweet as hell',
        },
        {
            title: 'Lemon',
            description: 'Yellow out of this world',
        },
        {
            title: 'Banana',
            description: 'from the islands of Kululu',
        },
        {
            title: 'Orange',
            description: 'Sweet as hell',
        },
        {
            title: 'Lemon',
            description: 'Yellow out of this world',
        },
        {
            title: 'Banana',
            description: 'from the islands of Kululu',
        },
        {
            title: 'Orange',
            description: 'Sweet as hell',
        },
        {
            title: 'Lemon',
            description: 'Yellow out of this world',
        },
    ],
};
