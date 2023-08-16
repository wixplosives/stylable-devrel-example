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
            title: 'Apple',
            description: 'Red as blood',
        },
        {
            title: 'Pineapple',
            description: 'Fresh and tasty',
        },
        {
            title: 'Kiwi',
            description: 'Green as the grass',
        },
        {
            title: 'Mango',
            description: 'Juicy and delicious',
        },
        {
            title: 'Strawberry',
            description: 'Sweet and sour',
        },
        {
            title: 'Watermelon',
            description: 'The king of fruits',
        },
        {
            title: 'Peach',
            description: 'A gift from the gods',
        },
        {
            title: 'Pear',
            description: 'A classic',
        },
        {
            title: 'Grape',
            description: 'The best wine',
        },
    ],
};
