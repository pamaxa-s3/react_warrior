import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import style from './MovieTabs.module.scss';

class MovieTabs extends React.Component {

    shouldComponentUpdate( nextProps, nextState ) {
        if ( nextProps.sort_by !== this.props.sort_by ) {
            return true;
        } return false;
    }

    render() {

        const { sort_by, updateSortBy } = this.props;
        const handleClick = value => () => {
            updateSortBy(value)
        }
        const getClassNameLink = value => {
            return (
                `${style.link} ${sort_by === value ? 'active' : ''}`
            )
        }

        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink className={getClassNameLink('popularity.desc')}
                            onClick={
                                handleClick('popularity.desc')
                            }
                            href="#">Popularity desc</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={getClassNameLink('revenue.desc')}
                            onClick={
                                handleClick('revenue.desc')
                            }
                            href="#">Revenue desc</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={getClassNameLink('vote_average.desc')}
                            onClick={
                                handleClick('vote_average.desc')
                            }
                            href="#">Vote average desc</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }




}

export default MovieTabs;