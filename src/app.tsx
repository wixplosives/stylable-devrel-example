import type React from 'react';
import { HeroSection } from './components/hero-section/hero-section';
import { heroSectionSampleData } from './data-types/hero-section';
import { st, classes } from './app.st.css';

export interface AppProps {
    className?: string;
}

export const App: React.VFC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <HeroSection className={classes['hero-simple']} {...heroSectionSampleData} />
            <HeroSection className={classes['hero-fire']} {...heroSectionSampleData} />
        </main>
    );
};
