import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPagesArray} from '../../../utils/pages'
import classes from './Pagination.module.css'

const Pagination = ({page,totalPages, changePage}) => {
    const navigate = useNavigate('')
    let pagesArray = getPagesArray(totalPages);

    const nextpage =  () => {
        if(page !== totalPages){
            navigate(`/posts/${ page + 1}`);
            changePage(page+1)
        }
    }

    const prevpage = () => {
        if(page !== 1){
            navigate(`/posts/${ page - 1}`);
            changePage(page-1)
        }
    }

    return (
        <div className={classes.MyPagination}>

            <a 
            className={classes.page__link}
            style={{marginLeft: '41px',cursor: 'pointer'}}
            onClick={prevpage}>
                Назад
            </a>

            <div className={classes.page__wrapper}>
                {pagesArray.map(p => 
                    <span 
                    onClick={ () => {navigate(`/posts/${p}`);changePage(p)} }
                    key={p} 
                    className={page === p ? classes.page__current : classes.page}
                    >
                        {p}
                    </span>)
                }
            </div>

            <a 
            className={classes.page__link} 
            style={{marginRight: '25px', cursor: 'pointer'}}
            onClick={nextpage}>
                Дальше
            </a>

        </div>
    );
};

export default Pagination;