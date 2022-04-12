import type React from 'react';
import { ListItem } from './list-item';
import type { ListViewSchema } from '../../data-types/list-view';
import { st, classes } from './list.st.css';

export interface ListProps extends ListViewSchema {
    className?: string;
}

export const List: React.VFC<ListProps> = ({ className, subtitle, title, items }) => {
    return (
        <section className={st(classes.root, className)}>
            <h2 className={classes.title}>{title}</h2>
            <h2 className={classes.subtitle}>{subtitle}</h2>
            <ul className={classes.list}>
                {items.map((item) => (
                    <ListItem
                        className={classes.item}
                        key={item.title + item.description}
                        {...item}
                    />
                ))}
            </ul>
        </section>
    );
};
