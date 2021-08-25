import {useMemo} from "react"
export const useSortedProduct=(product,sort)=>{
    const sortedProduct= useMemo(()=>{
        console.log('get sorted Product finish')
    
        if(sort){
          return [...product].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }else{
          return product
        }
      },[sort,product])
    return sortedProduct;
}

export const useProducts=(product,sort,query)=>{
    const sortedProduct=useSortedProduct(product,sort);

    const sortedAndSearchedProduct= useMemo(()=>{
        return sortedProduct.filter(product=>product.title.toLowerCase().includes(query.toLowerCase()))
      },[query,sortedProduct]);
    return sortedAndSearchedProduct;
}