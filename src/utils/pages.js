export const getPageCount = (totalCount,limit)=>{
    return Math.ceil(totalCount/limit)

}

//need to create hook pagePagination
export const getPagesArray =(totalPages)=>{
    let result =[]
    //useMemo rerender only if totalPages changed!!!!!!!
    for (let i = 0; i < totalPages; i++) {
      result.push(i+1);
    }
  return result;
}