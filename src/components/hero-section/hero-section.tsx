import type React from 'react';
import type { HeroSectionSchema } from '../../data-types/hero-section';
import { st, classes } from './hero-section.st.css';

export interface HeroSectionProps extends HeroSectionSchema {
    className?: string;
}

export const HeroSection: React.VFC<HeroSectionProps> = ({
    className,
    callToAction,
    description,
    subtitle,
    title,
}) => {
    return (
        <section className={st(classes.root, className)}>
            <div className={classes.content}>
                <h1 className={classes.title}>{title}</h1>
                <h3 className={classes.subtitle}>{subtitle}</h3>
                <p className={classes.description}>{description}</p>
                <button className={classes.callToAction}>{callToAction}</button>
            </div>
        </section>
    );
};
