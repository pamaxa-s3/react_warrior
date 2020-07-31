import React from 'react';
import style from './Paginataon.module.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginataon extends React.Component {

    render() {
        const { page, updateCurrentPage } = this.props;
        const handleClick = value => () => {
            updateCurrentPage(value)
        }
        const getClassNamePaginationLink = () => {
            return (
                `${page < 1 ? 'style.dn' : ''}`
            )
        }

        return (
            <div>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled onClick={handleClick(1)}>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem disabled onClick={handleClick(page - 1)}>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem className={getClassNamePaginationLink()} onClick={handleClick(page - 1)}>
                        <PaginationLink href="#">
                            {page - 2}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={handleClick(page - 1)}>
                        <PaginationLink href="#">
                            {page - 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active onClick={handleClick(page)}>
                        <PaginationLink href="#">
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={handleClick(page + 1)}>
                        <PaginationLink href="#">
                            {page + 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={handleClick(page + 1)}>
                        <PaginationLink href="#">
                            {page + 2}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={handleClick(page + 1)}>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem onClick={handleClick(500)}>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}

export default Paginataon;