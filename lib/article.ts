import axios from "axios";

export type ArticleIndex = Array<{
  title: string;
  created_at: string;
  id: string;
  tags: Array<{ name: string }>;
  user: {
    name: string;
    id: string;
    profile_image_url: string;
  };
}>;

export type ArticleDetail = {
  title: string;
  created_at: string;
  updated_at: string;
  url: string;
  user: {
    name: string;
    id: string;
    profile_image_url: string;
  };
  rendered_body: string;
  tags: Array<{ name: string }>;
};

export const dummyQuery = Symbol("DUMMY_QUERY");

export async function getArticleIndex(
  token: string,
  query: string | typeof dummyQuery,
): Promise<ArticleIndex> {
  if (query !== dummyQuery) {
    const params = new URLSearchParams({
      query: query,
      per_page: "20",
      page: "1",
    }).toString();

    return await axios
      .get<ArticleIndex>(`https://qiita.com/api/v2/items?${params}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  // TODO: impl data fetch
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return [
    {
      title: "title1" + token,
      created_at: "2023-01-23T12:34:56+09:00",
      id: "c686397e4a0f4f11683a",
      tags: [{ name: "tag1" }, { name: "tag2" }],
      user: {
        name: "user1",
        id: "user1",
        profile_image_url: "https://picsum.photos/id/237/200/200",
      },
    },
    {
      title: "title2" + token,
      created_at: "2023-01-24T12:34:56+09:00",
      id: "c686397e4a0f4f11683b",
      tags: [{ name: "tag1" }, { name: "tag3" }],
      user: {
        name: "user2",
        id: "user2",
        profile_image_url: "https://picsum.photos/seed/picsum/200/200",
      },
    },
    {
      title: "title3" + token,
      created_at: "2023-01-25T12:34:56+09:00",
      id: "c686397e4a0f4f11683c",
      tags: [{ name: "tag1" }, { name: "tag4" }],
      user: {
        name: "user3",
        id: "user3",
        profile_image_url: "https://picsum.photos/200/200",
      },
    },
  ];
}

export const dummyId = Symbol("DUMMY_ID");

export async function getArticleDetail(
  token: string,
  id: string | typeof dummyId,
): Promise<ArticleDetail> {
  if (id !== dummyId) {
    return await axios
      .get<ArticleDetail>(`https://qiita.com/api/v2/items/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }

  // TODO: impl data fetch
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    title: "title1" + token,
    created_at: "2021-08-01T00:00:00.000Z",
    updated_at: "2021-08-01T00:00:00.000Z",
    url: "https://example.com",
    user: {
      name: "user1",
      id: "user1",
      profile_image_url: "https://picsum.photos/id/237/200/200",
    },
    rendered_body: "<h1>title1</h1>\n<p>body1</p>",
    tags: [{ name: "tag1" }, { name: "tag2" }],
  };
}
