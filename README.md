## Install

    yarn add @moeui/react-simple-pagination // or npm i @moeui/react-simple-pagination -S

## Use

    import Pagination from '@moeui/react-simple-pagination'

    <Pagination 
        pageSize={10} 
        total={100} 
        onChange={page => {
            console.log(page)
        }}
     />
