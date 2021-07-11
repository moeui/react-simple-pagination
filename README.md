## Install

    yarn add @moeui/react-simple-pagination // or npm i @moeui/react-simple-pagination -S

## Use

    import Pagination from '@moeui/react-simple-pagination'

    let visible = false

    <Pagination 
        pageSize={2} 
        total={10} 
        onChange={val =>{}} 
        text={(page, allPage)=>`${page}/${allPage}`} // optional
        className="examplePagination"                // optional
        visible={visible}                            // optional
    />
