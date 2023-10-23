import axiosClient from "./axios-client";
import { formatNewsTitle } from "../utils/helper";
import { TNews } from "../components/NewsGroup/types";
import { TPost } from "../pages/posts/[id]";

const ACCESS_TOKEN = process.env["FB_PAGE_ACCESS_TOKEN"];
const PAGE_ID = process.env["FB_PAGE_ID"]

export const getPageNews = async (): Promise<TNews[]> => {
  const queryURL = `https://graph.facebook.com/v16.0/${PAGE_ID}/feed?fields=attachments%2Cmessage&access_token=${ACCESS_TOKEN}&limit=15`;

  const response = (
    await axiosClient.get(queryURL)
  ).data;

  const result = response.data
    .filter((data: any) => data.message && data.attachments)
    .map((data: any) => {
      return {
        id: data.id,
        title: formatNewsTitle(data.message),
        imgUrl: data.attachments?.data[0]?.media?.image?.src,
      };
    });

  return result
}

export const getPostById = async (id: any): Promise<TPost> => {
  const queryURL = `https://graph.facebook.com/v16.0/${id}?fields=attachments%2Cmessage%2Ccreated_time&access_token=${ACCESS_TOKEN}`

  const response = (
    await axiosClient.get(queryURL)
  ).data;

  return {
    id: response.id,
    message: response.message,
    imgUrl: response.attachments?.data[0]?.media?.image?.src,
    createdTime: response.created_time
  }
}

