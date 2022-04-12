import type React from 'react';

import { HeroSection } from './components/hero-section/hero-section';
import { heroSectionSampleData } from './data-types/hero-section';

import { List } from './components/list/list';
import { listViewSampleData } from './data-types/list-view';

import { st, classes } from './app.st.css';

export interface AppProps {
    className?: string;
}

export const App: React.VFC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <HeroSection className={classes.heroSimple} {...heroSectionSampleData} />
            <HeroSection className={classes.heroFire} {...heroSectionSampleData} />
            <List className={classes.list} {...listViewSampleData} />
        </main>
    );
};
