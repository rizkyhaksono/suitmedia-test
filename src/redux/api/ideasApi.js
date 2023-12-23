import { generateParamFilter } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const ideasApi = baseApi.enhanceEndpoints({ addTagTypes: ["ideasTag"] }).injectEndpoints({
  endpoints(builder) {
    return {
      getIdea: builder.query({
        query: ({ arg }) => ({
          url: `/ideas?${generateParamFilter(arg)}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useGetIdeaQuery } = ideasApi;
