import PostDate from "./post-date";
import PostTags from "./post-tags";
import type { PostItemProps } from "./post-item.d";

export default function PostItem({
  to,
  title,
  createdAt,
  summary,
  authorImg,
  author,
  tags,
  imageSrc,
  imageAlt,
}: PostItemProps) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        <a href={to} className="block mb-6">
          <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-sm">
            <img
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              src={imageSrc}
              width={352}
              height={198}
              alt={imageAlt}
            />
          </figure>
        </a>

        {tags && (
          <div className="mb-3">
            <PostTags tags={tags} />
          </div>
        )}
        <h3 className="h4 mb-2">
          <a
            href={to}
            className="hover:text-gray-300 text-white transition duration-150 ease-in-out"
          >
            {title}
          </a>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow line-clamp-2">{summary}</p>
      <footer className="flex items-center mt-4">
        <a href="/">
          <img
            className="rounded-full shrink-0 mr-4"
            src={authorImg}
            width={40}
            height={40}
            alt={author}
          />
        </a>
        <div className="font-medium">
          <a
            href="/"
            className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
          >
            {author}
          </a>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500">
            <PostDate dateString={createdAt} />
          </span>
        </div>
      </footer>
    </article>
  );
}
