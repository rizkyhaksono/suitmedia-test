export const generateParamFilter = (queryParam) => {
  let result = "";
  if (queryParam) {
    const param = [
      ...(queryParam.pageSize ? [`${queryParam.pageSize ? `page[size]=${queryParam.pageSize}` : 10}`] : []),
      ...(queryParam.page ? [`${queryParam.page ? `page[number]=${queryParam.page}` : 1}`] : []),
      ...(queryParam.append ? [`${queryParam.append ? `append[]=${queryParam.append}` : "small_image"}`] : []),
      ...(queryParam.sort ? [`${queryParam.sort ? `sort=${queryParam.sort}` : "published_at"}`] : []),
    ];
    result = param.join("&");
  }
  return result;
};
