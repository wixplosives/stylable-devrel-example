import type React from 'react';
import type { Item } from '../../data-types/list-view';
import { st, classes } from './list-item.st.css';

export interface ListItemProps extends Item {
    className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ className, title, description }) => {
    return (
        <li className={st(classes.root, className)}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
        </li>
    );
};
