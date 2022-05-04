import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { usePosts } from '../components/hooks/UsePosts';
import PostFilter from '../components/PostFilter';
import Pagination from '../components/UI/pagination/Pagination';
import SortTable from '../components/UI/table/SortTable';
import { getPageCount } from '../utils/pages';

const Posts = () => {
    
    const params = useParams()
  const [posts,setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit,setLimit] = useState(10);
  const [filter, setFilter] = useState({ sort: '', query: ''})

  async function fetchPosts(limit, page){
    const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit))
  }

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

   useEffect(() => {fetchPosts(limit, params.page)},[params, limit])  

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page)
  }
    return (
        <div className="App">
            <div style={{ display: 'flex', position: 'absolute',width: '1232px', height: 'auto', left: '148px', top: '186px',boxShadow: '0px 4px 27px rgba(230, 231, 234, 0.78)'}}>
                <div style={{margin: '0 auto'}}>
                    <PostFilter 
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <SortTable 
                        posts={sortedAndSearchedPosts}
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Pagination 
                        page={page} 
                        totalPages={totalPages} 
                        changePage={changePage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Posts;