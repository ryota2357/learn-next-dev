// import axios from "axios"

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

export async function getArticleIndex(
  token: string,
  query: string,
): Promise<ArticleIndex> {
  console.log(`getArticleIndex: token = ${token}`);

  // TODO: impl data fetch
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return [
    {
      title: "title1" + query,
      created_at: "2023-01-23T45:67:89+09:00",
      id: "c686397e4a0f4f11683a",
      tags: [{ name: "tag1" }, { name: "tag2" }],
      user: {
        name: "user1",
        id: "user1",
        profile_image_url: "https://picsum.photos/id/237/200/200",
      },
    },
    {
      title: "title2" + query,
      created_at: "2023-01-23T45:67:89+09:00",
      id: "c686397e4a0f4f11683b",
      tags: [{ name: "tag1" }, { name: "tag3" }],
      user: {
        name: "user2",
        id: "user2",
        profile_image_url: "https://picsum.photos/seed/picsum/200/200",
      },
    },
    {
      title: "title3" + query,
      created_at: "2023-01-23T45:67:89+09:00",
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

export async function getArticleDetail(
  token: string,
  id: string,
): Promise<ArticleDetail> {
  console.log(`getArticleDetail: token = ${token}`);

  // TODO: impl data fetch
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    title: "title1" + id,
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
