// The news category type definition
type Category =
  | "business"
  | "general"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

type Path =
  | "/"
  | "/business"
  | "/general"
  | "/entertainment"
  | "/health"
  | "/science"
  | "/sports"
  | "/technology";

type PageLoadCount = {
  "/": string;
  "/general": string;
  "/business": string;
  "/entertainment": string;
  "/health": string;
  "/science": string;
  "/sports": string;
  "/technology": string;
};

type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

interface MyNextApiRequest extends NextApiRequest {
  nextUrl: {
    href: string;
    origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
  };
}
